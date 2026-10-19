import { useTranslation } from "react-i18next";

function HeaderView()
{
    const { t } = useTranslation();

    return (
        <div className="profile-header">
            <a href="#">
                <h1>Adrià Márquez Nebot</h1>
            </a>
            <h4>{t('header.work')}</h4>
            <div className="profile-meta">
                <p>📍 Barcelona</p>
                <p>{t('header.eslogan')}</p>
            </div>
        </div>
    );
}

export default HeaderView;