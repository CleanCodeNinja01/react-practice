import { useRef, useState } from "react";

const FruitsList = () => {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Mango", "Peach"])
    const listRef = useRef(null)

    const removeLastItemWithState = () => {
        setFruits((prev)=> prev.slice(0,-1))
    }

    const removeLastItemWithDOM = () => {
        const list = listRef.current;
        if (list && list.lastChild) {
            list.removeChild(list.lastChild)
        }
    }

    return (
        <div>
            <h1>Fruit List</h1>
            <ul style={{padding: 0}} ref={listRef}>
                {fruits.map((fruit, index)=>
                    <li
                        key={index}
                        style={{
                            listStyleType: "none",
                            border: "2px solid #a0a",
                            marginBottom: "4px",
                        }}
                    >
                        {fruit}
                    </li>
                )}
            </ul>
            <div style={{display: "flex", gap: "4px"}}>
                <button style={{backgroundColor: "blue", color: "white"}}
                    onClick={removeLastItemWithState}
                >
                    Remove with setState
                </button>
                <button style={{backgroundColor: "red", color: "white"}}
                    onClick={removeLastItemWithDOM}
                >
                    Remove with DOM API
                </button>
            </div>
        </div>
    )
}

export default FruitsList;