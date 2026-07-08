import "./RatingBadge.css";

import { Star } from "lucide-react";

interface RatingBadgeProps {

    rating:number;

}

const RatingBadge = ({
    rating
}:RatingBadgeProps)=>{

    const getRatingClass=()=>{

        if(rating>=4.5){

            return "rating-badge excellent";

        }

        if(rating>=4){

            return "rating-badge good";

        }

        if(rating>=3){

            return "rating-badge average";

        }

        return "rating-badge poor";

    };

    return(

        <div className={getRatingClass()}>

            <Star
                size={15}
                fill="currentColor"
            />

            <span>

                {rating.toFixed(1)}

            </span>

        </div>

    );

};

export default RatingBadge;