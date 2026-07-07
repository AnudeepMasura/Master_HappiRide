import "./RatingBadge.css";

import { Star } from "lucide-react";

interface Props{

rating:number;

}

const RatingBadge=({rating}:Props)=>{

return(

<div className="rating-badge">

<Star

size={15}

fill="#FACC15"

color="#FACC15"

/>

<span>

{rating.toFixed(1)}

</span>

</div>

);

};

export default RatingBadge;