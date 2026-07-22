import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Galerie", href: "/galerie" },
  { label: "Transformationen", href: "/#transformationen" },
  { label: "Wie es wirkt", href: "/#wie-es-wirkt" },
  { label: "Über Sabine", href: "/#sabine" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/saltartwithenergy",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sabine.alter/",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] px-6 py-8 sm:py-12 border-t border-white/5">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-10">
        <div className="flex flex-col items-center justify-between gap-10 text-center md:flex-row md:items-start md:gap-16 md:text-left">
          <Link href="/" className="shrink-0 group">
            <div className="relative h-9 w-[96px] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Logo1.png"
                alt="SALT — art with energy"
                fill
                className="object-contain object-left brightness-0 invert opacity-90 group-hover:opacity-100"
                sizes="96px"
              />
            </div>
            <p className="mt-3 font-sans text-[0.6rem] font-bold tracking-[0.3em] text-white/30 uppercase group-hover:text-salt-crimson transition-colors">
              Art with Energy
            </p>
          </Link>

          <nav className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-[0.7rem] font-bold tracking-[0.2em] text-white/40 uppercase transition-all duration-300 hover:text-salt-crimson hover:tracking-[0.25em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-salt-crimson hover:text-salt-crimson hover:bg-salt-crimson/5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white/5" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-10">
          <p className="font-sans text-[0.65rem] font-bold leading-tight tracking-[0.1em] text-white/20 uppercase">
            © {year} SALT — Sabine Alter. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/impressum"
              className="font-sans text-[0.65rem] font-bold leading-tight tracking-[0.15em] text-white/20 uppercase transition-colors duration-300 hover:text-white/60"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-sans text-[0.65rem] font-bold leading-tight tracking-[0.15em] text-white/20 uppercase transition-colors duration-300 hover:text-white/60"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
