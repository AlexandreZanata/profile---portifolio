import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Alexandre Zanata .O Vasconcelos. {t.footer.rights}.
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};