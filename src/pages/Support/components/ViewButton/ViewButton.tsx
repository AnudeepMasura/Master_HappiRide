import "./ViewButton.css";

import { Eye } from "lucide-react";

interface Props{

ticketId:string;

}

const ViewButton=({

ticketId

}:Props)=>{

const handleView=()=>{

console.log(ticketId);

// Backend

// navigate(`/support/ticket/${ticketId}`);

};

return(

<button

className="view-btn"

onClick={handleView}

>

<Eye size={18}/>

</button>

);

};

export default ViewButton;