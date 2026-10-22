import { useSelector } from "react-redux";

const DisplayRTK = () => {
    const count = useSelector((state)=>state.counter.value)

    return (
        <div>
            <h2>Current count: {count}</h2>
        </div>
    )
}

export default DisplayRTK;