import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const links = [
  ["About", "/about"],
  ["Schedule", "/schedule"],
  ["Register", "/register"],
  ["Give", "/give"],
  ["Contact Us", "/contact"]
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f7f7f5] px-5 pb-7 pt-24 sm:px-8 lg:px-14 lg:pt-32">
      <div className="absolute right-[-10rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-violet-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_.6fr_.6fr]">
          <div>
            <img
              src="/main/Logoo.png"
              alt="Supernatural Community Church"
              className="h-20 w-auto object-contain object-left"
            />

            <h2 className="mt-10 max-w-3xl font-display text-[clamp(3.8rem,8vw,9rem)] leading-[0.76] tracking-[-0.06em]">
              The Word.
              <br />
              The Spirit.
              <br />
              <i>The encounter.</i>
            </h2>
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
              Explore
            </div>

            <nav className="mt-7 flex flex-col gap-3">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 text-sm transition-opacity hover:opacity-50"
                >
                  {label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
              Visit
            </div>

            <div className="mt-7 text-sm leading-7 text-black/55">
              1400 Lehigh Station Road
              <br />
              Rochester, NY 14467
              <br />
              <br />
              585 210 5038
              <br />
              info@supernaturalcc.org
            </div>

            <div className="mt-7 flex gap-2">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#youtube"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white"
              >
                <FaYoutube size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-black/35 sm:flex-row">
          <span>© 2026 Supernatural Community Church.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}