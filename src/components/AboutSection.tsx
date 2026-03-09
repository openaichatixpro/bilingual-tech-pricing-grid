import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Globe, Headphones, Zap, Target, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const stats = [
    { icon: <Users size={24} />, value: "30+", label: { en: "Companies Served", ar: "شركة نخدمها" } },
    { icon: <Globe size={24} />, value: "7+", label: { en: "Countries", ar: "دول" } },
    { icon: <Headphones size={24} />, value: "24/7", label: { en: "Support", ar: "دعم فني" } },
    { icon: <Zap size={24} />, value: "100+", label: { en: "Automations Built", ar: "أتمتة تم بناؤها" } },
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: { en: "Tailored Solutions", ar: "حلول مخصصة" },
      desc: {
        en: "We build custom CRM automation systems tailored to each business using N8N, Make.com, and other powerful platforms.",
        ar: "نبني أنظمة أتمتة CRM مخصصة لكل عمل باستخدام N8N و Make.com ومنصات قوية أخرى."
      },
    },
    {
      icon: <Award size={24} />,
      title: { en: "Cost-Effective WhatsApp Platforms", ar: "منصات واتساب اقتصادية" },
      desc: {
        en: "Our WhatsApp customer service platforms eliminate expensive subscription fees while providing enterprise-grade features.",
        ar: "منصات واتساب لخدمة العملاء تلغي رسوم الاشتراك الباهظة مع توفير ميزات على مستوى المؤسسات."
      },
    },
    {
      icon: <Globe size={24} />,
      title: { en: "Regional & International Reach", ar: "انتشار إقليمي ودولي" },
      desc: {
        en: "From our base in Egypt, our specialized team serves clients across the Gulf and international markets with dedication.",
        ar: "من مقرنا في مصر، يخدم فريقنا المتخصص العملاء في الخليج والأسواق الدولية بتفانٍ."
      },
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          {t("Who We Are", "من نحن")}
        </h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto mb-16">
          {t(
            "A specialized team delivering cutting-edge automation and digital solutions to businesses across the region",
            "فريق متخصص يقدم حلول أتمتة وحلول رقمية متطورة للشركات في المنطقة"
          )}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary mb-3">{stat.icon}</div>
              <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs md:text-sm text-muted-foreground mt-2 text-center">
                {isRtl ? stat.label.ar : stat.label.en}
              </span>
            </div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-7 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {isRtl ? value.title.ar : value.title.en}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isRtl ? value.desc.ar : value.desc.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
