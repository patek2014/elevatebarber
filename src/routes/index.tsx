import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  Scissors, Sparkles, Hand, Wind, Award, Clock, MapPin, Phone,
  Star, Check, ChevronDown, Calendar, Instagram, ArrowRight, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import heroAsset from "@/assets/toned-3.jpg.asset.json";
import g1Asset from "@/assets/toned-1.jpg.asset.json";
import g2Asset from "@/assets/toned-2.jpg.asset.json";
import g3Asset from "@/assets/toned-5.jpg.asset.json";
import g4Asset from "@/assets/toned-4.jpg.asset.json";
import g5Asset from "@/assets/toned-3.jpg.asset.json";
import g6Asset from "@/assets/toned-6.jpg.asset.json";
import teamAngelo from "@/assets/team-angelo.jpg.asset.json";
import teamMpeo from "@/assets/team-mpeo.jpg.asset.json";
import teamNazley from "@/assets/team-nazley.jpg.asset.json";
import teamAhmad from "@/assets/team-ahmad.jpg.asset.json";
import teamOsama from "@/assets/team-osama.jpg.asset.json";
import teamAlan from "@/assets/team-alan.jpg.asset.json";
const heroImg = heroAsset.url;
const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;
const g4 = g4Asset.url;
const g5 = g5Asset.url;
const g6 = g6Asset.url;
import logoAsset from "@/assets/elevated-barber-logo.webp.asset.json";

const team = [
  { name: "Angelo", role: "Master Barber", rating: 5.0, photo: teamAngelo.url },
  { name: "Mpeo", role: "Therapist", rating: 5.0, photo: teamMpeo.url },
  { name: "Nazley", role: "Facial Therapist", rating: 5.0, photo: teamNazley.url },
  { name: "Ahmad", role: "Master Barber", rating: 5.0, photo: teamAhmad.url },
  { name: "Osama", role: "Master Barber", rating: 5.0, photo: teamOsama.url },
  { name: "Alan", role: "Master Barber", rating: 4.9, photo: teamAlan.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevated Barber Parkview — Randburg's Premier Men's Grooming" },
      { name: "description", content: "Precision cuts, hot towel shaves, hydra facials & luxury grooming in Parkview, Randburg. 333+ five-star reviews. Book your chair today." },
    ],
  }),
  component: Index,
});

const categories = ["Cuts & Hair", "Beards & Shaves", "Hands & Feet", "Facial Treatments"] as const;
type Category = (typeof categories)[number];

const services: { icon: typeof Scissors; name: string; desc: string; price: string; time: string; category: Category }[] = [
  // Cuts & Hair
  { icon: Wind, name: "Haircut Gents", desc: "The signature Elevated experience. Scissor and clipper mastery.", price: "R140", time: "10 min", category: "Cuts & Hair" },
  { icon: Scissors, name: "Designer", desc: "Custom designer cut tailored to your style.", price: "R190", time: "10 min", category: "Cuts & Hair" },
  { icon: Scissors, name: "Fade", desc: "Crisp, seamless fade — skin, low, mid or high.", price: "R190", time: "15 min", category: "Cuts & Hair" },
  { icon: Scissors, name: "Scissor Cut", desc: "Full scissor work for texture and finesse.", price: "R190", time: "15 min", category: "Cuts & Hair" },
  { icon: Scissors, name: "Flat Top", desc: "Classic flat top, sharply shaped.", price: "R190", time: "10 min", category: "Cuts & Hair" },
  { icon: Scissors, name: "Clipper Cut", desc: "Clean, sharp clipper work. In and out looking fresh.", price: "R120", time: "10 min", category: "Cuts & Hair" },
  { icon: Award, name: "Haircut Kids / Students", desc: "Precision cut for kids and students. Same craft, smaller bill.", price: "R120", time: "10 min", category: "Cuts & Hair" },
  { icon: Hand, name: "Haircut Pensioners", desc: "Respectful, refined grooming for our seasoned gentlemen.", price: "R120", time: "10 min", category: "Cuts & Hair" },
  { icon: Sparkles, name: "Kids Design", desc: "Fun, creative cuts and designs for the little ones.", price: "R50", time: "10 min", category: "Cuts & Hair" },
  { icon: Sparkles, name: "Hair Relaxer", desc: "Smooth, manageable finish with a professional relaxer.", price: "R250", time: "20 min", category: "Cuts & Hair" },
  { icon: Award, name: "Special (Hair & Beard)", desc: "Full cut plus beard sculpt — the complete package.", price: "R280", time: "20 min", category: "Cuts & Hair" },

  // Beards & Shaves
  { icon: Scissors, name: "Beard Trim", desc: "Sharp lines, even length, clean finish.", price: "R50", time: "10 min", category: "Beards & Shaves" },
  { icon: Sparkles, name: "Beard Colouring", desc: "Rich, natural beard colour to refresh your look.", price: "R150", time: "20 min", category: "Beards & Shaves" },
  { icon: Wind, name: "Hot Towel Shave", desc: "The full ritual — hot towel, oils, straight razor finish.", price: "R140", time: "15 min", category: "Beards & Shaves" },

  // Hands & Feet
  { icon: Hand, name: "Gloss Guard / Polish", desc: "Nail polish application for a clean, glossy finish.", price: "R80", time: "10 min", category: "Hands & Feet" },
  { icon: Hand, name: "Little Luxe Pedicure (Boys or Girls)", desc: "Clip, file, cuticle work, buff and shine.", price: "R120", time: "20 min", category: "Hands & Feet" },
  { icon: Hand, name: "Little Luxe Manicure (Boys or Girls)", desc: "Clip, file, cuticle work, buff and shine.", price: "R110", time: "20 min", category: "Hands & Feet" },
  { icon: Hand, name: "The Soft Groom Pedicure", desc: "Soak and massage, clip, cuticle work, buff and shine.", price: "R350", time: "25 min", category: "Hands & Feet" },
  { icon: Hand, name: "Power Groom Pedicure", desc: "Clip, file, cuticle work, buff and shine.", price: "R210", time: "20 min", category: "Hands & Feet" },
  { icon: Hand, name: "The Soft Groom Manicure", desc: "Soak and massage, clip, cuticle work, buff and shine.", price: "R300", time: "25 min", category: "Hands & Feet" },
  { icon: Hand, name: "Power Groom Manicure", desc: "Clip, file, cuticle work, buff and shine.", price: "R200", time: "20 min", category: "Hands & Feet" },

  // Facial Treatments
  { icon: Sparkles, name: "Facial Cleanse & Steam", desc: "Deep cleanse and steam to refresh and renew.", price: "R150", time: "30 min", category: "Facial Treatments" },
  { icon: Sparkles, name: "Elevated Wax / Threading", desc: "Includes nose, ear and face wax.", price: "R200", time: "20 min", category: "Facial Treatments" },
  { icon: Sparkles, name: "Eyebrow Wax & Tint", desc: "Shape and tint for a defined brow.", price: "R150", time: "20 min", category: "Facial Treatments" },
  { icon: Sparkles, name: "Eyebrow Wax / Threading", desc: "Clean, shaped brows.", price: "R100", time: "10 min", category: "Facial Treatments" },
  { icon: Sparkles, name: "Cheek Wax / Threading", desc: "Smooth cheeks, sharp finish.", price: "R70", time: "10 min", category: "Facial Treatments" },
  { icon: Sparkles, name: "Nose Wax", desc: "Quick, comfortable nose wax.", price: "R50", time: "10 min", category: "Facial Treatments" },
  { icon: Sparkles, name: "Ear Wax", desc: "Quick ear wax for a polished finish.", price: "R50", time: "10 min", category: "Facial Treatments" },
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
  const [form, setForm] = useState({ name: "", phone: "", service: "Haircut Gents", date: "" });
  const [sent, setSent] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Cuts & Hair");

  const filteredServices = services.filter(s => s.category === activeCategory);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImg = useCallback(() => setLightbox(i => i === null ? i : (i + 1) % gallery.length), []);
  const prevImg = useCallback(() => setLightbox(i => i === null ? i : (i - 1 + gallery.length) % gallery.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, closeLightbox, nextImg, prevImg]);

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
            <a href="#team" className="hover:text-primary transition">Team</a>
            <a href="#about" className="hover:text-primary transition">About</a>
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
              <a href="#services" className="group px-7 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-sm shadow-gold hover:scale-[1.02] transition-all inline-flex items-center gap-2">
                View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#contact" className="px-7 py-4 border border-border hover:border-gold/60 hover:bg-card/50 transition rounded-sm font-medium inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book Your Chair
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
              <div><div className="font-display text-3xl text-gold-gradient font-bold">5+</div><div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">Services</div></div>
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
                  <a
                    href="https://www.instagram.com/elevatedbarber_parkview/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 border border-border hover:border-gold/60 rounded-sm font-medium inline-flex items-center justify-center gap-2 transition hover:text-gold"
                  >
                    <Instagram className="w-4 h-4" /> Book via Instagram
                  </a>
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

          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-gold border-transparent text-primary-foreground shadow-gold"
                    : "bg-card border-border hover:border-gold/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {filteredServices.map((s) => (
              <div key={s.name} className="group bg-card p-8 hover:bg-secondary transition-all duration-500 cursor-pointer relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm border border-gold/30 flex items-center justify-center group-hover:bg-gradient-gold group-hover:border-transparent transition">
                    <s.icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{s.time} · {s.price}</span>
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
              Average is everywhere.<br />
              Excellence is rare.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              At Elevate, every detail is intentional — from the precision of each cut to the atmosphere,
              service, and craftsmanship that define the experience. We don't believe a barbershop visit
              should feel routine. It should feel exceptional.

              <br /><br />

              Discover the four qualities that set us apart, keep our appointment book filled weeks in advance,
              and turn first-time visitors into lifelong clients.
            </p>

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
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className={`relative overflow-hidden rounded-md group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-gold ${g.span}`}
                aria-label={`View ${g.alt} larger`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition">{g.alt}</div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://instagram.com/elevatedbarber_parkview" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition">
              <Instagram className="w-4 h-4" /> @elevatedbarber_parkview
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 px-6 bg-secondary/40 grain-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— The Craftsmen</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold">Meet the <span className="italic text-gold-gradient">Elevated</span> team.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">Hand-picked masters of their craft. Every chair, every face, in expert hands.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group relative overflow-hidden rounded-md border border-border bg-card hover:border-gold/50 transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.photo} alt={`${m.name} — ${m.role} at Elevated Barber`} loading="lazy" width={768} height={960} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-semibold leading-tight">{m.name}</h3>
                      <p className="text-sm text-gold mt-1">{m.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gold/40 bg-background/70 backdrop-blur">
                      <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                      <span className="text-xs font-mono">{m.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-md overflow-hidden border border-border shadow-luxe">
              <img src={g2} alt="Inside Elevated Barber Parkview" loading="lazy" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— About Elevated</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              A grooming ritual,<br /><span className="italic text-gold-gradient">refined</span> in every detail.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Tucked into Parkview Centre in the heart of Randburg, Elevated Barber is where classic
                barbering meets a modern, refined ritual. Every cut, shave and treatment is delivered
                by master craftsmen — precision shaped to your style, finished with the kind of detail
                only true expertise can offer.
              </p>
              <p>
                Step inside and the world slows down. Warm light, gold accents, the quiet confidence of
                a chair that's been waiting for you. From a sharp signature cut to a hot towel shave or
                a full grooming experience, you don't just leave looking your best — you leave feeling
                <span className="text-gold"> Elevated</span>.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-sm shadow-gold hover:scale-[1.02] transition inline-flex items-center gap-2">
                Book Your Chair <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#team" className="px-6 py-3 border border-border hover:border-gold/60 transition rounded-sm font-medium inline-flex items-center gap-2">
                Meet the team
              </a>
            </div>
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
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/elevatedbarber_parkview/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Elevated Barber on Instagram"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-gold/60 rounded-sm font-medium transition hover:text-gold"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
              <span className="ml-2">5.0 · 333 reviews</span>
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-card/80 border border-border hover:border-gold/60 hover:bg-card flex items-center justify-center transition z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-card/80 border border-border hover:border-gold/60 hover:bg-card flex items-center justify-center transition z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-card/80 border border-border hover:border-gold/60 hover:bg-card flex items-center justify-center transition z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <figure className="relative max-w-6xl max-h-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-md shadow-luxe"
            />
            <figcaption className="text-sm text-muted-foreground flex items-center gap-3">
              <span className="text-gold font-mono">{String(lightbox + 1).padStart(2, "0")}</span>
              <span className="w-8 h-px bg-border" />
              <span>{gallery[lightbox].alt}</span>
              <span className="w-8 h-px bg-border" />
              <span className="font-mono">{String(gallery.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
