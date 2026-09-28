import {updateLocalStorageWithTasks} from "../utils/localStorageUtils"

export const todoReducer = (state, action) => {
    let updatedTasks;

    switch(action.type){
        case "ADD":
            updatedTasks = [...state, action.payload];
            break;
        case "REMOVE":
            updatedTasks = state.filter((t) =>!(t.id == action.payload));
            break;
        case "UPDATE":
            updatedTasks = state.map((todo)=>
                todo.id == action.payload.id ? {...todo, title: action.payload.title, priority: action.payload.editTodoPri}
                : todo
            )
            break;
        case "SORT":
            updatedTasks = [...state].sort(
                (a, b) => a.priority - b.priority,
              );
            break;
        case "TOGGLE_DONE":
            updatedTasks = state.map((t) => {
                    return t.id == action.payload ? { ...t, done: !t.done } : t;
                  });
            break;
        default:
            updatedTasks = state;
    }

    updateLocalStorageWithTasks(updatedTasks)

    return updatedTasks;
}