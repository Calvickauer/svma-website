import { createContext, useContext, useState, useEffect } from "react";
import { translateText } from "../utils/translate";

interface TranslationContextProps {
  isSpanish: boolean;
  toggleLanguage: () => void;
  translate: (text: string) => string;
  registerText: (key: string, defaultText: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSpanish, setIsSpanish] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("isSpanish") === "true" : false;
  });
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [registeredTexts, setRegisteredTexts] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTranslations() {
      if (isSpanish) {
        setIsLoading(true);
        const newTranslations: Record<string, string> = {};

        const translationPromises = Object.entries(registeredTexts).map(async ([key, value]) => {
          if (!translations[key]) {
            newTranslations[key] = await translateText(value, "es");
          }
        });

        await Promise.all(translationPromises);
        setTranslations((prev) => ({ ...prev, ...newTranslations }));
        setIsLoading(false);
      }
    }

    fetchTranslations();
  }, [isSpanish]);

  const toggleLanguage = () => {
    const newLang = !isSpanish;
    setIsSpanish(newLang);
    localStorage.setItem("isSpanish", newLang.toString());
  };

  const registerText = (key: string, defaultText: string) => {
    if (!registeredTexts[key]) {
      setRegisteredTexts((prev) => ({ ...prev, [key]: defaultText }));
    }
    return isSpanish ? translations[key] || defaultText : defaultText;
  };

  return (
    <TranslationContext.Provider value={{ isSpanish, toggleLanguage, translate: registerText, registerText }}>
      {!isLoading && children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
