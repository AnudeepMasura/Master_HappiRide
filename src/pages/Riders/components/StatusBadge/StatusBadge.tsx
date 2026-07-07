import "./StatusBadge.css";

interface Props{

status:"Active"|"Suspended"|"Blocked";

}

const StatusBadge=({status}:Props)=>{

return(

<span

className={`status-badge ${status.toLowerCase()}`}

>

{status}

</span>

);

};

export default StatusBadge;
