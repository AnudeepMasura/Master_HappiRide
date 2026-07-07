import "./HistoryButton.css";

import { Eye } from "lucide-react";

interface Props{

riderId:string;

}

const HistoryButton=({

riderId

}:Props)=>{

const handleClick=()=>{

console.log(riderId);

// Backend

// navigate(`/ride-history/${riderId}`);

};

return(

<button

className="history-btn"

onClick={handleClick}

>

<Eye size={18}/>

</button>

);

};

export default HistoryButton;