import {
  Cable, Network, Wrench, Headphones, Zap, HardHat, ShieldCheck,
  Users, Award, Clock, Cog, Phone, MapPin, type LucideIcon,
} from "lucide-react";
import ftth from "@/assets/project-ftth.jpg";
import infra from "@/assets/project-infra.jpg";
import network from "@/assets/project-network.jpg";
import technical from "@/assets/project-technical.jpg";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const services: Service[] = [
  { icon: Cable, title: "Εγκαταστάσεις Οπτικών Ινών", desc: "Πλήρης εγκατάσταση, τερματισμός και κόλληση οπτικών ινών με σύγχρονο εξοπλισμό fusion splicing." },
  { icon: Network, title: "FTTH Β' & Γ' Φάση", desc: "Εξειδικευμένες εργασίες FTTH Β' και Γ' φάσης για παρόχους τηλεπικοινωνιών σε όλη την Ελλάδα." },
  { icon: Wrench, title: "Κατασκευή & Συντήρηση Δικτύων", desc: "Σχεδιασμός, κατασκευή και προληπτική συντήρηση δικτύων χαλκού και οπτικών ινών." },
  { icon: Headphones, title: "Τεχνική Υποστήριξη", desc: "Άμεση τεχνική υποστήριξη, διάγνωση βλαβών και αποκατάσταση 24/7 με εξειδικευμένα συνεργεία." },
  { icon: Zap, title: "Ηλεκτρολογικές Εργασίες", desc: "Ολοκληρωμένες ηλεκτρολογικές εγκαταστάσεις και πιστοποιημένες ηλεκτρολογικές μελέτες." },
  { icon: HardHat, title: "Υπηρεσίες Υπεργολαβίας", desc: "Αξιόπιστος συνεργάτης για μεγάλους εργολάβους και παρόχους, με αυστηρή τήρηση χρονοδιαγραμμάτων." },
  { icon: ShieldCheck, title: "Επιθεωρήσεις & Μετρήσεις", desc: "Έλεγχοι, μετρήσεις OTDR." },
];

export const reasons: { icon: LucideIcon; title: string }[] = [
  { icon: Users, title: "Έμπειρο προσωπικό" },
  { icon: Award, title: "Υψηλή ποιότητα εργασίας" },
  { icon: Clock, title: "Τήρηση χρονοδιαγραμμάτων" },
  { icon: Cog, title: "Σύγχρονος εξοπλισμός" },
  { icon: Phone, title: "Άμεση εξυπηρέτηση" },
  { icon: MapPin, title: "Πανελλαδική κάλυψη" },
];

export type Project = {
  title: string;
  category: "FTTH" | "Fiber Infrastructure" | "Network Installations" | "Technical Projects";
  image: string;
  desc: string;
  location: string;
  status: string;
};

export const projects: Project[] = [
  { title: "Έργο FTTH Β' Φάσης - Αττική", category: "FTTH", image: ftth, desc: "Εγκατάσταση και τερματισμός οπτικών ινών σε πάνω από 4.500 οικίες, με πλήρη πιστοποίηση δικτύου.", location: "Αθήνα, Αττική", status: "Ολοκληρωμένο" },
  { title: "Backbone Δίκτυο Οπτικών Ινών", category: "Fiber Infrastructure", image: infra, desc: "Υπόγεια εγκατάσταση οπτικού δακτυλίου 38 χλμ. για παροχή υπηρεσιών νέας γενιάς.", location: "Θεσσαλονίκη", status: "Ολοκληρωμένο" },
  { title: "Εγκατάσταση Data Center Network", category: "Network Installations", image: network, desc: "Δομημένη καλωδίωση και ολοκληρωμένη υποδομή δικτύου σε εμπορικό data center.", location: "Πειραιάς", status: "Ολοκληρωμένο" },
  { title: "Ηλεκτρομηχανολογικό Έργο", category: "Technical Projects", image: technical, desc: "Πλήρες ηλεκτρολογικό και μηχανολογικό έργο σε βιομηχανικές εγκαταστάσεις.", location: "Πάτρα", status: "Σε εξέλιξη" },
  { title: "FTTH Γ' Φάση - Πελοπόννησος", category: "FTTH", image: ftth, desc: "Σύνδεση τελικών χρηστών και ενεργοποίηση υπηρεσιών gigabit σε αστικές περιοχές.", location: "Καλαμάτα", status: "Σε εξέλιξη" },
  { title: "Αναβάθμιση Εταιρικού Δικτύου", category: "Network Installations", image: network, desc: "Αναβάθμιση εταιρικής υποδομής δικτύου με redundancy και νέους κόμβους κορμού.", location: "Ηράκλειο, Κρήτη", status: "Ολοκληρωμένο" },
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 320, suffix: "+", label: "Ολοκληρωμένα Έργα" },
  { value: 1450, suffix: "", label: "Χιλιόμετρα Δικτύου" },
  { value: 180, suffix: "+", label: "Ικανοποιημένοι Πελάτες" },
  { value: 12, suffix: "", label: "Χρόνια Εμπειρίας" },
];
