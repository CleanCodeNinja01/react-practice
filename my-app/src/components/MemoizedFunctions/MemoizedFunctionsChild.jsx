import React from "react";

const MemoizedFunctionsChild = ({name, handleClick}) => {
    console.log('printing MemoizedFunctionsChild')

    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoizedFunctionsChild);