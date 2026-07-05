import "./CustomerSupportButton.css";

import { Eye } from "lucide-react";

interface CustomerSupportButtonProps{

    available:boolean;

    rideId:string;

}

const CustomerSupportButton=({

    available,

    rideId

}:CustomerSupportButtonProps)=>{

    const handleView=()=>{

        console.log("View Support",rideId);

        // Backend

        // navigate(`/customer-support/${rideId}`)

    };

    if(!available){

        return(

            <span className="support-na">

                N/A

            </span>

        );

    }

    return(

        <button

            className="support-view-btn"

            onClick={handleView}

        >

            <Eye size={18}/>

        </button>

    );

};

export default CustomerSupportButton;