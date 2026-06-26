import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white/80">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-accent)] text-white font-display font-bold text-sm">
              A
            </span>
            <span className="font-display text-lg font-bold text-white">ArAndTech</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-xs">
            Εξειδικευμένες λύσεις εγκατάστασης οπτικών ινών, δικτύων και τεχνικών
            έργων με συνέπεια και επαγγελματισμό.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-[color:var(--orange)] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-[color:var(--orange)] transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Πλοήγηση</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-[color:var(--orange)] transition-colors">Αρχική</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--orange)] transition-colors">Υπηρεσίες</Link></li>
            <li><Link to="/projects" className="hover:text-[color:var(--orange)] transition-colors">Έργα</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--orange)] transition-colors">Η Εταιρεία</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--orange)] transition-colors">Επικοινωνία</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Υπηρεσίες</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li>Εγκαταστάσεις Οπτικών Ινών</li>
            <li>FTTH Β' & Γ' Φάση</li>
            <li>Δίκτυα & Συντήρηση</li>
            <li>Τεχνική Υποστήριξη</li>
            <li>Ηλεκτρολογικές Εργασίες</li>
            <li>Υπηρεσίες Υπεργολαβίας</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Επικοινωνία</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-[color:var(--orange)] shrink-0" /><span>+30 210 000 0000</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-[color:var(--orange)] shrink-0" /><span>info@arandtech.gr</span></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--orange)] shrink-0" /><span>Αθήνα, Ελλάδα<br/>Πανελλαδική κάλυψη</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ArAndTech. Με την επιφύλαξη παντός δικαιώματος.</p>
          <p>Σχεδιασμός & Ανάπτυξη με προσοχή στη λεπτομέρεια.</p>
        </div>
      </div>
    </footer>
  );
}
