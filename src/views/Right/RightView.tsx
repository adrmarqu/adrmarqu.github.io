import { useTranslation } from "react-i18next";

import Card from "../../components/Card/Card";
import data from "../../json/data.json";
import FormatText from "../../components/FormatText/FormatText";

import './RightView.scss';

function RightView()
{
    const { t } = useTranslation();

    return (
        <main className="main-feed">
            <section id="about" className="section-about" aria-label="About section">
                <div className="about-text">
                    <FormatText content={t('about.intro')} />
                    <FormatText content={t('about.main')} />
                    <FormatText content={t('about.end')} />
                </div>
            </section>

            {Object.entries(data).map(([category, list]) => (
                <section key={category} id={category} className="section-category" aria-labelledby={`title-${category}`}>
                    <h2 id={`title-${category}`} className="section-title">
                        {t(`main.${category}`, { defaultValue: category.toUpperCase() })}
                    </h2>
                    <div className="cards-list">
                        {list.map((project) => (
                            <Card key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            ))}

            <footer className="main-footer">
                <FormatText content={t('footer')} />
            </footer>
        </main>
    );
}

export default RightView;