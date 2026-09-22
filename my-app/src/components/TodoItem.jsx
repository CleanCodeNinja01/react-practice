const TodoItem = ({description, finished}) => {
    const listItemStyle = {
        border: '1px solid #ddd',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    return (
        <>
            <li style={listItemStyle}>
                {description}{finished ? (<span> - done. ✅ </span>): (<span> - in-progress. 📈 </span>)}
            </li>
        </>
    )
}

export default TodoItem;