import { useCallback, useState } from "react";
import MemoizedFunctionsChild from "./MemoizedFunctionsChild";

const MemoizedFunctionsParent = () => {

    const [count, setCount] = useState(0)
    // console.log('printing MemoizedFunctionsParent')

    const handleClick = useCallback(() => {
        console.log('calling child')
    }, []) //empty depnedency means memoized will only be created if dependencies change

    return (
        <div>
            Parent count: {count}

            <div>
                <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment parent</button>            
            </div>
            <MemoizedFunctionsChild
                name="Memoized child"
                handleClick={handleClick}
            />
        </div>
    )
}

export default MemoizedFunctionsParent;