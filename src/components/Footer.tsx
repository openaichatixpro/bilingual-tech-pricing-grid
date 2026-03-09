
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-2">
              <span className="font-bold text-foreground">{t("Ahmed Mo", "أحمد محمد")}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("Smart automation solutions for businesses", "حلول أتمتة ذكية للشركات")}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("Navigation", "الملاحة")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("Services", "الخدمات")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("Pricing", "الأسعار")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("Contact", "اتصل بنا")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("Get in Touch", "تواصل معنا")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ahmedmokireldin@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("Email", "البريد الإلكتروني")}
                </a>
              </li>
              <li>
                <a href="tel:+201004101309" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("Phone", "الهاتف")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {t("Ahmed Mo Kireldin. All rights reserved.", "أحمد محمد كيرالدين. جميع الحقوق محفوظة.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
