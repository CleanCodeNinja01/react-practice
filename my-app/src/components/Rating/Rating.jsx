import { useState } from "react";

const Rating = ({value, defaultVal = 0, max = 5, onChange}) => {

    const [internal, setInternal] = useState(defaultVal);
    const isControlled = value !== undefined
    const rating = isControlled ? value : internal

    const handleClick = (index) => {
        if (!isControlled) {
            setInternal(index)
        }
        onChange?.(index)
    }

    return (
        <div>
            <span style={{display: "block"}}>Max is {max}</span>
            <span>Rating is {rating} </span>
            {Array.from({length: max}).map((_, i) => {
                const index = i+1;
                return (
                    <span
                        key={index}
                        style={{
                            color: index <= rating ? "gold" : "lightgray",
                            userSelect: "none"
                        }}
                        onClick={()=>handleClick(index)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    )
}

export default Rating;