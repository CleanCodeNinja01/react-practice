import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div>
            <h2>Todo List!</h2>
            {/* <ul>
                <li>
                    AWS course
                </li>
                <li>
                    React course
                </li>
            </ul> */}
            <ul>
                <TodoItem
                    description='AWS course'
                    finished={false}
                />
            </ul>
        </div>
    )
}

export default TodoList;