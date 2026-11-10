"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ContactButton } from "./contact";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/atuacao", label: "Serviços" },
  { href: "/parcerias", label: "Parcerias" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Soraia, página inicial" onClick={closeMenu}>
          <Image className="brand-logo" src="/images/icone-chama.png" alt="" width={264} height={400} preload />
        </Link>

        <nav className="nav-main" aria-label="Principal">
          <ul className="nav-list">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link className={`nav-link${isActive(pathname, item.href) ? " active" : ""}`} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <span className="tagline">
            <span>Estratégia</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>Gestão</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>Inovação</span>
          </span>
          <ContactButton className="btn btn-outline header-cta">Contato</ContactButton>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="gold-texture" />
          <span className="gold-texture" />
          <span className="gold-texture" />
        </button>
      </div>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV.map((item) => (
          <Link
            key={item.href}
            className={`mobile-link${isActive(pathname, item.href) ? " active" : ""}`}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <ContactButton onClick={closeMenu}>Contato</ContactButton>
      </div>
    </header>
  );
}
