import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

type LangList = "es" | "ca" | "en";

function OptionsView()
{
    const { i18n } = useTranslation();
    const [isDark, setIsDark] = useState<boolean>(() => {
        return !document.documentElement.classList.contains('light');
    });
    
    const setLang = (lng: LangList) => i18n.changeLanguage(lng);
    const currentLang = i18n.resolvedLanguage || i18n.language || "es";

    useEffect(() => 
    {
        if (isDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [isDark]);

    return (
        <div className="options-row">
            <div className="lang-switch">
                <button 
                    className={currentLang.startsWith("es") ? "active" : ""} 
                    onClick={() => setLang("es")}
                    aria-label="Español"
                >
                    ES
                </button>
                <button 
                    className={currentLang.startsWith("ca") ? "active" : ""} 
                    onClick={() => setLang("ca")}
                    aria-label="Català"
                >
                    CA
                </button>
                <button 
                    className={currentLang.startsWith("en") ? "active" : ""} 
                    onClick={() => setLang("en")}
                    aria-label="English"
                >
                    EN
                </button>
            </div>
            <button 
                className="theme-toggle-btn"
                onClick={() => setIsDark(!isDark)}
                title={isDark ? "Modo Claro" : "Modo Oscuro"}
                aria-label="Toggle theme"
            >
                {isDark ? "☀️" : "🌙"}
            </button>
        </div>
    );
}

export default OptionsView;