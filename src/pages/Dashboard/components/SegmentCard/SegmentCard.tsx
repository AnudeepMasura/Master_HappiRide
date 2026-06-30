import "./SegmentCard.css";

import { Badge } from "../../../../components/UI/Badge/Badge";

import {
    Car,
    Users
} from "lucide-react";

import type { DashboardSegment } from "../../types";

interface SegmentCardProps{

    data:DashboardSegment;

}

const SegmentCard=({data}:SegmentCardProps)=>{

    const getIcon=()=>{

        switch(data.icon){

            case "taxi":
                return <Car size={20}/>;

            case "pooling":
                return <Users size={20}/>;

            case "private":
                return <Car size={20}/>;

            default:
                return <Car size={20}/>;

        }

    };

    return(

        <div className="segment-card">

            <div className="segment-header">

                <div className="segment-title">

                    <div className="segment-icon">

                        {getIcon()}

                    </div>

                    <div>

                        <h3>{data.title}</h3>

                        <Badge variant={data.badgeType}>

                            {data.badge}

                        </Badge>

                    </div>

                </div>

            </div>

            <div className="segment-body">

                {

                    data.metrics.map((item,index)=>(

                        <div
                            className="segment-row"
                            key={index}
                        >

                            <span>

                                {item.label}

                            </span>

                            <strong>

                                {item.value}

                            </strong>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default SegmentCard;
