
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import { 
  Badge, 
  MessageSquare, 
  FileText, 
  FileCode, 
  Info, 
  Link 
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  
  const services = [
    {
      id: 1,
      icon: <Badge size={24} />,
      title: {
        en: "Facebook Business Manager Verification",
        ar: "توثيق مدير أعمال فيسبوك"
      },
      description: {
        en: "Complete verification of your Facebook Business Manager account to unlock full advertising capabilities.",
        ar: "توثيق كامل لحساب مدير أعمالك على فيسبوك لإطلاق إمكانات الإعلانات الكاملة."
      },
      features: [
        {
          en: "Identity verification",
          ar: "التحقق من الهوية"
        },
        {
          en: "Business verification",
          ar: "التحقق من العمل التجاري"
        },
        {
          en: "Domain verification",
          ar: "التحقق من النطاق"
        }
      ],
      image: "/images/facebook-verification.png"
    },
    {
      id: 2,
      icon: <MessageSquare size={24} />,
      title: {
        en: "WhatsApp Business API Setup",
        ar: "إعداد واجهة برمجة تطبيقات واتساب بزنس"
      },
      description: {
        en: "Deploy and configure WhatsApp Business API for your business to enable large-scale customer communication.",
        ar: "نشر وتكوين واجهة برمجة تطبيقات WhatsApp Business لعملك لتمكين التواصل مع العملاء على نطاق واسع."
      },
      features: [
        {
          en: "API configuration",
          ar: "تكوين واجهة برمجة التطبيقات"
        },
        {
          en: "Chatbot integration",
          ar: "تكامل روبوت الدردشة"
        },
        {
          en: "Automated messaging",
          ar: "المراسلة الآلية"
        }
      ],
      image: "/images/whatsapp-api.png"
    },
    {
      id: 3,
      icon: <Badge size={24} />,
      title: {
        en: "SendPulse $5000 Grant Application",
        ar: "طلب منحة SendPulse بقيمة 5000 دولار"
      },
      description: {
        en: "Complete application process for SendPulse grant program to receive marketing credits worth $5000.",
        ar: "إكمال عملية التقديم لبرنامج منح SendPulse للحصول على رصيد تسويقي بقيمة 5000 دولار."
      },
      features: [
        {
          en: "Application preparation",
          ar: "إعداد الطلب"
        },
        {
          en: "Documentation support",
          ar: "دعم التوثيق"
        },
        {
          en: "Account setup",
          ar: "إعداد الحساب"
        }
      ],
      image: "/images/sendpulse-grant.png"
    },
    {
      id: 4,
      icon: <Link size={24} />,
      title: {
        en: "Make.com Teams Plan ($636/year)",
        ar: "خطة Make.com للفرق (636 دولار/سنة)"
      },
      description: {
        en: "Get access to Make.com Teams plan for advanced workflow automation and integration capabilities.",
        ar: "الحصول على خطة Make.com للفرق لأتمتة سير العمل المتقدمة وإمكانات التكامل."
      },
      features: [
        {
          en: "Workflow automation",
          ar: "أتمتة سير العمل"
        },
        {
          en: "Multiple users access",
          ar: "وصول مستخدمين متعددين"
        },
        {
          en: "Advanced integrations",
          ar: "تكاملات متقدمة"
        }
      ],
      image: "/images/make-workflows.png"
    },
    {
      id: 5,
      icon: <FileCode size={24} />,
      title: {
        en: "WordPress Integration",
        ar: "تكامل ووردبريس"
      },
      description: {
        en: "Connect your WordPress site with various services and automate content management processes.",
        ar: "ربط موقع WordPress الخاص بك بخدمات مختلفة وأتمتة عمليات إدارة المحتوى."
      },
      features: [
        {
          en: "Plugin configuration",
          ar: "تكوين المكونات الإضافية"
        },
        {
          en: "API connections",
          ar: "اتصالات API"
        },
        {
          en: "Automated publishing",
          ar: "النشر الآلي"
        }
      ],
      image: "/images/wordpress-integration.png"
    },
    {
      id: 6,
      icon: <Info size={24} />,
      title: {
        en: "Ongoing Technical Support",
        ar: "الدعم الفني المستمر"
      },
      description: {
        en: "Continuous technical assistance for all implemented solutions with priority response times.",
        ar: "مساعدة فنية مستمرة لجميع الحلول المنفذة مع أوقات استجابة ذات أولوية."
      },
      features: [
        {
          en: "Priority support",
          ar: "دعم ذو أولوية"
        },
        {
          en: "Issue resolution",
          ar: "حل المشكلات"
        },
        {
          en: "System maintenance",
          ar: "صيانة النظام"
        }
      ],
      image: "/images/technical-support.png"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          {t("Our Services", "خدماتنا")}
        </h2>
        <p className="section-subtitle text-center mb-16">
          {t(
            "Complete solutions for your digital transformation",
            "حلول شاملة لتحول رقمي كامل"
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card group overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div className="service-icon text-primary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {isRtl ? service.title.ar : service.title.en}
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                {isRtl ? service.description.ar : service.description.en}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    <span className="text-sm text-foreground">{isRtl ? feature.ar : feature.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
