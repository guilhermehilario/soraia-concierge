export function GoldList({ children }: { children: React.ReactNode }) {
  return <ul className="gold-list">{children}</ul>;
}

export function GoldListItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <span className="mark">›</span>
      <span>{children}</span>
    </li>
  );
}
