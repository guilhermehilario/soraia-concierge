"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "../_content/site";
import { ContactButton } from "./contact";

export function Footer() {
  const pathname = usePathname();

  // A página inicial ocupa a tela inteira, sem rodapé.
  if (pathname === "/") return null;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="footer-brand">
          <Image className="flame" src="/images/icone-chama.png" alt="" width={264} height={400} />
          <Image src="/images/logo-soraia.png" alt="Soraia" width={2014} height={455} />
        </Link>

        <nav className="footer-nav" aria-label="Rodapé">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <ContactButton>Contato</ContactButton>
        </nav>

        <p className="footer-copy">© 2026 SORAIA — Concierge Empresarial.</p>
      </div>
    </footer>
  );
}
