import "./PropertyList.css"
import Property from "./Property/Property"

const PropertyList = ({properties}) => {
    return (
        <div className="property-list">
            {properties.map((property)=>(
                <Property
                    key={property.id}
                    // image={property.image}
                    // bedrooms={property.bedrooms}
                    // bathrooms={property.bathrooms}
                    // address={property.address}
                    // rent={property.rent}
                    // surface={property.surface}
                    // available={property.available}
                    // date={property.date}
                    // type={property.type}
                    {...property}
                />
            ))}
        </div>
    )
}

export default PropertyList