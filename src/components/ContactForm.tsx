
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("Message sent successfully!", "تم إرسال الرسالة بنجاح!"),
        description: t(
          "We'll get back to you as soon as possible.",
          "سنرد عليك في أقرب وقت ممكن."
        ),
        duration: 5000
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          {t("Get in Touch", "تواصل معنا")}
        </h2>
        <p className="section-subtitle text-center mb-12">
          {t(
            "Have questions? We're here to help!",
            "هل لديك أسئلة؟ نحن هنا للمساعدة!"
          )}
        </p>
        
        <div className="max-w-xl mx-auto bg-card rounded-lg border border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                {t("Your Name", "اسمك")}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("Your name", "اسمك")}
                className="h-10"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                {t("Email", "البريد الإلكتروني")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("your@email.com", "بريدك@email.com")}
                className="h-10"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                {t("Subject", "الموضوع")}
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t("What's this about?", "ما موضوع الرسالة؟")}
                className="h-10"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                {t("Message", "الرسالة")}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("Your message here...", "رسالتك هنا...")}
                rows={5}
                className="resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full font-semibold h-11"
              disabled={isSubmitting}
            >
              {isSubmitting ? 
                t("Sending...", "جارِ الإرسال...") : 
                t("Send Message", "إرسال الرسالة")
              }
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm font-semibold text-foreground mb-4">
              {t("Other ways to reach us:", "طرق أخرى للتواصل:")}
            </p>
            <div className="space-y-3">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">Email: </span>
                <a href="mailto:ahmedmokireldin@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ahmedmokireldin@gmail.com
                </a>
              </p>
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">Phone: </span>
                <a href="tel:+201004101309" className="text-muted-foreground hover:text-primary transition-colors">
                  +201004101309
                </a>
              </p>
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">WhatsApp: </span>
                <a href="https://wa.me/201006334062" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  +201006334062
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
