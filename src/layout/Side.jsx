import { useState } from "react";
import Sidebar from "./Sidebar";
import Sideicon from "./Sideicon";

const Side = ({onSelectPage,activePage}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    function togglesidebar(){
        setIsExpanded(!isExpanded)
    };

    return (
        <div className="flex flex-row">
            <Sideicon toggleSidebar={togglesidebar} />
            <Sidebar isExpanded={isExpanded} onSelectPage={onSelectPage} activePage={activePage}/>
        </div>
    );
};

export default Side;
