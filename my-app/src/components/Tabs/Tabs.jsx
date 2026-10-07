import { useState } from "react";
import { TabsContext } from "./useTabs";

// it wraps TabList, Tab, and TabPanel components
export function Tabs({children, defaultIndex = 0}){
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

    return (
        // provide state and setter to all nested components
        <TabsContext.Provider value={{selectedIndex, setSelectedIndex}}>
            {/*Render all children (TabList, Tab, TabPanel) */}
            {children}
        </TabsContext.Provider>
    )

}