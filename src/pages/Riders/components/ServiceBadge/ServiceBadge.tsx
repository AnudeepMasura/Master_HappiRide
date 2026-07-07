import "./ServiceBadge.css";

interface Props{

    serviceType:
        | "Car Pooling"
        | "Car Taxi"
        | "Private Car";

}

const ServiceBadge=({serviceType}:Props)=>{

    return(

        <span

            className={`service-badge ${serviceType
                .replace(/\s/g,"")
                .toLowerCase()}`}

        >

            {serviceType}

        </span>

    );

};

export default ServiceBadge;