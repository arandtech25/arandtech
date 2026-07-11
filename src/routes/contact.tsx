import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Facebook, Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useServerFn } from "@tanstack/react-start";
import { sendContactEmail } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — ARANDTECH" },
      { name: "description", content: "Επικοινωνήστε με την ARANDTECH για προσφορά σε έργα οπτικών ινών, FTTH, δικτύων και τεχνικών υπηρεσιών." },
      { property: "og:title", content: "Επικοινωνία — ARANDTECH" },
      { property: "og:description", content: "Ζητήστε προσφορά ή τεχνική υποστήριξη." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://arandtech.lovable.app/contact#business",
          name: "ARANDTECH",
          url: "https://arandtech.lovable.app/contact",
          telephone: "+30 210 3000721",
          email: "arandtech25@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Αθήνα",
            addressCountry: "GR",
          },
          areaServed: "GR",
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const send = useServerFn(sendContactEmail);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setErrorMsg(null);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          subject: String(fd.get("subject") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Κάτι πήγε στραβά");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία"
        title={<>Ας συζητήσουμε το <span className="text-gradient-accent">επόμενο έργο</span> σας.</>}
        subtitle="Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας — απαντάμε εντός 24 ωρών."
      />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border/60 shadow-[var(--shadow-card)] p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-[color:var(--navy-deep)]">Φόρμα Επικοινωνίας</h2>
              <p className="mt-2 text-sm text-muted-foreground">Όλα τα πεδία είναι υποχρεωτικά.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field id="name" label="Όνομα" type="text" />
                <Field id="email" label="Email" type="email" />
                <Field id="phone" label="Τηλέφωνο" type="tel" />
                <Field id="subject" label="Θέμα" type="text" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Μήνυμα</label>
                <textarea id="message" name="message" required rows={5} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--orange)] focus:ring-2 focus:ring-[color:var(--orange)]/20 resize-none" />
              </div>

              <button type="submit" disabled={status === "sending"} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100">
                {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Αποστολή...</>) :
                 status === "sent" ? (<><CheckCircle2 className="h-4 w-4" /> Στάλθηκε επιτυχώς</>) :
                 (<>Αποστολή Μηνύματος <Send className="h-4 w-4" /></>)}
              </button>
              {status === "error" && (
                <p className="mt-4 text-sm text-destructive">{errorMsg ?? "Αποτυχία αποστολής. Δοκιμάστε ξανά."}</p>
              )}
            </form>

          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <InfoCard icon={Phone} label="Τηλέφωνο" value="+30 210 3000721" href="tel:+302103000721" />
              <InfoCard icon={Mail} label="Email" value="arandtech25@gmail.com" href="mailto:arandtech25@gmail.com" />
              <InfoCard icon={MapPin} label="Διεύθυνση" value="Αθήνα, Ελλάδα — Πανελλαδική κάλυψη" />

              <div className="rounded-3xl bg-[image:var(--gradient-navy)] p-6 text-white shadow-[var(--shadow-card)]">
                <h3 className="font-semibold">Ακολουθήστε μας</h3>
                <p className="mt-1 text-sm text-white/70">Μείνετε ενημερωμένοι για τα νέα μας έργα.</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-[color:var(--orange)] transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/arandtech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-[color:var(--orange)] transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </section>
    </>
  );
}

function Field({ id, label, type }: { id: string; label: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={id} name={id} type={type} required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[color:var(--orange)] focus:ring-2 focus:ring-[color:var(--orange)]/20" />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-card border border-border/60 p-5 hover:border-[color:var(--orange)]/40 transition-colors">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--navy-deep)] text-[color:var(--orange)] shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 font-semibold text-[color:var(--navy-deep)] break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
