import { useTranslation } from "react-i18next";
import { FaGithub, FaGamepad } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Tag from "../Tag/Tag";
import type { CardProps, TInfo, StateType } from "./cardTypes";
import { isStateType } from "./cardTypes";
import State from "../State/State";
import FormatText from "../FormatText/FormatText";

import './Card.scss';

function Card({project}: CardProps)
{
    const { t } = useTranslation();

    const rawInfo = t(`work.${project.id}`, { returnObjects: true });
    const info: TInfo = (typeof rawInfo === 'object' && rawInfo !== null) 
        ? (rawInfo as TInfo)
        : {
            date: "",
            title: project.id,
            work: project.id,
            company: "",
            location: "",
            desc: ""
        };

    const currentState: StateType = isStateType(project.state) 
        ? project.state 
        : "Error";

    const isLogo = project.isLogo ?? Boolean(project.src?.includes('/logos/'));

    return (
        <article className="card-portfolio">
            <div className="card-media">
                {info.date && <p className="card-date">{info.date}</p>}

                <div className={`media-preview-box ${isLogo ? 'is-logo-view' : 'is-preview-view'}`}>
                    {project.state === "Completed" && project.src ? (
                        isLogo ? (
                            <div className="logo-badge">
                                <img
                                    src={project.src}
                                    alt={info.title || project.id} 
                                    title={info.title || project.id} 
                                    loading="lazy"
                                    decoding="async" 
                                    width="100"
                                    height="100"
                                />
                            </div>
                        ) : ( 
                            <img
                                src={project.src}
                                alt={info.title || project.id} 
                                title={info.title || project.id} 
                                loading="lazy"
                                decoding="async" 
                                width="300"
                                height="200"
                            />
                        )
                    ) : (
                        <State state={currentState} />
                    )}
                </div>
                
                <div className="card-links">
                    {project.git && (
                        <a 
                            href={project.git} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="card-btn-link"
                            title={t('card.code', { defaultValue: 'Código' })}
                        >
                            <FaGithub />
                            <span>{t('card.code', { defaultValue: 'Código' })}</span>
                        </a>
                    )}
                    {project.web && (
                        <a 
                            href={project.web} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="card-btn-link"
                            title={t('card.site', { defaultValue: 'Web' })}
                        >
                            <FiExternalLink />
                            <span>{t('card.site', { defaultValue: 'Sitio web' })}</span>
                        </a>
                    )}
                    {project.game && (
                        <a 
                            href={project.game} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="card-btn-link"
                            title={t('card.game', { defaultValue: 'Juego' })}
                        >
                            <FaGamepad />
                            <span>{t('card.game', { defaultValue: 'Juego' })}</span>
                        </a>
                    )}
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{info.work || info.title || project.id}</h3>
                {(info.company || info.location) && (
                    <p className="card-meta">
                        {info.company}{info.company && info.location ? " • " : ""}{info.location}
                    </p>
                )}
                {info.desc && <FormatText content={info.desc}/>}
                
                {project.tags && project.tags.length > 0 && (
                    <div className="card-tags">
                        {project.tags.map((tag) => (
                            <Tag key={tag} item={tag}/>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

export default Card;