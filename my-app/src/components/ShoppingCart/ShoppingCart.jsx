import { useState } from "react"
import "./ShoppingCart.css"
import CardDetails from "./CardDetails/CardDetails";

const ShoppingCart = () => {
    // type Cart = {
    //     [key: string]:number;
    // }

    const [cart, setCart] = useState({
        Orange: 1,
        Banana: 1,
        Apple: 1
    });

    // const [fruits, setFruits] = useState({
        // Orange: 1,
        // Banana: 1,
        // Apple: 1
    // })

    const prices = {
        Orange: 0.3, //30
        Banana: 0.35, //35
        Apple: 0.5, //50
    }

    const getTotal = (cart) => {
        let total = 0;
        Object.keys(cart).forEach(fruit => {
            total += prices[fruit] * cart[fruit];
        })
        return total.toFixed(2);
    }

    function setFruit(fruit) {
        // this ensures immutability
        setCart(prev=>({...prev, [fruit]: (prev[fruit] || 0) +1}))
    }

    return (
        <div style={{padding: "1rem", maxWidth: "400px", margin: "auto"}}>
            <h2
                style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem"
                }}
            >
                Shopping Cart
            </h2>
            <div>
                <button style={{backgroundColor: "orange", color: "white", border: "none"}} onClick={()=>setFruit("Orange")}>
                    Add Orange (30p)
                </button>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={()=>setFruit("Banana")}>
                    Add Banana (35p)
                </button>
                <button style={{backgroundColor: "red", color: "white"}} onClick={()=>setFruit("Apple")}>
                    Add Apple (50p)
                </button>
            </div>
            <div style={{border: "1px solid #FFF"}}>
                <CardDetails
                    cart={cart}
                    prices={prices}
                    getTotal={getTotal}
                />
            </div>
        </div>
    )
}

export default ShoppingCart