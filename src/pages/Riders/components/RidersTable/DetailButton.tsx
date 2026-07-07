import { Eye } from "lucide-react";

interface DetailButtonProps {
    label:string;
    riderId:string;
}

const DetailButton=({
    label,
    riderId
}:DetailButtonProps)=>{
    const handleClick=()=>{
        console.log(`${label}: ${riderId}`);
    };

    return(
        <button
            className="rider-detail-btn"
            type="button"
            title={label}
            aria-label={`${label} for ${riderId}`}
            onClick={handleClick}
        >
            <Eye size={18}/>
        </button>
    );
};

export default DetailButton;
