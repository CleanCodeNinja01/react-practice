import { useRef } from "react";
import MyInput from "../MyInput/MyInput";

const MyForm = () => {

    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus()
    }

    return (
        <div style={{display: "flex", gap: "2rem"}}>
            <MyInput
                ref={inputRef}
                placeholder="Enter your name"
                type="text"
                style={{
                    padding: "10px",
                    fontSize: "16px"
                }}
            />
            <button
                style={{
                    padding: "10px",
                    fontSize: "16px"
                }}
                onClick={handleFocus}
            >
                Focus Input
            </button>
        </div>
    )
}

export default MyForm;