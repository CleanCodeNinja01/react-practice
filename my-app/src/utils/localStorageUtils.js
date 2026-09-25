export const getStoredTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks): []
}

export const updateLocalStorageWithTasks = (tasks) =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
}