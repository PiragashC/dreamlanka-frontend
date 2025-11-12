import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TextDisperse } from "@/components/ui/text-disperse";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  Building2,
  Clock,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  const channels = [
    {
      icon: PhoneCall,
      headline: "Talk to our team",
      description: "Connect directly with a project strategist for immediate support.",
      value: "+94 77 123 4567",
      action: "Call now",
    },
    {
      icon: Mail,
      headline: "Write to us",
      description: "Share drawings, RFPs, or project briefs and we’ll respond within one business day.",
      value: "hello@dreamlanka.com",
      action: "Email us",
    },
    {
      icon: Headset,
      headline: "Schedule a consultation",
      description: "Book a 30-minute discovery session to scope timelines and budget expectations.",
      value: "Calendly.com/dreamlanka",
      action: "Book a call",
    },
  ];

  const officeHours = [
    { label: "Office", value: "DreamLanka, KKS Road, Jaffna, Sri Lanka" },
    { label: "Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM" },
    { label: "Emergency support", value: "24/7 for active projects" },
  ];

  const assurance = [
    {
      icon: Sparkles,
      title: "Tailored proposals",
      description: "Receive a detailed proposal with phased milestones and transparent costing within 72 hours.",
    },
    {
      icon: ShieldCheck,
      title: "Certified expertise",
      description: "ISO-certified processes, LEED-accredited professionals, and vetted trade partners worldwide.",
    },
    {
      icon: MessageCircle,
      title: "Always reachable",
      description: "Dedicated project chat, weekly progress rituals, and real-time dashboards keep you informed.",
    },
  ];

  return (
    <div className="bg-background pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute left-1/2 top-1/3 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <TextDisperse className="text-2xl font-semibold tracking-tight text-primary/90 md:text-3xl">
              {t("contact.title")}
            </TextDisperse>
            <TypewriterEffectSmooth
              words={[
                { text: "Let’s" },
                { text: "plan" },
                { text: "your" },
                { text: "next" },
                { text: "landmark", className: "text-primary" },
              ]}
              className="my-6 flex flex-wrap justify-center gap-3 text-4xl font-bold text-foreground md:text-6xl"
              cursorClassName="bg-primary"
            />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Whether you’re exploring feasibility or ready to break ground, our team pairs data-driven strategy with
              meticulous build execution. Share your vision—we’ll make the path forward clear.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {channels.map((channel) => (
                <div
                  key={channel.headline}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-card/80 p-6"
                >
                  <div className="inline-flex w-fit rounded-2xl bg-primary/10 p-4">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{channel.headline}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{channel.description}</p>
                  </div>
                  <div className="mt-auto text-sm font-semibold text-primary">{channel.value}</div>
                  <Button variant="ghost" className="px-0 text-sm font-semibold text-primary">
                    {channel.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form & contact details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-10 shadow-lg shadow-primary/5">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Share your project brief</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Tell us about your scope, timeline, and ambitions. A delivery specialist will reach out with next
                    steps within one business day.
                  </p>
                </div>
                <form className="grid gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t("contact.name")}
                      </label>
                      <Input placeholder="Jamie Rivera" className="mt-2" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t("contact.email")}
                      </label>
                      <Input type="email" placeholder="jamie@company.com" className="mt-2" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Company / Organization
                      </label>
                      <Input placeholder="Acme Developments" className="mt-2" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t("contact.subject")}
                      </label>
                      <Input placeholder="Mixed-use campus, Jaffna" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("contact.message")}
                    </label>
                    <Textarea
                      placeholder="Project goals, desired delivery timeline, and any files or links you’d like us to review."
                      rows={6}
                      className="mt-2"
                    />
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to our privacy policy and to be contacted by the DreamLanka team.
                    </p>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      {t("contact.send")}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg shadow-primary/5">
                <div className="flex items-start gap-4">
                  <Building2 className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Primary office</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      DreamLanka, KKS Road, Nallur, Jaffna 40000, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {officeHours.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className="w-28 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                        {item.label}
                      </span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-lg shadow-primary/5">
                <h3 className="text-lg font-semibold text-foreground">Project assurance</h3>
                <div className="mt-6 space-y-5">
                  {assurance.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <item.icon className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & outreach */}
      <section className="relative overflow-hidden bg-muted/40 py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr,1fr]">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold text-foreground md:text-4xl"
              >
                Visit our Jaffna office
              </motion.h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Drop by our northern operations hub to meet the project team and tour ongoing worksites across the
                peninsula. We’re minutes away from the historic Nallur Kandaswamy Temple.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  DreamLanka, KKS Road, Nallur, Jaffna 40000, Sri Lanka
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  Dedicated client success leads provide 24/7 coverage during active construction.
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-lg shadow-primary/5">
              <iframe
                title="DreamLanka Jaffna"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1013796964636!2d80.0210!3d9.6706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe553a858d8d81%3A0x9021b7b9c7403817!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1730790000000!5m2!1sen!2slk"
                className="h-[360px] w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-primary/10 px-8 py-12 text-center backdrop-blur">
            <h2 className="text-3xl font-bold text-primary">Ready to start a conversation?</h2>
            <p className="mt-4 text-sm text-primary/90 md:text-base">
              From early feasibility studies to final commissioning, DreamLanka is your partner in delivering iconic,
              resilient places. Let’s create something extraordinary together.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book a consultation</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Download credentials
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
