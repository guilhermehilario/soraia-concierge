// Remonta a cada navegação, reproduzindo a animação de entrada das páginas.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
