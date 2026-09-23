const Counter = () => {
    

    let count = 0;
    const increment = () => {
        count++;
        console.log("Count: ", count)
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter

