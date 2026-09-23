import { useState } from "react";
import {produce} from "immer"

const User = () => {

    const [user, setUser] = useState({
        name: "Alice",
        details: {
            location: "Karachi, PK",
            age: 29
        }
    })

    const updateUsingImmer = () => {
        setUser(
            produce(user, (draft)=>{
                draft.details.age = 32
            })
        )
    }

    console.log("user:", user)

    return (
        <div>
            <button
                onClick={updateUsingImmer}
            >Update my age using immer</button>
        </div>
    )
}

export default User;