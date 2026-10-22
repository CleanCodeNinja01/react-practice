import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../store/counterSlice";

const CounterRTK = () => {

    const dispatch = useDispatch();

    return (
        <div>
                Counter RTK:
            <button onClick={()=>dispatch(increment())}>➕ Increment</button>
            <button onClick={()=>dispatch(decrement())}>➖ Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>➕ 5</button>

        </div>
    )
}

export default CounterRTK;