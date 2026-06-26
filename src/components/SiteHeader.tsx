import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Αρχική" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/projects", label: "Έργα" },
  { to: "/about", label: "Η Εταιρεία" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--navy-deep)]/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-accent)] text-white font-display font-bold text-sm shadow-[var(--shadow-glow)] group-hover:scale-105 transition-transform">
            A
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white uppercase">
            ARANDTECH
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-[image:var(--gradient-accent)] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
        >
          Ζητήστε Προσφορά
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[color:var(--navy-deep)]/98 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-white/85 hover:bg-white/5"
                activeProps={{ className: "bg-white/5 text-white" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-center font-semibold text-white"
            >
              Ζητήστε Προσφορά
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
