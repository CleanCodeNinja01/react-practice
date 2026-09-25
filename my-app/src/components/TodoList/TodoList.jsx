import { useState } from "react";
import TodoControl from "./TodoControl/TodoControl";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css"
import TodoForm from "./TodoForm/TodoForm";

const items = [
    {
        id: 1,
        title: "Buy groceries",
        priority: 3,
        done: false
    },
    {
        id: 2,
        title: "Finish a react project",
        priority: 1,
        done: false
    },
    {
        id: 3,
        title: "Read a book",
        priority: 2,
        done: false
    },
    {
        id: 4,
        title: "Have a walk",
        priority: 3,
        done: true
    },
]

const TodoList = () => {

    const [showOnlyIncomp, setShowOnlyIncomp] = useState(false);
    const [todoItems, setTodoItems] = useState([...items])

    const addTodo = (newTodo) => {
        const updatedTodo = [...todoItems, newTodo];
        setTodoItems(updatedTodo)
    }

    const sortTasks = () => {
        const sortedTasks = [...todoItems]
            .sort((a,b)=>a.priority-b.priority)
        setTodoItems(sortedTasks)    
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1 >To-Do List</h1>
            <TodoForm
                addTodo={addTodo}
            />
            <TodoControl
                // items={items}
                showOnlyIncomp={showOnlyIncomp}
                setShowOnlyIncomp={setShowOnlyIncomp}
                sortTasks={sortTasks}
            />
            {todoItems.filter((item)=> !showOnlyIncomp || !item.done)
                .map((item) => (
                <li style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px",
                    borderBottom: "1px solid #ccc",
                    gap: "10px"
                }}>
                    <TodoItem
                        task={item}
                    // updateItems={updateItems}
                    />
                </li>
            ))}
        </div>
    )
}

export default TodoList

