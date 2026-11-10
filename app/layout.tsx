import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ContactProvider } from "./_components/contact";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Chat } from "./_components/chat";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Soraia | Concierge Empresarial",
    template: "%s | Soraia Concierge Empresarial",
  },
  description: "Projetos que impulsionam o seu próximo nível.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ContactProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Chat />
        </ContactProvider>
      </body>
    </html>
  );
}
