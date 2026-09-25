// import { useState } from "react";
import "./TodoItem.css"
import { Pencil, Trash } from 'lucide-react';

const TodoItem = ({todo, toggleTodoDone, deleteTodo, setEditingTodoId}) => {

    return (
        <div style={{margin: "0 auto", textAlign: "left", width: "51rem", display: "flex", alignItems: "center", flexGrow: 1, gap: "4px"}}>
            <input type="checkbox" checked={todo.done} onChange={()=>toggleTodoDone(todo.id)} />
            <span style={{textDecoration: todo.done ? "line-through": "none", display: "flex", alignItems: "center", flexGrow: 1, gap: "1rem",}}>
                {todo.title}
            </span> 
            <span
                style={{
                    backgroundColor: "#6f42c1",
                    color: "white",
                    borderRadius: "50%",
                    padding: "4px 8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "inline-block",
                }}
            >
                {todo.priority}
            </span>
            <span>
                <button onClick={()=>setEditingTodoId(todo.id)}>
                    <Pencil onClick={()=>{}} style={{backgroundColor: "yellow", borderRadius: "30%", marginLeft: "4px", padding: "4px"}}/>
                </button>
                <Trash onClick={()=>{deleteTodo(todo.id)}} style={{backgroundColor: "red", borderRadius: "30%", marginLeft: "4px", border: "none", padding: "4px"}}/>
            </span>
        </div>
    )
}

export default TodoItem