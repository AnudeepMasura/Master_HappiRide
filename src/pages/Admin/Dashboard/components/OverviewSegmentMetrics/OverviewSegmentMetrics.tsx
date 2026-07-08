import { useEffect,useState } from "react";

import "./OverviewSegmentMetrics.css";

import SegmentCard from "../SegmentCard/SegmentCard";

import type { DashboardSegment } from "../../types";

import { getDashboardData } from "../../api";

const OverviewSegmentMetrics=()=>{

    const [segments,setSegments]=useState<DashboardSegment[]>([]);

    useEffect(()=>{

        loadSegments();

    },[]);

    const loadSegments=async()=>{

        const data=await getDashboardData();

        setSegments(data.segments);

    };

    return(

        <section className="overview-section">

            <div className="overview-title">

                <span className="status-dot"></span>

                <h2>

                    OVERVIEW SEGMENT METRICS

                </h2>

            </div>

            <div className="segment-grid">

                {

                    segments.map((item)=>(

                        <SegmentCard

                            key={item.id}

                            data={item}

                        />

                    ))

                }

            </div>

        </section>

    );

};

export default OverviewSegmentMetrics;
