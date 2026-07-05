import "./StatusBadge.css";

interface StatusBadgeProps{

    status:
        | "Pending"
        | "Verified"
        | "Rejected";

}

const StatusBadge=({

    status

}:StatusBadgeProps)=>{

    return(

        <span
            className={`status-badge ${status.toLowerCase()}`}
        >

            {status}

        </span>

    );

};

export default StatusBadge;