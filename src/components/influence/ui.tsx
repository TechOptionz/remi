import Icon, { type IconName } from '@/components/shared/Icon';

type Card = { icon?: IconName; name?: string; text: string };

/** The page's outlined card grids. `stack`: icon above a centred title (ethical); `side`: icon beside title and text
 *  (rooms); `disc`: icon in a rust disc beside the text (why it doesn't feel like bullshit, psychology, hard to hold). */
export function Cards({ items, layout, cols, className = '' }: { items: readonly Card[]; layout: 'stack' | 'side' | 'disc'; cols: number; className?: string }) {
  return (
    <ul className={`ui-cards ui-cards--${layout} ${className}`} style={{ '--cols': cols } as React.CSSProperties}>
      {items.map(c => (
        <li key={c.name ?? c.text}>
          {c.icon && <span className="ui-card-icon"><Icon name={c.icon} size={layout === 'disc' ? 30 : 40} strokeWidth={1.3} /></span>}
          <span className="ui-card-body">
            {c.name && <span className="ui-card-name">{c.name}</span>}
            <span>{c.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
