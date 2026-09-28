import { useRef } from "react";

const UseRefTest = () => {
    const inputRef = useRef(null)
    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div style={{display: "flex", gap: "4px"}}>
            <input type="text" placeholder={"Click the button to focus me"} ref={inputRef} />
            <button onClick={handleClick}>Focus the input!</button>
        </div>
    )
}

export default UseRefTest;