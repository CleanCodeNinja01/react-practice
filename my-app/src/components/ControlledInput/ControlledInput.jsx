import { useState } from "react";

const ControlledInput = () => {

    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h3>Controlled input</h3>
            <input type="text" onChange={handleChange} placeholder="Enter your name"/>
            <p>Your name is: {name}</p>
        </div>
    )

}

export default ControlledInput;