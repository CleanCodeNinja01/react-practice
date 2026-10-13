import {List} from "react-virtualized"

const users = Array.from({length: 10000}, (_,i)=>({
    id: i+1,
    name: `User ${i+1}`
}))

const VirtualizedList = () => {

    const rowRenderer = ({key,index,style, isScrolling}) => {

        const user = users[index]

        return (
            <div
                key={key}
                style={{
                    ...style,
                    borderBottom: "1px solid #ccc",
                    boxSizing: "border-box",
                    backgroundColor: isScrolling ? "#f0f0f0" : "#fff"
                }}
            >
                {user.name}
            </div>
        )
    }

    return (
        <div>
            <h1>Virtualized list demo!</h1>
            <p>scrolling remains smooth!</p>
            <List
                width={250}
                height={250}
                rowHeight={40}
                rowCount={users.length}
                rowRenderer={rowRenderer}
                overscanRowCount={5}
            />
        </div>
    )
}

export default VirtualizedList;