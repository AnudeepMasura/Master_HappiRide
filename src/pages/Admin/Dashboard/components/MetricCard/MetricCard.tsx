import "./MetricCard.css";

import {
    Car,
    CircleDollarSign,
    Ticket,
    Users,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";

import type { DashboardMetric } from "../../types";

interface MetricCardProps{

    data:DashboardMetric;

}

const MetricCard = ({data}:MetricCardProps)=>{

    const getIcon=()=>{

        switch(data.icon){

            case "car":
                return <Car size={22}/>;

            case "taxi":
                return <Car size={22}/>;

            case "pooling":
                return <Users size={22}/>;

            case "private":
                return <Car size={22}/>;

            case "money":
                return <CircleDollarSign size={22}/>;

            case "revenue":
                return <CircleDollarSign size={22}/>;

            case "share":
                return <Users size={22}/>;

            case "ticket":
                return <Ticket size={22}/>;

            default:
                return <Car size={22}/>;

        }

    }

    return(

        <div className="metric-card">

            <div className="metric-icon">

                {getIcon()}

            </div>

            <p className="metric-title">

                {data.title}

            </p>

            <h2 className="metric-value">

                {data.value}

            </h2>

            <div
                className={`metric-trend ${data.trendType}`}
            >

                {

                    data.trendType==="up"

                    ?

                    <ArrowUpRight size={16}/>

                    :

                    <ArrowDownRight size={16}/>

                }

                <span>

                    {data.trend}

                </span>

            </div>

        </div>

    );

};

export default MetricCard;