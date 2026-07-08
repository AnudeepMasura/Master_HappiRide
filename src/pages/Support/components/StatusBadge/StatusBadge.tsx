import "./StatusBadge.css";

interface Props{

status:"Ongoing"|"Closed";

}

const StatusBadge=({status}:Props)=>{

return(

<span

className={`support-status ${status.toLowerCase()}`}

>

{status}

</span>

);

};

export default StatusBadge;