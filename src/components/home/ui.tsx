// Small pieces shared by the homepage sections: the symbols cut from the homepage design (public/assets/home).
export const art = (name: string) => `/assets/home/${name}.webp`;

/** Decorative symbol cut from the homepage design. */
export function Sym({ name, className }: { name: string; className?: string }) {
  return <img className={className} src={art(name)} alt="" aria-hidden="true" loading="lazy" decoding="async" />;
}

/** Brushed rust underline under the words it wraps. */
export function Brush({ children }: { children: React.ReactNode }) {
  return <span className="hm-brush">{children}<Sym name="hm-underline" /></span>;
}
