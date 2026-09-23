import "./Property.css"
import PropertyImage from "./PropertyImage/PropertyImage";
import { PropertyTypeLabel } from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel";
import "./PropertyImage/PropertyBanner/PropertyBanner"
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner";
import IconWithText from "./PropertyImage/IconWithText/IconWithText";
import {Bath, Bed, Maximize} from "lucide-react"
// import { Bed } from "lucide-react"

const Property = ({
    // key,
    image,
    bedrooms,
    bathrooms,
    // address,
    // rent,
    surface,
    available,
    // date,
    type,
}) => {
    return (
        <div className="property-card"
            style={{opacity: !available ? "0.5" : "1"}}
        >
            <PropertyImage image={image}> 
                <PropertyTypeLabel type={type}/>
                {!available && <PropertyBanner/>}
                <div className="property-info">
                    <IconWithText
                        Icon={Bed}
                        text={bedrooms}
                    />
                    <span>|</span>
                    <IconWithText
                        Icon={Bath}
                        text={bathrooms}
                    />
                    <span>|</span>
                    <IconWithText
                        Icon={Maximize}
                        text={`${surface} m²`}
                    />
                </div>
            </PropertyImage>
            <div>Property attributes</div>       
        </div>
    )
}

export default Property