// GoHighLevel CRM, alongside Resend: every lead and book buyer becomes (or updates) a GHL contact, tagged with what
// they signed up for, with the form's answers as a note; enquiries and invitations also open an opportunity.
// Resend still sends the team notification and the auto-replies; GHL workflows can follow up from the tags.
// Env: GHL_TOKEN (sub-account Private Integration token), GHL_LOCATION_ID; optional GHL_PIPELINE_ID + GHL_STAGE_ID.
// Off (silently) until GHL_TOKEN and GHL_LOCATION_ID are set. Never throws: the lead has already reached the team.

const API = 'https://services.leadconnectorhq.com';
const VERSION = process.env.GHL_API_VERSION ?? 'v3';

export type GhlLead = {
  email: string;
  firstName?: string;
  lastName?: string;
  tags: string[];
  note?: string;          // the form's answers, saved on the contact
  source?: string;        // e.g. "Website — Invite Remi page"
  opportunity?: string;   // opens an opportunity with this name (when GHL_PIPELINE_ID is set)
};

export const ghlEnabled = () => !!process.env.GHL_TOKEN && !!process.env.GHL_LOCATION_ID;

async function call(path: string, body: object) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.GHL_TOKEN}`, Version: VERSION, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GHL ${path} ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json();
}

export async function addToGhl(lead: GhlLead) {
  if (!ghlEnabled()) return;
  const locationId = process.env.GHL_LOCATION_ID!;
  try {
    // Upsert matches an existing contact by email. Tags go on separately: upsert's own `tags` would replace theirs.
    const { contact } = await call('/contacts/upsert', {
      locationId, email: lead.email, firstName: lead.firstName, lastName: lead.lastName, source: lead.source,
    });
    const id: string = contact.id;
    const tags = [...new Set(lead.tags.filter(Boolean))];
    if (tags.length) await call(`/contacts/${id}/tags`, { tags });
    if (lead.note) await call(`/contacts/${id}/notes`, { body: lead.note });
    const { GHL_PIPELINE_ID, GHL_STAGE_ID } = process.env;
    if (lead.opportunity && GHL_PIPELINE_ID) {
      await call('/opportunities/', {
        locationId, contactId: id, pipelineId: GHL_PIPELINE_ID, pipelineStageId: GHL_STAGE_ID || undefined,
        name: lead.opportunity.slice(0, 200), status: 'open',
      });
    }
  } catch (e) {
    console.error('GoHighLevel sync failed', lead.email, e);
  }
}
