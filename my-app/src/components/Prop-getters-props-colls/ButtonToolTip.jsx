import { useState } from "react";

const ButtonToolTip = () => {

    const [isVisible, setIsVisible] = useState(false);

    return <div style={{position: "relative", display: "inline-block", marginRight: "2rem"}}>
        Button Tool tip
        <button
            onMouseEnter={()=>setIsVisible(true)}
            onMouseLeave={()=>setIsVisible(false)}
            style={{color: isVisible && "red", backgroundColor: "pink"}}
        >
            Hover me (button)
        </button>
    </div>
}

export default ButtonToolTip;