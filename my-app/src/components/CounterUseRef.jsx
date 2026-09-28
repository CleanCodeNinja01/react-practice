import { useRef, useState } from "react";

const CounterUseRef = () => {
    const count = useRef(0)
    const [message, setMessage] = useState("")

    const handleClick = () => {
        if (count.current >= 10) return

        count.current++
        console.log('counter: ', count.current);

        if (count.current === 10) {
            setMessage(`Count is this ${count.current}`)
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                Counter
            </button>
            {message && <div>{message}</div>}
        </div>
    )
}

export default CounterUseRef;