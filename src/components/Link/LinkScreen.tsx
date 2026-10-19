import { useTranslation } from "react-i18next";

type LinkProps =
{
    children: React.ReactNode;
    filename: string;
    lang?: "es" | "en" | string;
};

const CV_MAP: Record<string, string> = {
    fullstack: "Adria_Marquez_CV_FullStack.pdf",
    php: "Adria_Marquez_CV_PHP.pdf",
};
 
function LinkScreen({ children, filename, lang }: LinkProps)
{
    const { i18n } = useTranslation();
    const currentLang = lang || i18n.resolvedLanguage || i18n.language || "es";
    const cvLang = currentLang.startsWith("en") ? "en" : "es";

    const resolvedFile = CV_MAP[filename.toLowerCase()] || (filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
    const path = `/cv/${cvLang}/${resolvedFile}`;

    return (
        <a href={path} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default LinkScreen;