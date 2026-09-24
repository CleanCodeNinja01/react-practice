import "./CardDetails.css"

const CardDetails = ({cart, prices, getTotal}) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            padding: "1rem"
        }}>
            <h3
                style= {{fontSize:"1.125rem", fontWeight: "800", marginBottom: "0.5rem"}} 
            >Items in Cart</h3>
            {Object.keys(cart).length === 0 ? <p style={{color: "gray"}}>Your cart is empty</p> :
                <ul>
                    {Object.entries(cart).map(([item,quantity]) => (
                        <li key={item}>
                            {item}: {quantity} x ${prices[item]}
                        </li>
                    ))}
                </ul>
            }
            <h3>Total: ${getTotal(cart)}</h3>
            <button
                style={{
                    marginTop: "0.5rem",
                    backgroundColor: "green",
                    color: "white",
                    padding: "0.5rem",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Checkout
            </button>
        </div>
    )
}

export default CardDetails