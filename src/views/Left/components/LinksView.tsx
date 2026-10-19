import { useToast } from '../../../components/Toast/Toast';
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiCopy } from 'react-icons/fi';

import Link from "../../../components/Link/Link";

function LinksView()
{
    const { showToast } = useToast();
    const { t } = useTranslation();

    const iconSize = 20;
    const email = "adria.marquez.3b@gmail.com";

    const copyEmail = async () =>
    {
        try
        {
            await navigator.clipboard.writeText(email);
            showToast(t('toast.copy', { defaultValue: 'Correo copiado con éxito' }));
        }
        catch (error)
        {
            console.error("Error:", error);
        }
    };

    return (
        <div className="links-row">
            {/* Github */}
            <Link
                path="https://github.com/adrmarqu"
                label="Github"
            >
                <span className="social-link">
                    <FaGithub size={iconSize} />
                </span>
            </Link>

            {/* Linkedin */}
            <Link
                path="https://www.linkedin.com/in/adria-marquez/"
                label="Linkedin"
            >
                <span className="social-link">
                    <FaLinkedin size={iconSize} />
                </span>
            </Link>

            {/* Email Group */}
            <div className="email-btn-group">
                <button 
                    onClick={copyEmail} 
                    className="email-copy-btn"
                    title="Copiar email al portapapeles"
                >
                    <FiCopy size={16} />
                    <span>{email}</span>
                </button>
                <a 
                    href={`mailto:${email}`} 
                    className="email-mail-link"
                    title="Enviar email"
                >
                    <FiMail size={16} />
                </a>
            </div>
        </div>
    );
}

export default LinksView;