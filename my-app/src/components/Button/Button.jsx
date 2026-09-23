const Button = ({onButtonClick, children}) => {

    let count = 0
    const increment = ()=>{
        count++
        return count
    }
    // const handleClick = ()=>console.log(`hey saleha! be healthy ${count}`)

    return (
        <div>
            <button onClick={onButtonClick}>
                {children}
            </button>
            <button onClick={increment}>
                Increment
            </button>
        </div>
    )
}

export default Button