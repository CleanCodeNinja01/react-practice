import "./PropertyAttribute.css"

const PropertyAttribute = ({text, color = "#444"}) => {
    const style = {color};
    return (
        <div style={style} className="property-attribute">
            {text}
        </div>
    )
}

export default PropertyAttribute;