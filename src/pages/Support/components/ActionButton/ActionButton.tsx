import "./ActionButton.css";

interface Props{

label?:string;

}

const ActionButton=({

label="View Reply"

}:Props)=>{

const handleClick=()=>{

console.log("View Reply");

// Backend

// Open reply modal

};

return(

<button

className="reply-btn"

onClick={handleClick}

>

{label}

</button>

);

};

export default ActionButton;