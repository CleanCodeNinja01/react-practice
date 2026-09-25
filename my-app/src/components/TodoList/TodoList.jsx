import { useState } from "react";
import TodoControl from "./TodoControl/TodoControl";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css"
import TodoForm from "./TodoForm/TodoForm";
import EditTodoForm from "./EditTodoForm/EditTodoForm";
import { getStoredTasks, updateLocalStorageWithTasks } from "../../utils/localStorageUtils"

// const items = [
//     {
//         id: 1,
//         title: "Buy groceries",
//         priority: 3,
//         done: false
//     },
//     {
//         id: 2,
//         title: "Finish a react project",
//         priority: 1,
//         done: false
//     },
//     {
//         id: 3,
//         title: "Read a book",
//         priority: 2,
//         done: false
//     },
//     {
//         id: 4,
//         title: "Have a walk",
//         priority: 3,
//         done: true
//     },
// ]

const TodoList = () => {

    const [showOnlyIncomp, setShowOnlyIncomp] = useState(false);
    const [todoItems, setTodoItems] = useState(getStoredTasks())
    const [editingTodoId, setEditingTodoId] = useState(null);

    const addTodo = (newTodo) => {
      const updatedTodo = [...todoItems, newTodo];
      setTodoItems(updatedTodo);
      updateLocalStorageWithTasks(updatedTodo)
    };

    const sortTodos = () => {
      const sortedTasks = [...todoItems].sort(
        (a, b) => a.priority - b.priority,
      );
      setTodoItems(sortedTasks);
    };

    const toggleTodoDone = (id) => {
      const updatedTodos = todoItems.map((todo) => {
        return todo.id == id ? { ...todo, done: !todo.done } : todo;
      });
      setTodoItems(updatedTodos);
    };

    const deleteTodo = (id) => {
      const updatedTodos = todoItems.filter((todo) => {
        return !(todo.id == id);
      });
      setTodoItems(updatedTodos);
    };

    const updateTodo = ({todoId, editTodoTitle, editTodoPri}) => {
        const updatedTodos = todoItems.map((todo)=>
            todo.id == todoId ? {...todo, title: editTodoTitle, priority: editTodoPri}
            : todo
        )

        setTodoItems(updatedTodos)
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h1>To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoControl
          // items={items}
          showOnlyIncomp={showOnlyIncomp}
          setShowOnlyIncomp={setShowOnlyIncomp}
          sortTasks={sortTodos}
        />
        {todoItems
          .filter((item) => !showOnlyIncomp || !item.done)
          .map((item) => (
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px",
                borderBottom: "1px solid #ccc",
                gap: "10px",
                flex: 1,
                // width: "100%"
              }}
              key={item.id}
            >
              {editingTodoId == item.id ? (
                <EditTodoForm 
                    editTodo={item}
                    setEditingTodoId={setEditingTodoId}
                    updateTodo={updateTodo}
                />
              ) : (
                <TodoItem
                  todo={item}
                  toggleTodoDone={toggleTodoDone}
                  deleteTodo={deleteTodo}
                  setEditingTodoId={setEditingTodoId}
                  // updateItems={updateItems}
                />
              )}
            </li>
          ))}
      </div>
    );
}

export default TodoList

