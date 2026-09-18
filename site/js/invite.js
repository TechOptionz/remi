// Invite Remi page — room buttons preset the invitation form, which then submits to the CRM.
(function () {
  const { $, $$, qs } = window.RP;
  const form = $('.invite-form');
  const sent = $('.invite-sent');
  const invitation = form.elements.invitation;
  const setInvitation = value => { if ([...invitation.options].some(o => o.value === value)) invitation.value = value; };

  // Other pages can link here as invite-remi.html?invite=Speaking#invite-form
  setInvitation(qs.get('invite'));

  $$('[data-invite]').forEach(el => el.addEventListener('click', () => {
    setInvitation(el.dataset.invite);
    // Let the anchor scroll first, then put the cursor in the first field without jumping
    setTimeout(() => form.elements.name.focus({ preventScroll: true }), 450);
  }));

  form.addEventListener('submit', e => {
    e.preventDefault();
    // TODO: replace with the GoHighLevel webhook / form endpoint
    console.log('invitation → GoHighLevel', Object.fromEntries(new FormData(form)));
    form.hidden = true;
    sent.hidden = false;
    sent.focus();
  });
  $('.js-invite-reset').addEventListener('click', () => { form.reset(); sent.hidden = true; form.hidden = false; });
})();
