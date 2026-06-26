import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες — ARANDTECH" },
      { name: "description", content: "Οπτικές ίνες, FTTH Β' & Γ' φάσης, δίκτυα, τεχνική υποστήριξη, ηλεκτρολογικά και πιστοποιήσεις." },
      { property: "og:title", content: "Υπηρεσίες — ARANDTECH" },
      { property: "og:description", content: "Ολοκληρωμένες υπηρεσίες οπτικών ινών και δικτύων." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Οι Υπηρεσίες μας"
        title={<>Τεχνική <span className="text-gradient-accent">αρτιότητα</span> σε κάθε στάδιο.</>}
        subtitle="Από τη μελέτη και την κατασκευή έως τη συντήρηση και την πιστοποίηση, καλύπτουμε όλο το φάσμα έργων οπτικών ινών και τηλεπικοινωνιών."
      />
      <section className="py-24 bg-background">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group h-full rounded-3xl bg-card p-7 border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--navy-deep)] text-[color:var(--orange)] group-hover:bg-[image:var(--gradient-accent)] group-hover:text-white transition-colors duration-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-[color:var(--navy-deep)]">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x">
          <div className="rounded-[2rem] bg-[image:var(--gradient-navy)] p-10 lg:p-14 text-white text-center shadow-[var(--shadow-elegant)]">
            <h2 className="text-3xl lg:text-4xl font-bold">Χρειάζεστε προσαρμοσμένη λύση;</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">Συζητήστε μαζί μας τις ανάγκες του έργου σας — ετοιμάζουμε προσφορά εντός 24 ωρών.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)]">
              Ζητήστε Προσφορά <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
