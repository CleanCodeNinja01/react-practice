import { Check } from "lucide-react";
import "./EditTodoForm.css"
import { useState } from "react";
import { useTaskActions } from "../../../contexts/TaskContext";

const EditTodoForm = ({editTodo, setEditingTodoId}) => {
    const [editTodoTitle, setEditTodoTitle] = useState(editTodo.title)
    const [editTodoPri, setEditTodoPri] = useState(editTodo.priority)
    const {updateTodo} = useTaskActions();

    const saveEdit = () => {
        if (editTodoTitle.trim()){
            //update todo
            updateTodo({todoId: editTodo.id, editTodoTitle, editTodoPri})
            setEditingTodoId(null)
        }
    }

    return (
        <div style={{display: "flex", jalignItems: "center", gap: "4px", flex: 1, width: "100%"}}>
            <input type="text" value={editTodoTitle} style={{flex: 1}} onChange={(e)=>{setEditTodoTitle(e.target.value)}} />
            <input type="number" value={editTodoPri} style={{width: "3rem", flexShrink:2}} onChange={(e)=>{setEditTodoPri(e.target.value)}}/>
            <button style={{backgroundColor: "green", borderRadius: "50%", border: "none", flexShrink: 0}}
                onClick={saveEdit}
            >
                <Check/>
            </button>
        </div>
    )
}

export default EditTodoForm;