import { Outlet } from "react-router-dom";

import "./KYCLayout.css";

const KYCLayout = () => {
    return (
        <div className="kyc-layout">
            <Outlet />
        </div>
    );
};

export default KYCLayout;
