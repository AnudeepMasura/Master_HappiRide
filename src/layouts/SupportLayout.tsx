import { Outlet } from "react-router-dom";

import "./SupportLayout.css";

const SupportLayout = () => {
    return (
        <div className="support-layout">
            <Outlet />
        </div>
    );
};

export default SupportLayout;
