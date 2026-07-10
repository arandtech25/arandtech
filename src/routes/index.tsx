import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import fiberCloseup from "@/assets/fiber-closeup.jpg";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { services, reasons, stats } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARANDTECH — Εγκαταστάσεις Οπτικών Ινών, FTTH & Δίκτυα" },
      { name: "description", content: "Η ARANDTECH παρέχει εξειδικευμένες υπηρεσίες FTTH, εγκαταστάσεις οπτικών ινών, κατασκευή δικτύων και τεχνικά έργα με πανελλαδική κάλυψη." },
      { property: "og:title", content: "ARANDTECH — Οπτικές Ίνες & FTTH" },
      { property: "og:description", content: "Αξιόπιστος συνεργάτης σε έργα οπτικών ινών, δικτύων και τεχνικής υποστήριξης." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden text-white">
        <img
          src={hero}
          alt="Τεχνικοί ARANDTECH εγκαθιστούν οπτικές ίνες"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] via-transparent to-[color:var(--navy-deep)]/40" />

        <div className="container-x relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--orange)] animate-glow" />
                Τηλεπικοινωνίες • Οπτικές Ίνες • FTTH
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight uppercase">
                AR<span className="text-gradient-accent">AND</span>TECH
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight normal-case text-white/90 mt-4">
                  — Εγκαταστάσεις Οπτικών Ινών &amp; FTTH
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
                Εξειδικευμένες λύσεις εγκατάστασης οπτικών ινών και τεχνικών έργων.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
                >
                  Ζητήστε Προσφορά
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:bg-white/15 transition-colors"
                >
                  Οι Υπηρεσίες μας
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 text-xs tracking-widest uppercase animate-glow">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={fiberCloseup}
                alt="Κοντινό οπτικών ινών"
                width={1600}
                height={1000}
                loading="lazy"
                className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl glass-light p-5 shadow-[var(--shadow-card)]">
                <div className="text-3xl font-display font-bold text-[color:var(--navy)]">3+</div>
                <div className="text-xs text-muted-foreground mt-1">Χρόνια εμπειρίας στον κλάδο</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--orange)]">
                Ποιοι Είμαστε
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[color:var(--navy-deep)]">
                Τεχνογνωσία στην υποδομή <span className="text-gradient-accent">οπτικών ινών</span>.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Η ARANDTECH δραστηριοποιείται στον τομέα των τηλεπικοινωνιών,
                παρέχοντας εξειδικευμένες υπηρεσίες εγκατάστασης οπτικών ινών,
                δικτύων και τεχνικής υποστήριξης. Με συνέπεια, επαγγελματισμό και
                υψηλά πρότυπα ποιότητας, προσφέρουμε αξιόπιστες λύσεις σε έργα
                μικρής και μεγάλης κλίμακας.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {["Πιστοποιημένα συνεργεία", "Σύγχρονος εξοπλισμός", "Πανελλαδική κάλυψη", "Τήρηση SLA"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[color:var(--orange)] shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--navy)] hover:text-[color:var(--orange)] transition-colors">
                Μάθετε περισσότερα <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-[color:var(--muted)]/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--orange)]">Υπηρεσίες</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[color:var(--navy-deep)]">
              Ολοκληρωμένες λύσεις, από τη μελέτη έως την παράδοση.
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="group h-full rounded-3xl bg-card p-7 shadow-[var(--shadow-card)] border border-border/60 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--navy-deep)] text-[color:var(--orange)] group-hover:bg-[image:var(--gradient-accent)] group-hover:text-white transition-colors duration-500">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[color:var(--navy-deep)]">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24 lg:py-32 bg-[color:var(--navy-deep)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[color:var(--orange)]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[color:var(--navy-soft)]/40 blur-3xl" />
        </div>
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--orange)]">Γιατί ARANDTECH</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">Γιατί να μας επιλέξετε</h2>
            <p className="mt-5 text-white/70 text-lg">
              Συνδυάζουμε εμπειρία πεδίου, σύγχρονο εξοπλισμό και αυστηρή διαχείριση
              έργου για να παραδίδουμε αξιόπιστα αποτελέσματα.
            </p>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-2xl glass p-5 hover:bg-white/10 transition-colors">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-accent)] shrink-0">
                    <r.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">{r.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="text-5xl lg:text-6xl font-display font-bold text-gradient-accent">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground whitespace-pre-line">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--gradient-navy)] p-10 lg:p-16 text-white shadow-[var(--shadow-elegant)]">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--orange)]/25 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1fr_auto] items-center gap-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold">Έτοιμοι για το επόμενο έργο σας;</h2>
                  <p className="mt-3 text-white/70 max-w-xl">Επικοινωνήστε μαζί μας για μια εξατομικευμένη προσφορά. Απαντάμε εντός 24 ωρών.</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--navy-deep)] px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Επικοινωνία <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
