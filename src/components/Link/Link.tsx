type LinkProps =
{
    children: React.ReactNode;
    path: string;
    label: string;
}

function Link({children, path, label}: LinkProps)
{
    return (
    <a href={path} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
        {children}
    </a>
    );
}

export default Link;