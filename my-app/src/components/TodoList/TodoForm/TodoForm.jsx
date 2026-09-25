import { Plus } from "lucide-react"
import "./TodoForm.css"
import { useState } from "react"

const TodoForm = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState("")
    const [newPriority, setNewPriority] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTodo.trim()) return
        addTodo({
            id: Date.now(),
            title: newTodo,
            priority: newPriority,
            done: false
        })

        setNewTodo("");
        setNewPriority(1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display: "flex", gap: "1.5rem", alignItems: "center", justifyContent: "center"}}>
                <input
                    style={{width: "40rem"}}
                    type="text"
                    placeholder="Enter new task"
                    onChange={(e)=>setNewTodo(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key !== "Enter") return
                        e.preventDefault()
                        handleSubmit(e)
                    }}
                    value={newTodo}
                />
                <input style={{width: "3rem"}} type="number" min="1" onChange={(e)=>setNewPriority(Number(e.target.value))} value={newPriority}/>
            </div>
            <button
                type="submit"
                style={{backgroundColor: "#007bff", margin: "1.5rem", borderRadius: "50%", padding: "0.5rem", border: "none"}}
            >
                <Plus
                    
                />
            </button>
        </form>

    )
}

export default TodoForm