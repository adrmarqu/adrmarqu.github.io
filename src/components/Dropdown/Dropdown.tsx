import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiDownload, FiChevronDown } from "react-icons/fi";

import './Dropdown.scss';

type DropProps =
{
    children: React.ReactNode;
};

function Dropdown({children}: DropProps)
{
    const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
    const { t } = useTranslation();
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const toggleDrop = () => setIsDropOpen(!isDropOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div 
            ref={dropdownRef}
            className="dropdown-wrapper" 
        >
            <button 
                type="button"
                className="dropdown-trigger" 
                onClick={toggleDrop}
                aria-expanded={isDropOpen}
            >
                <span className="flex row v-center gap-1" >
                    <FiDownload size={16} />
                    <span>{t('download', { defaultValue: 'Descargar CV' })}</span>
                </span>
                <FiChevronDown className={`dropdown-chevron ${isDropOpen ? 'open' : ''}`} />
            </button>
            {isDropOpen && (
                <div className="dropdown-menu">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Dropdown;