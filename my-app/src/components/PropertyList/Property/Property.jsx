import "./Property.css"
import PropertyImage from "./PropertyImage/PropertyImage";

const Property = ({
    // key,
    image,
    // bedrooms,
    // bathrooms,
    // address,
    // rent,
    // surface,
    // available,
    // date,
    // type,
}) => {
    return (
        <div>
            <PropertyImage image={image} />        
        </div>
    )
}

export default Property