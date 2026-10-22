import { useStore } from "../../store/useStore";

const Display = () => {

    const {count} = useStore()

    return (
        <div
            style={{
                margin: "1rem 0",
                border: "1px dashed #ccc",
                padding: "1rem"
            }}
        >
            <h2>Display component</h2>
            <p>Count value: <strong>{count}</strong></p>
        </div>
    )
}

export default Display;