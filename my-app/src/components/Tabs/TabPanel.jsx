import { useTabs } from "./useTabs"

const TabPanel = ({index, children}) => {

    const {selectedIndex} = useTabs()

    if (selectedIndex != index) return null

    return (
        <div style={{border: "1px solid #ccc", padding: "4px", marginTop: "2rem"}}>
            {children}
        </div>
    )
}

export default TabPanel