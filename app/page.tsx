import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home relative h-svh overflow-hidden bg-[#060f22] text-white">
      <div className="absolute inset-x-0 top-0 h-[64svh] [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:inset-y-0 lg:flex lg:h-auto lg:justify-end lg:[mask-image:none]">
        <Image
          src="/images/hero-fenix.jpg"
          alt=""
          width={3072}
          height={2048}
          preload
          sizes="100vw"
          className="h-full w-full object-cover object-[74%_center] lg:w-[max(100%,150svh)] lg:shrink-0 lg:object-[center_45%] [@media(min-width:1024px)_and_(min-aspect-ratio:3/2)]:[mask-image:linear-gradient(to_right,transparent,black_14%)]"
        />
      </div>

      <section className="relative z-10 flex h-full items-end justify-center px-6 pb-14 pt-20 lg:items-center lg:justify-end lg:p-0">
        <div className="flex w-full justify-center lg:w-[max(100%,150svh)] lg:justify-start lg:py-32 lg:pl-[12%]">
          <div className="flex w-[88%] max-w-[28rem] flex-col items-center text-center">
            <h1 className="w-[78%] sm:w-full">
              <Image
                src="/images/logo-soraia.png"
                alt="Soraia"
                width={2014}
                height={455}
                preload
                className="mx-auto h-auto w-full"
              />
              <span className="mt-3.5 block text-[clamp(0.55rem,2.35vw,0.75rem)] font-light uppercase tracking-[0.34em] sm:text-[clamp(0.7rem,3vw,0.95rem)] lg:text-[clamp(0.85rem,1.4vw,1.25rem)]">
                Concierge Empresarial
              </span>
            </h1>
            <span aria-hidden="true" className="textura-dourado mt-7 block h-px w-24 lg:mt-9" />
            <p className="mt-7 text-[0.85rem] font-light italic leading-relaxed text-white/70 lg:mt-9 lg:text-base">
              Projetos que impulsionam
              <br />o seu próximo nível.
            </p>
            <Link
              href="/sobre"
              className="group relative mt-8 inline-flex h-[50px] min-w-[200px] items-center justify-center rounded-lg px-8 outline-none focus-visible:ring-1 focus-visible:ring-dourado-claro lg:mt-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(15% 50% at 50% 100%, var(--color-dourado-claro) 0%, transparent 100%)",
                  filter: "blur(15px)",
                }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(10.7% 50% at 50% 100%, var(--color-dourado-claro) 0%, transparent 100%)",
                }}
              />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg bg-dourado/25">
                <span
                  className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, var(--color-laranja) 90%, var(--color-dourado-claro) 100%)",
                  }}
                />
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute inset-px rounded-[7px] bg-noite" />
              <span
                aria-hidden="true"
                className="textura-dourado pointer-events-none absolute inset-px rounded-[7px] transition-[clip-path] duration-700 ease-in-out [clip-path:polygon(60%_0,60%_0,40%_100%,40%_100%)] group-hover:[clip-path:polygon(0_0,140%_0,100%_100%,-40%_100%)]"
              />
              <span className="relative z-10 flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.3em]">
                <span className="relative inline-grid">
                  <span className="texto-dourado transition-opacity duration-500 ease-out group-hover:opacity-0">
                    Saiba mais
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 text-noite-profundo opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                  >
                    Saiba mais
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-dourado-claro transition-colors duration-500 ease-out group-hover:animate-seta-pulo group-hover:text-noite-profundo"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
