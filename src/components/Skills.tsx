import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export const Skills = () => {
  const { t } = useLanguage();

  const getLevelColor = (level: string) => {
    switch (level) {
      case "advanced":
        return "bg-primary/20 text-primary border-primary/30";
      case "intermediate":
        return "bg-accent/20 text-accent border-accent/30";
      case "beginner":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">{t.skills.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              className="shadow-card hover:shadow-elegant transition-smooth"
            >
              <CardHeader>
                <CardTitle className="text-xl capitalize">
                  {t.skills[skillGroup.category as keyof typeof t.skills]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className={`${getLevelColor(skill.level)} transition-smooth hover:scale-105`}
                      aria-label={`${skill.name} - ${t.skills[skill.level as keyof typeof t.skills]}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              {t.skills.advanced}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              {t.skills.intermediate}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-muted" />
              {t.skills.beginner}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};