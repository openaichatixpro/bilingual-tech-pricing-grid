
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Globe, MessageSquare, Database, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header: React.FC = () => {
  const { t, toggleLanguage, language, isRtl } = useLanguage();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src={logo} alt="Tech Services Logo" className="h-8 w-8 object-contain" />
            <h1 className="text-lg font-bold text-foreground hidden sm:block">
              {t("Ahmed Mo", "أحمد محمد")}
            </h1>
          </Link>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden lg:flex gap-3">
              <a href="mailto:ahmedmokireldin@gmail.com" className="contact-link text-sm hover:text-primary">
                <Mail size={16} />
                <span className="hidden xl:inline">Email</span>
              </a>
              <a href="tel:+201004101309" className="contact-link text-sm hover:text-primary">
                <Phone size={16} />
                <span className="hidden xl:inline">Call</span>
              </a>
            </div>
            
            <Link to="/data" className="hidden md:block">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                <Database size={14} />
                <span>{t("Data", "البيانات")}</span>
              </Button>
            </Link>
            <Link to="/courses" className="hidden md:block">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm">
                <GraduationCap size={14} />
                <span>{t("Courses", "الكورسات")}</span>
              </Button>
            </Link>
            <Button 
              onClick={toggleLanguage} 
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-sm"
            >
              <Globe size={14} />
              <span className="hidden sm:inline">{language === "en" ? "العربية" : "EN"}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
