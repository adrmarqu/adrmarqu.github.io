import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
    { id: "about", labelKey: "nav.about", defaultLabel: "Sobre mi" },
    { id: "web", labelKey: "nav.web", defaultLabel: "Web" },
    { id: "software", labelKey: "nav.software", defaultLabel: "Software" },
    { id: "game", labelKey: "nav.game", defaultLabel: "Videojuegos" },
    { id: "education", labelKey: "nav.education", defaultLabel: "Formación" },
];

function NavView()
{
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            // Offset to trigger before section reaches top of viewport
            const scrollPosition = window.scrollY + 200;
            const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

            for (let i = sections.length - 1; i >= 0; i--)
            {
                const section = sections[i];
                if (section.offsetTop <= scrollPosition)
                {
                    setActiveSection(section.id);
                    return;
                }
            }
            if (sections.length > 0)
            {
                setActiveSection(sections[0].id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="nav-cv" aria-label="Page navigation">
            <ul>
                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={isActive ? "active" : ""}
                            >
                                <span className="nav-indicator" />
                                <span>{t(item.labelKey, { defaultValue: item.defaultLabel })}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavView;