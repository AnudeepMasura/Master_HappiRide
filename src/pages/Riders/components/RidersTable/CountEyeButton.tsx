import { Eye } from "lucide-react";

interface CountEyeButtonProps {
    count:number;
    label:string;
    riderId:string;
}

const CountEyeButton=({
    count,
    label,
    riderId
}:CountEyeButtonProps)=>{
    const handleClick=()=>{
        console.log(`${label}: ${riderId}`);
    };

    return(
        <div className="rider-count-eye">
            <span>{count}</span>
            <button
                className="rider-detail-btn"
                type="button"
                title={label}
                aria-label={`${label} for ${riderId}`}
                onClick={handleClick}
            >
                <Eye size={18}/>
            </button>
        </div>
    );
};

export default CountEyeButton;
