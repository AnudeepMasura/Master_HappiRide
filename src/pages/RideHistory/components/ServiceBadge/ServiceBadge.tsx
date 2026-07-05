import "./ServiceBadge.css";

interface ServiceBadgeProps {

    serviceType:
        | "Car Pooling"
        | "Car Taxi"
        | "Car Travels";

}

const ServiceBadge = ({
    serviceType
}: ServiceBadgeProps) => {

    const getBadgeClass = () => {

        switch (serviceType) {

            case "Car Taxi":
                return "service-badge taxi";

            case "Car Pooling":
                return "service-badge pooling";

            case "Car Travels":
                return "service-badge travels";

            default:
                return "service-badge";

        }

    };

    return (

        <span className={getBadgeClass()}>

            {serviceType}

        </span>

    );

};

export default ServiceBadge;