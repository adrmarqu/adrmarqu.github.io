function FormatText({content}: {content: string})
{
    const renderFormat = (text: string) => 
    {
        const parts = text.split(/(\*\*.*?\*\*)/g);

        return parts.map((part, index) =>
        {
            if (part.startsWith('**') && part.endsWith('**'))
            {
                const cleanText = part.slice(2, -2);
                return <span key={index} className="tech-highlight">{cleanText}</span>
            }
        return part;
    });
    };

    return (<p>{renderFormat(content)}</p>);
}

export default FormatText;