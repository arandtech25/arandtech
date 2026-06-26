import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/site-data";

const categories = ["Όλα", "FTTH", "Fiber Infrastructure", "Network Installations", "Technical Projects"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Έργα — ArAndTech" },
      { name: "description", content: "Επιλεγμένα έργα οπτικών ινών, FTTH, δικτύων και τεχνικών εγκαταστάσεων από την ArAndTech." },
      { property: "og:title", content: "Έργα — ArAndTech" },
      { property: "og:description", content: "Πορτφόλιο έργων οπτικών ινών και δικτύων." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Όλα");
  const filtered: Project[] = filter === "Όλα" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Πορτφόλιο"
        title={<>Έργα που χτίζουν <span className="text-gradient-accent">δίκτυα εμπιστοσύνης</span>.</>}
        subtitle="Επιλεγμένα παραδείγματα από την εμπειρία μας σε FTTH, υποδομές οπτικών ινών, εγκαταστάσεις δικτύων και τεχνικά έργα."
      />
      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium border transition-all ${
                  filter === c
                    ? "bg-[color:var(--navy-deep)] text-white border-transparent shadow-[var(--shadow-card)]"
                    : "bg-card text-foreground border-border hover:border-[color:var(--orange)] hover:text-[color:var(--orange)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.title + i} delay={(i % 3) * 80}>
                <article className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)]/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">{p.category}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-[color:var(--navy-deep)] text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                    <div className="mt-5 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {p.location}
                      </span>
                      <span className={`font-semibold ${p.status === "Ολοκληρωμένο" ? "text-emerald-600" : "text-[color:var(--orange)]"}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
