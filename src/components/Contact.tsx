import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Github } from "lucide-react";

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "(55) 66 9 9722 7927",
      href: "tel:+5566997227927",
    },
    {
      icon: Github,
      label: t.contact.github,
      value: "AlexandreZanata",
      href: "https://github.com/AlexandreZanata",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Alexandre Zanata .O Vasconcelos</CardTitle>
            <CardDescription className="text-base">Software Developer</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Button
                  key={info.label}
                  variant="outline"
                  className="w-full justify-start h-auto py-4 transition-smooth hover:shadow-card"
                  asChild
                >
                  <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <div className="flex items-center gap-4 w-full">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                  </a>
                </Button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};