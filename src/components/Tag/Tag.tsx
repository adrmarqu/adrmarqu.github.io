import "./Tag.scss";

function Tag({item}: {item: string})
{
    return (<span className="tag">{item}</span>);
}

export default Tag;