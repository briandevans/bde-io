import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function Office() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to contact section if hash is #contact
  useEffect(() => {
    if (window.location.hash === "#contact" && contactRef.current) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate a short delay for form submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    setErrors({});
    toast.success("Message sent successfully. We will respond shortly.");
  };

  return (
    <Layout>
      <SEO
        title="Leadership | BDE Ventures"
        description="BDE Ventures was founded by Brian D. Evans. Learn about our operator-first philosophy, accolades, and connect with us."
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="pt-12 md:pt-24 pb-20 relative min-h-screen">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-founder pointer-events-none z-[-1]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image/Profile */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden border border-border/50 relative mb-8">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077684115/nLNx4gEup6hKQEtExgUkNn/Brian_Turtleneck_cropped_17b4b49c.webp"
                    alt="Brian D. Evans — Founder of BDE Ventures"
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 bg-accent text-accent-foreground px-4 py-2 font-bold uppercase text-sm tracking-wider">
                    Brian D. Evans
                  </div>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://x.com/briandevans"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Brian on Twitter / X"
                    className="p-3 border border-border/50 rounded-sm hover:border-accent hover:text-accent transition-colors text-gray-400"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/briandevansla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Brian on LinkedIn"
                    className="p-3 border border-border/50 rounded-sm hover:border-accent hover:text-accent transition-colors text-gray-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#contact" 
                    aria-label="Send a message"
                    className="p-3 border border-border/50 rounded-sm hover:border-accent hover:text-accent transition-colors text-gray-400"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">Leadership</span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-12 leading-[1.1] text-white uppercase tracking-tight">
                Built by an <br /><span className="text-accent text-glow">operator</span>.
              </h1>

              <div className="space-y-8 text-gray-300 font-light leading-relaxed">
                <p className="text-lg text-white font-medium">
                  BDE Ventures was founded by Brian D. Evans. We are operators first, investors second.
                </p>

                <p>
                  Capital is abundant. Attention is scarce. Brian has spent over two decades in the trenches, consistently positioning himself at the inception of major technological shifts. He built a media empire from the ground up, successfully exited numerous tech and eCommerce companies, and navigated the volatility of emerging markets long before they reached the mainstream. Viewing the world through a marketing lens is our bread and butter.
                </p>
                <p>
                  His edge comes from viewing these markets through a distinct operator's lens. He focuses on how to craft the narrative and drive real adoption early. He didn't just watch the digital industry evolve; he helped shape it by running massive distribution campaigns for some of the world's biggest brands, including Netflix during their critical early expansion. His work has reached over 500 million people globally.
                </p>
                <p>
                  We don't just read the whitepaper; we understand the go-to-market strategy. We don't just look at the cap table; we look at the community. When we partner with a founder, we bring the scars, the network, and the playbook of someone who has actually built and scaled companies to the top 25 of the Inc. 500 list. We are built through work, not optics.
                </p>

                <div className="pt-8 border-t border-border/50 mt-8">
                  <p className="mb-8">
                    Brian earned recognition from Forbes, Entrepreneur, and Inc., alongside multiple 40 Under 40 honors, because he gets in at the very beginning of big waves. This foresight guided his early backing of foundational blockchain projects and his subsequent pioneering investments in AI privacy technology.
                  </p>
<p>
                  Today, he leads an advisory and investment firm supporting founders focused on Blockchain, AI, Infrastructure, and Consumer Platforms & Brands. Across platforms, he has built an audience of over one million followers and regularly serves on advisory boards to help founders navigate capital formation and strategic growth. We bring this entire ecosystem to the table. We do not back tourists. We back the architects of tomorrow.
                </p>
                </div>

                <div className="mt-16 mb-8">
                  <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-6 block">Accolades</span>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      { title: "Inc. 500", desc: "Named one of the fastest-growing private companies in America." },
                      { title: "Forbes", desc: "Top Digital Marketer & Influencer." },
                      { title: "Entrepreneur", desc: "Regular contributor and thought leader." },
                      { title: "CoinDesk", desc: "Featured voice in blockchain and digital asset strategy." },
                      { title: "40 Under 40", desc: "Recognized among the top young entrepreneurs and innovators." }
                    ].map((item, i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-6 bg-card border-gradient rounded-sm card-hover group">
                        <span className="font-bold text-xl text-white uppercase tracking-wider min-w-[140px]">{item.title}</span>
                        <span className="text-sm text-gray-400">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-16 mb-8">
                  <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-6 block">Philosophy</span>
                  <blockquote className="p-8 bg-card border-gradient rounded-sm text-white italic text-lg leading-relaxed">
                    "I believe that the most valuable asset in the digital age is attention, but the most enduring asset is trust. We invest in protocols and platforms that are rebuilding the trust layer of the internet."
                  </blockquote>
                </div>
              </div>

              <div ref={contactRef} id="contact" className="mt-24 pt-16 border-t border-border/50 scroll-mt-32">
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">Contact</span>
                
                <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-tighter">Establish Connection</h2>
                <p className="text-gray-400 mb-8 font-light text-sm">
                  We partner with a select number of teams each year. If you are a founder or leader working on a generational challenge in our areas of focus, we invite you to reach out.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full bg-card border border-border/50 rounded-sm px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-white text-sm"
                      />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full bg-card border border-border/50 rounded-sm px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-white text-sm"
                      />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full bg-card border border-border/50 rounded-sm px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-white text-sm resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors h-14 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
