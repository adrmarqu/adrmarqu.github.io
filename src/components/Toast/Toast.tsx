import { createContext, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import './Toast.scss';

interface ToastInterface
{
    showToast: (message: string) => void;
}

const ToastContext = createContext<ToastInterface | null>(null);

export function ToastProvider({children}: {children: React.ReactNode})
{
    const [msg, setMsg] = useState<string | null>(null);

    const showToast = (message: string): void => 
    {
        setMsg(message);
        setTimeout(() => setMsg(null), 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {msg && (
                <div className="toast-container" role="status" aria-live="polite">
                    <span className="toast-icon">
                        <FiCheckCircle size={18} />
                    </span>
                    <span>{msg}</span>
                </div>
            )}
        </ToastContext.Provider>
    );
}

export const useToast = () =>
{
    const { t } = useTranslation();
    const context = useContext(ToastContext);
    if (!context)
        throw new Error(t('error.toast', { defaultValue: 'useToast must be used within ToastProvider' }));
    return context;
};