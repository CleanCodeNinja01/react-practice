import { createContext, use } from "react";

export const TabsContext = createContext();

export const useTabs = () => {
    const context = use(TabsContext);

    if (!context) throw new Error("useTabs must be used within a TabsComponent");

    return context;
};
