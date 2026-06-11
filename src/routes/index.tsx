import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors, Sparkles, Hand, Wind, Award, Clock, MapPin, Phone,
  Star, Check, ChevronDown, Calendar, Instagram, ArrowRight, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import heroAsset from "@/assets/real-unnamed_1.jpg.asset.json";
import g1Asset from "@/assets/real-f.jpg.asset.json";
import g2Asset from "@/assets/real-unnamed.jpg.asset.json";
import g3Asset from "@/assets/real-unnamed_3.jpg.asset.json";
import g4Asset from "@/assets/real-unnamed_4.jpg.asset.json";
import g5Asset from "@/assets/real-unnamed_1.jpg.asset.json";
import g6Asset from "@/assets/real-unnamed_2.jpg.asset.json";
const heroImg = heroAsset.url;
const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;
const g4 = g4Asset.url;
const g5 = g5Asset.url;
const g6 = g6Asset.url;
import logoAsset from "@/assets/elevated-barber-logo.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevated Barber Parkview — Randburg's Premier Men's Grooming" },
      { name: "description", content: "Precision cuts, hot towel shaves, hydra facials & luxury grooming in Parkview, Randburg. 333+ five-star reviews. Book your chair today." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Scissors, name: "Signature Cut", desc: "Precision scissor & clipper craft, tailored to your face shape.", price: "From R280" },
  { icon: Wind, name: "Hot Towel Shave", desc: "Steamed towels, hand-stropped straight razor, glass-smooth finish.", price: "From R220" },
  { icon: Sparkles, name: "Hydra Facial", desc: "Deep cleanse, exfoliate, hydrate. Skin that looks like you slept.", price: "From R450" },
  { icon: Hand, name: "Manicure & Pedicure", desc: "Quietly essential. Sharp hands, sharp impression.", price: "From R250" },
  { icon: Award, name: "Beard Sculpt", desc: "Line work, wax, and hot oil treatment. Beard, perfected.", price: "From R180" },
  { icon: Clock, name: "The Full Experience", desc: "Cut, shave, facial, mani — two hours that reset your week.", price: "From R890" },
];

const reasons = [
  { num: "01", title: "333+ Five-Star Reviews", body: "A perfect 5.0 on Google. The chairs speak for themselves." },
  { num: "02", title: "Master Barbers Only", body: "Every barber is hand-selected. No apprentices on your chair." },
  { num: "03", title: "Grooming, Not Just A Cut", body: "From hot towel shaves to hydra facials — full-service excellence." },
  { num: "04", title: "Parkview Centre Location", body: "Easy parking, central Randburg, walk in or book online." },
];

const gallery = [
  { src: g1, alt: "The chair — gold detail", span: "md:col-span-2 md:row-span-2" },
  { src: g4, alt: "Inside the shop", span: "" },
  { src: g2, alt: "Twin gold barber chairs", span: "" },
  { src: g3, alt: "Master barbers at work", span: "md:col-span-2" },
  { src: g5, alt: "Precision cut in progress", span: "" },
  { src: g6, alt: "Elevated Barber storefront", span: "" },
];

const faqs = [
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome but Saturdays book up fast. We recommend booking online via Fresha or calling us directly to secure your preferred barber and time." },
  { q: "How long does a typical visit take?", a: "A cut runs 30–45 minutes. Cut + hot towel shave around 60. The Full Experience (cut, shave, facial, mani) is a luxurious two hours." },
  { q: "What's your cancellation policy?", a: "Free cancellation up to 4 hours before your appointment. Late cancellations may incur a 50% charge to respect our barbers' time." },
  { q: "Do you cater to students?", a: "Yes — we offer a discounted student haircut with a valid student ID. Same precision, smaller bill." },
  { q: "Is parking available?", a: "Plenty. Parkview Centre offers free, secure parking right at the door. Shop 13, 54 Tyrone Avenue." },
  { q: "Can I gift a service?", a: "Absolutely. Gift cards are available in-store for any service or package — the sharpest gift you can give." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", service: "Signature Cut", date: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", service: "Signature Cut", date: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Elevated Barber Parkview logo" className="h-10 md:h-11 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#why" className="hover:text-primary transition">Why Us</a>
            <a href="#gallery" className="hover:text-primary transition">Gallery</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </div>
          <a href="tel:+27100852224" className="px-5 py-2.5 bg-gradient-gold text-primary-foreground font-medium text-sm rounded-sm hover:scale-105 transition-transform shadow-gold">
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative min-h-screen pt-20 grain-overlay">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Barber giving a precision cut" width={1600} height={1200} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gold/30 rounded-full mb-8 bg-card/50 backdrop-blur">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
              <span className="text-xs text-muted-foreground">5.0 · 333 Google Reviews</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-bold mb-6">
              The cut that<br />
              <span className="text-gold-gradient italic">elevates</span> the man.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Randburg's most refined barber experience. Precision cuts, hot towel shaves,
              and full-service grooming in the heart of Parkview Centre.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="group px-7 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-sm shadow-gold hover:scale-[1.02] transition-all inline-flex items-center gap-2">
                Book Your Chair <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="tel:+27100852224" className="px-7 py-4 border border-border hover:border-gold/60 hover:bg-card/50 transition rounded-sm font-medium inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> 010 085 2224
              </a>
            </div>

            <div className="flex gap-8 text-sm">
              <div><div className="font-display text-3xl text-gold-gradient font-bold">5.0</div><div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Google Rating</div></div>
              <div className="w-px bg-border" />
              <div><div className="font-display text-3xl text-gold-gradient font-bold">333+</div><div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Happy Clients</div></div>
              <div className="w-px bg-border" />
              <div><div className="font-display text-3xl text-gold-gradient font-bold">10+</div><div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Services</div></div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div id="contact" className="lg:col-span-5">
            <div className="bg-card/90 backdrop-blur-xl border border-border rounded-md p-8 shadow-luxe">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Reserve your seat</div>
                <h3 className="font-display text-2xl font-bold">Book in 30 seconds</h3>
                <p className="text-sm text-muted-foreground mt-1">We'll confirm by phone within the hour.</p>
              </div>
              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Check className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="font-display text-xl font-semibold mb-1">Booking received</div>
                  <p className="text-sm text-muted-foreground">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1 w-full bg-input border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-gold transition" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Phone</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full bg-input border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-gold transition" placeholder="082 000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Service</label>
                      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="mt-1 w-full bg-input border border-border rounded-sm px-3 py-3 focus:outline-none focus:border-gold transition">
                        {services.map(s => <option key={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Preferred date</label>
                      <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="mt-1 w-full bg-input border border-border rounded-sm px-3 py-3 focus:outline-none focus:border-gold transition" />
                    </div>
                  </div>
                  <button type="submit" className="w-full mt-2 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-sm shadow-gold hover:scale-[1.01] transition inline-flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Request Booking
                  </button>
                  <p className="text-[11px] text-muted-foreground text-center">By booking you agree to our cancellation policy.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Our Craft</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">Services designed<br />for the <span className="italic text-gold-gradient">discerning</span> gentleman.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">From a quick precision cut to the two-hour full experience — every service is delivered with master-level care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {services.map((s) => (
              <div key={s.name} className="group bg-card p-8 hover:bg-secondary transition-all duration-500 cursor-pointer relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center group-hover:bg-gradient-gold group-hover:border-transparent transition">
                    <s.icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{s.price}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center gap-2 text-sm text-gold opacity-0 group-hover:opacity-100 transition">
                  Book this <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-28 px-6 bg-secondary/40 grain-overlay">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Why Elevated</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              We're not the<br />cheapest barber.<br />
              <span className="italic text-gold-gradient">We're the best one.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Four reasons our chairs are booked out weeks in advance — and why our clients
              don't go anywhere else once they sit in one.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 hover:border-gold transition">
              Reserve your chair <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {reasons.map((r) => (
              <div key={r.num} className="group flex gap-6 p-6 border border-border hover:border-gold/40 rounded-md bg-card/50 hover:bg-card transition-all">
                <div className="font-display text-3xl text-gold-gradient font-bold shrink-0">{r.num}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— The Chair</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold">Inside <span className="italic text-gold-gradient">Elevated</span>.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">Atmosphere, craft, and detail. A look at what awaits you in Parkview Centre.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
            {gallery.map((g, i) => (
              <div key={i} className={`relative overflow-hidden rounded-md group ${g.span}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition">{g.alt}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://instagram.com/elevatedbarber_parkview" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition">
              <Instagram className="w-4 h-4" /> @elevatedbarber_parkview
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— Questions</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold">Before you <span className="italic text-gold-gradient">sit down</span>.</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border bg-card rounded-md overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary transition">
                  <span className="font-display text-lg font-semibold pr-4">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-gold transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">— Ready when you are</div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            Your best cut<br />is <span className="italic text-gold-gradient">one chair</span> away.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Walk in sharp. Walk out sharper. Book your slot at Elevated Barber Parkview today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a href="#contact" className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-sm shadow-gold hover:scale-105 transition inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book Online
            </a>
            <a href="tel:+27100852224" className="px-8 py-4 border border-gold/40 hover:bg-gold/10 transition rounded-sm font-medium inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call 010 085 2224
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-border text-left">
            <div>
              <MapPin className="w-5 h-5 text-gold mb-3" />
              <div className="font-semibold mb-1">Visit</div>
              <p className="text-sm text-muted-foreground">Parkview Centre, Shop 13<br />54 Tyrone Avenue<br />Parkview, Randburg</p>
            </div>
            <div>
              <Clock className="w-5 h-5 text-gold mb-3" />
              <div className="font-semibold mb-1">Hours</div>
              <p className="text-sm text-muted-foreground">Mon–Fri · 8am – 7pm<br />Sat · 8am – 5pm<br />Sun · By appointment</p>
            </div>
            <div>
              <Phone className="w-5 h-5 text-gold mb-3" />
              <div className="font-semibold mb-1">Contact</div>
              <p className="text-sm text-muted-foreground">010 085 2224<br />@elevatedbarber_parkview<br />Book via Fresha</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Elevated Barber Parkview" className="h-8 w-auto" />
            <span>© {new Date().getFullYear()} Elevated Barber Parkview. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
            <span className="ml-2">5.0 · 333 reviews</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
