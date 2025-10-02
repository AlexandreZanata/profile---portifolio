import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">{t.about.title}</h2>
        
        <Card className="p-8 shadow-card transition-smooth hover:shadow-elegant">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Alexandre Zanata profile"
                className="w-40 h-40 rounded-full object-cover shadow-elegant animate-float"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};