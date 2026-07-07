import "./SupportButton.css";

import { Eye } from "lucide-react";

interface Props{

tickets:number;

}

const SupportButton=({

tickets

}:Props)=>{

const handleClick=()=>{

console.log("Support");

};

return(

<div className="support-container">

<span>

{tickets}

</span>

<button

className="support-btn"

onClick={handleClick}

>

<Eye size={18}/>

</button>

</div>

);

};

export default SupportButton;