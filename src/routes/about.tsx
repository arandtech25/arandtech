import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { reasons, stats } from "@/lib/site-data";
import fiber from "@/assets/fiber-closeup.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Η Εταιρεία — ArAndTech" },
      { name: "description", content: "Η ArAndTech: εξειδικευμένες υπηρεσίες οπτικών ινών, FTTH και τεχνικών έργων με πανελλαδική κάλυψη και υψηλά πρότυπα ποιότητας." },
      { property: "og:title", content: "Η Εταιρεία — ArAndTech" },
      { property: "og:description", content: "Γνωρίστε την ArAndTech." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Αποστολή", text: "Παρέχουμε αξιόπιστες, εξειδικευμένες υπηρεσίες οπτικών ινών που στηρίζουν τις τηλεπικοινωνιακές υποδομές της χώρας." },
  { icon: Eye, title: "Όραμα", text: "Να είμαστε ο πρώτος επιλεγμένος συνεργάτης για παρόχους και εργολάβους σε όλη την Ελλάδα." },
  { icon: Heart, title: "Αξίες", text: "Συνέπεια, ασφάλεια, τεχνική αρτιότητα και απόλυτος σεβασμός στο χρονοδιάγραμμα του πελάτη." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Η Εταιρεία"
        title={<>Συνεργάτης σας στην <span className="text-gradient-accent">υποδομή οπτικών ινών</span>.</>}
        subtitle="Η ArAndTech είναι μια ελληνική εταιρεία τηλεπικοινωνιακών έργων, με ειδίκευση στις οπτικές ίνες, το FTTH και τις τεχνικές υπηρεσίες πεδίου."
      />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={fiber} alt="Οπτικές ίνες" width={1600} height={1000} loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--orange)]">Ποιοι Είμαστε</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[color:var(--navy-deep)]">Τεχνογνωσία που χτίζεται στο πεδίο.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Η ArAndTech δραστηριοποιείται στον τομέα των τηλεπικοινωνιών,
                παρέχοντας εξειδικευμένες υπηρεσίες εγκατάστασης οπτικών ινών,
                δικτύων και τεχνικής υποστήριξης. Με συνέπεια, επαγγελματισμό και
                υψηλά πρότυπα ποιότητας, προσφέρουμε αξιόπιστες λύσεις σε έργα
                μικρής και μεγάλης κλίμακας.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Συνεργαζόμαστε με τους μεγαλύτερους παρόχους και εργολάβους της
                χώρας, διαθέτοντας οργανωμένα συνεργεία και σύγχρονο εξοπλισμό για
                ταχεία και ασφαλή υλοποίηση.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--muted)]/40">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-card p-8 border border-border/60 shadow-[var(--shadow-card)]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--navy-deep)]">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[color:var(--navy-deep)] text-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="text-5xl lg:text-6xl font-display font-bold text-gradient-accent">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--orange)]">Γιατί ArAndTech</span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[color:var(--navy-deep)]">Γιατί να μας επιλέξετε</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-2xl bg-card border border-border/60 p-5 hover:border-[color:var(--orange)]/40 transition-colors">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--navy-deep)] text-[color:var(--orange)] shrink-0">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-[color:var(--navy-deep)]">{r.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)]">
              Επικοινωνήστε μαζί μας <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
