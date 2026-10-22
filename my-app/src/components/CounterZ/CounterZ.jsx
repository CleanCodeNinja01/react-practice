import { useStore } from "../../store/useStore"

const CounterZ = () => {

    const {count, increment, decrement, reset} = useStore()

    return (
        <div style={{
            margin: "1rem 0",
            border: "1px solid #ccc",
            padding: "1rem"
        }}>
            <h2>CounterZ component</h2>
            <p>Curent count: {count}</p>
            <button onClick={increment} style={{marginRight: "1rem"}}>➕ Increment</button>
            <button onClick={decrement} style={{marginRight: "1rem"}}>➖ Decrement</button>
            <button onClick={reset} style={{marginRight: "1rem"}}>🔄 reset</button>
        </div>
    )
}

export default CounterZ;