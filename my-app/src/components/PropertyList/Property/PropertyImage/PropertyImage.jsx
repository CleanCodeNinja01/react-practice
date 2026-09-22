import { PropertyTypeLabel } from "./PropertyTypeLabel/PropertyTypeLabel"

const PropertyImage = ({image}) => {

    return (
        <div style={{backgroundImage: `url(${image})`}}>
            <PropertyTypeLabel/>
        </div>
    )
}

export default PropertyImage;