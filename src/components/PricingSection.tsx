
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, ArrowRight, MessageSquare, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageCalculator from "./MessageCalculator";

const PricingSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [showAnnual, setShowAnnual] = useState(true);
  
  const pricingPlans = [
    {
      id: 1,
      name: {
        en: "Complete Package",
        ar: "الباقة الكاملة"
      },
      description: {
        en: "All inclusive solution with all services",
        ar: "حل شامل مع جميع الخدمات"
      },
      price: {
        usd: showAnnual ? 850 : 1100,
        local: showAnnual ? "~32,000 EGP" : "~41,500 EGP"
      },
      features: [
        {
          en: "Facebook Business Manager Verification",
          ar: "توثيق مدير أعمال فيسبوك",
          included: true
        },
        {
          en: "WhatsApp Business API Setup",
          ar: "إعداد واجهة برمجة تطبيقات واتساب بزنس",
          included: true
        },
        {
          en: "SendPulse $5000 Grant",
          ar: "منحة SendPulse بقيمة 5000 دولار",
          included: true
        },
        {
          en: "Make.com Teams Plan",
          ar: "خطة Make.com للفرق",
          included: true
        },
        {
          en: "WordPress Integration",
          ar: "تكامل ووردبريس",
          included: true
        },
        {
          en: "3 Months Technical Support",
          ar: "دعم فني لمدة 3 أشهر",
          included: true
        }
      ],
      highlight: true
    },
    {
      id: 2,
      name: {
        en: "Fixed Package",
        ar: "الباقة الثابتة"
      },
      description: {
        en: "Standardized solution for most businesses",
        ar: "حل موحد لمعظم الأعمال"
      },
      price: {
        usd: 1000,
        local: "~37,800 EGP"
      },
      features: [
        {
          en: "Facebook Business Manager Verification",
          ar: "توثيق مدير أعمال فيسبوك",
          included: true
        },
        {
          en: "WhatsApp Business API Setup",
          ar: "إعداد واجهة برمجة تطبيقات واتساب بزنس",
          included: true
        },
        {
          en: "SendPulse $5000 Grant",
          ar: "منحة SendPulse بقيمة 5000 دولار",
          included: true
        },
        {
          en: "Make.com Teams Plan",
          ar: "خطة Make.com للفرق",
          included: true
        },
        {
          en: "WordPress Integration",
          ar: "تكامل ووردبريس",
          included: false
        },
        {
          en: "1 Month Technical Support",
          ar: "دعم فني لمدة شهر واحد",
          included: true
        }
      ],
      highlight: false
    },
    {
      id: 3,
      name: {
        en: "Optional Workflows",
        ar: "سير العمل الاختياري"
      },
      description: {
        en: "Add custom workflow automations",
        ar: "أضف أتمتة سير عمل مخصصة"
      },
      price: {
        usd: "From $50",
        local: "From ~1,890 EGP"
      },
      features: [
        {
          en: "Custom Integrations",
          ar: "تكاملات مخصصة",
          included: true
        },
        {
          en: "Workflow Automation",
          ar: "أتمتة سير العمل",
          included: true
        },
        {
          en: "API Connections",
          ar: "اتصالات API",
          included: true
        },
        {
          en: "Scheduled Tasks",
          ar: "المهام المجدولة",
          included: true
        },
        {
          en: "Data Transformation",
          ar: "تحويل البيانات",
          included: true
        },
        {
          en: "Ongoing Maintenance",
          ar: "صيانة مستمرة",
          included: false
        }
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          {t("Pricing Plans", "خطط الأسعار")}
        </h2>
        <p className="section-subtitle text-center mb-12">
          {t(
            "Transparent pricing for every business size",
            "أسعار شفافة لكل حجم عمل"
          )}
        </p>

        <div className="flex justify-center mb-12">
          <div className="bg-secondary p-1 rounded-lg inline-flex border border-border">
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                showAnnual ? 'bg-primary text-primary-foreground' : 'text-foreground'
              }`}
              onClick={() => setShowAnnual(true)}
            >
              {t("Annual", "سنوي")}
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                !showAnnual ? 'bg-primary text-primary-foreground' : 'text-foreground'
              }`}
              onClick={() => setShowAnnual(false)}
            >
              {t("One-time", "دفعة واحدة")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`price-card relative transition-all hover:shadow-xl ${
                plan.highlight ? 'border-primary md:transform md:scale-105' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground py-1 px-3 text-xs font-bold rounded-full">
                  {t("Most Popular", "الأكثر شهرة")}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {isRtl ? plan.name.ar : plan.name.en}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {isRtl ? plan.description.ar : plan.description.en}
              </p>
              <div className="mb-8 pb-8 border-b border-border">
                <div className="text-4xl font-bold text-primary">
                  ${typeof plan.price.usd === "number" ? plan.price.usd.toLocaleString() : plan.price.usd}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {plan.price.local}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    ) : (
                      <X className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {isRtl ? feature.ar : feature.en}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/201006334062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button flex items-center justify-center gap-2 font-semibold"
                >
                  <MessageSquare size={16} />
                  <span>{t("Contact on WhatsApp", "واتساب")}</span>
                </a>
                <a 
                  href="mailto:ahmedmokireldin@gmail.com" 
                  className="secondary-button text-center font-semibold"
                >
                  {t("Email", "بريد")}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">
            {t("WhatsApp Message Cost Calculator", "حاسبة تكاليف رسائل واتساب")}
          </h3>
          <div className="max-w-2xl mx-auto">
            <MessageCalculator />
            
            <div className="mt-10 bg-secondary border border-border p-8 rounded-lg">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                <Link size={18} className="text-primary" />
                {t("Message Type Guide", "دليل أنواع الرسائل")}
              </h4>
              
              <p className="text-muted-foreground mb-6">
                {t(
                  "WhatsApp has different pricing models for different message types. Understanding these helps optimize your costs.",
                  "لدى واتساب نماذج أسعار مختلفة لأنواع رسائل مختلفة. يساعد فهم هذه في تحسين تكاليفك."
                )}
              </p>
              
              <div className="flex justify-center mt-6">
                <a 
                  href="https://www.facebook.com/business/help/213629561949441" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors"
                >
                  <span>{t("View WhatsApp Pricing Guide", "عرض دليل أسعار واتساب")}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
