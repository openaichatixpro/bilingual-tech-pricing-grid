import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const LogoPage: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const downloadLogo = () => {
    const link = document.createElement("a");
    link.href = logo;
    link.download = "ahmed-mo-logo.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-20 md:py-28">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("Our Brand Identity", "هويتنا العلامة التجارية")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {t(
              "A symbol of innovation, growth, and excellence in tech solutions",
              "رمز للابتكار والنمو والتميز في حلول التكنولوجيا"
            )}
          </p>
        </div>

        {/* Logo Display Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Logo Showcase */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-card rounded-2xl border border-border p-12 md:p-16 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={logo}
                alt="Ahmed Mo Logo"
                className="h-48 w-48 object-contain mx-auto"
              />
            </div>
            <Button
              onClick={downloadLogo}
              className="mt-8 gap-2"
              size="lg"
            >
              <Download className="h-5 w-5" />
              {t("Download Logo", "تحميل الشعار")}
            </Button>
          </div>

          {/* Logo Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("Design Philosophy", "فلسفة التصميم")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Our logo represents the letter 'A' (for Ahmed) with dynamic curves symbolizing growth, innovation, and forward momentum. The gradient from blue to purple reflects our commitment to technology and transformation.",
                  "يمثل شعارنا الحرف 'A' (لأحمد) مع منحنيات ديناميكية تجسد النمو والابتكار والزخم الإيجابي. يعكس التدرج من الأزرق إلى الأرجواني التزامنا بالتكنولوجيا والتحول الرقمي."
                )}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("Color Palette", "لوحة الألوان")}
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-20 bg-blue-600 rounded-lg border border-border"></div>
                  <p className="text-sm font-semibold text-foreground">
                    {t("Primary Blue", "الأزرق الأساسي")}
                  </p>
                  <p className="text-xs text-muted-foreground">#0066FF</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-sky-400 rounded-lg border border-border"></div>
                  <p className="text-sm font-semibold text-foreground">
                    {t("Light Blue", "الأزرق الفاتح")}
                  </p>
                  <p className="text-xs text-muted-foreground">#00CCFF</p>
                </div>
                <div className="space-y-2">
                  <div className="h-20 bg-purple-600 rounded-lg border border-border"></div>
                  <p className="text-sm font-semibold text-foreground">
                    {t("Purple Accent", "الأرجواني")}
                  </p>
                  <p className="text-xs text-muted-foreground">#7C3AED</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("Brand Values", "قيم العلامة التجارية")}
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">
                    {t("Innovation & Technology", "الابتكار والتكنولوجيا")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">
                    {t("Growth & Progress", "النمو والتقدم")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">
                    {t("Excellence & Quality", "التميز والجودة")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">
                    {t("Customer Success", "نجاح العملاء")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {t("Usage Guidelines", "معايير الاستخدام")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                {t("Do's", "المسموح")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ {t("Use on light and dark backgrounds", "استخدم على الخلفيات الفاتحة والغامقة")}</li>
                <li>✓ {t("Maintain minimum clear space", "حافظ على المساحة الخالية الحد الأدنى")}</li>
                <li>✓ {t("Use in brand colors", "استخدم ألوان العلامة التجارية")}</li>
                <li>✓ {t("Scale proportionally", "قم بالتحجيم المتناسب")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                {t("Don'ts", "الممنوع")}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✗ {t("Don't distort or skew", "لا تشوه أو تميل")}</li>
                <li>✗ {t("Don't change colors arbitrarily", "لا تغير الألوان بشكل عشوائي")}</li>
                <li>✗ {t("Don't add effects or shadows", "لا تضيف تأثيرات أو ظلال")}</li>
                <li>✗ {t("Don't rotate unnecessarily", "لا تدوّر بدون داع")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogoPage;
