// deliberately flawed component that we can use  to test our EB

import { useState } from "react";

const BuggyCounter = () => {

    const [count, setCount] = useState(0)

    if (count==5){
        throw new Error('force crash at 5!')
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount((c)=>c+1)}>➕ Increment</button>
        </div>
    )
}

export default BuggyCounter;