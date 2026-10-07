import { useTabs } from "./useTabs";

const Tab = ({index, children}) => {
    // access the tabs context
    const { selectedIndex, setSelectedIndex } = useTabs();
    const isSelected = selectedIndex == index
    return (
        <button onClick={()=>setSelectedIndex(index)} style={{padding: "0.5rem 1rem", border: "1px solid #ccc", backgroundColor: isSelected ? "#007bff" : "#FFF"}}>
            {children}
        </button>
    )
}

export default Tab;