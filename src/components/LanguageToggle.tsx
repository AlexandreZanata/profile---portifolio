import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="rounded-full gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-semibold">{language === "en" ? "PT" : "EN"}</span>
    </Button>
  );
};