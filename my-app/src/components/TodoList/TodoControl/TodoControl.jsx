import "./TodoControl.css"
import { ArrowDownWideNarrow } from "lucide-react";

const TodoControl = ({showOnlyIncomp, setShowOnlyIncomp, sortTasks}) => {

    return (
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", marginTop: "20px"}}>
            <input style={{marginLeft: "1.5rem"}} type="checkbox" checked={showOnlyIncomp} onChange={()=>setShowOnlyIncomp(!showOnlyIncomp)} /> Show only incomplete
            <button style={{background: "none", border: "none", cursor: "pointer"}} onClick={sortTasks}>
                <ArrowDownWideNarrow/>
            </button>
        </div>
    )
}   

export default TodoControl;