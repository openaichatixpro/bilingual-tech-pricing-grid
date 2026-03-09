import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, MessageSquare, Workflow, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const highlights = [
    {
      icon: <Bot size={28} />,
      label: { en: "CRM Automation", ar: "أتمتة CRM" },
    },
    {
      icon: <MessageSquare size={28} />,
      label: { en: "WhatsApp Platforms", ar: "منصات واتساب" },
    },
    {
      icon: <Workflow size={28} />,
      label: { en: "N8N & Make", ar: "N8N و Make" },
    },
    {
      icon: <Users size={28} />,
      label: { en: "30+ Companies", ar: "+30 شركة" },
    },
    {
      icon: <Globe size={28} />,
      label: { en: "Gulf & International", ar: "خليجي ودولي" },
    },
    {
      icon: <Shield size={28} />,
      label: { en: "Expert Team", ar: "فريق متخصص" },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-secondary text-foreground px-3 py-1 rounded-full text-xs font-semibold mb-6">
            <Globe size={14} />
            <span>{t("Egypt • Serving the Gulf & Beyond", "مصر • خدمة الخليج والعالم")}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight text-balance">
            {t(
              "Automate Your Business with AI",
              "أتمتة أعمالك بالذكاء الاصطناعي"
            )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed text-balance">
            {t(
              "Smart CRM automation, WhatsApp integration, and custom digital solutions. Trusted by 30+ companies.",
              "أتمتة CRM ذكية، تكامل واتساب، وحلول رقمية مخصصة. موثوق به من قبل +30 شركة."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Get Started", "ابدأ الآن")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-semibold px-8 py-6 rounded-lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Learn More", "تعرف أكثر")}
            </Button>
          </div>

          {/* Highlight pills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-secondary border border-border rounded-lg px-4 py-3 transition-all hover:border-primary/50"
              >
                <span className="text-primary flex-shrink-0">{item.icon}</span>
                <span className="font-medium text-foreground text-sm">
                  {isRtl ? item.label.ar : item.label.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
