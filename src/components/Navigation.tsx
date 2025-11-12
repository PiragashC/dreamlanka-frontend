import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Home, Wrench, Building2, Info, Phone, Sun, Moon, Globe } from "lucide-react";
import { AnimeNavBar } from "./ui/anime-navbar";
import { useTheme } from "./ThemeProvider";

const NavigationComponent = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme, setTheme]);

  const toggleLanguage = useCallback(() => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "ta" : "en";
    i18n.changeLanguage(newLang);
  }, [i18n]);

  const navItems = useMemo(
    () => [
      {
        name: t("nav.home"),
        url: "/",
        icon: Home,
      },
      {
        name: t("nav.services"),
        url: "/services",
        icon: Wrench,
      },
      {
        name: t("nav.projects"),
        url: "/projects",
        icon: Building2,
      },
      {
        name: t("nav.about"),
        url: "/about",
        icon: Info,
      },
      {
        name: t("nav.contact"),
        url: "/contact",
        icon: Phone,
      },
    ],
    [i18n.language, t]
  );

  return (
    <div className="relative">
      <AnimeNavBar items={navItems} defaultActive={t("nav.home")} />
      
      {/* Theme and Language Toggles */}
      <div className="fixed top-4 right-4 z-[10000] flex items-center space-x-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/90 hover:bg-white border border-gray-300 transition-colors duration-200 shadow-lg"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-800" />
          ) : (
            <Sun className="w-5 h-5 text-gray-800" />
          )}
        </button>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg bg-white/90 hover:bg-white border border-gray-300 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
          aria-label="Toggle language"
        >
          <Globe className="w-5 h-5 text-gray-800" />
          <span className="text-gray-800 text-sm font-medium">
            {i18n.language === 'en' ? 'EN' : 'TA'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(NavigationComponent);