import { useState } from "react"

// const Toggle = () => {

//     const [on, setOn] = useState(false)

//     return (
//         <button onClick={()=>setOn(!on)}>
//             {on ? "ON" : "OFF"}
//         </button>
        
//     )
// }

const Toggle = ({children}) => {

    const [on, setOn] = useState(false)

    return children({
        on,
        toggleButton: () => {setOn(!on)}
    })
}

export default Toggle