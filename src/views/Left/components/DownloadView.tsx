import { useTranslation } from "react-i18next";
import Dropdown from "../../../components/Dropdown/Dropdown";
import LinkScreen from "../../../components/Link/LinkScreen";

function DownloadView()
{
    const { t, i18n } = useTranslation();
    const currentLang = i18n.resolvedLanguage || i18n.language || "es";
    const cvLang = currentLang.startsWith("en") ? "en" : "es";
    
    return (
        <div className="download-container">
            <Dropdown>
                <LinkScreen lang={cvLang} filename="fullstack">
                    {t('cv.web')}
                </LinkScreen>
                <LinkScreen lang={cvLang} filename="php">
                    {t('cv.php')}
                </LinkScreen>
                {/* <LinkScreen lang={cvLang} filename="software">
                    {t('cv.software')}
                </LinkScreen> */}
                {/* <LinkScreen lang={cvLang} filename="game">
                    {t('cv.game')}
                </LinkScreen> */}
            </Dropdown>
        </div>
    );
}

export default DownloadView;