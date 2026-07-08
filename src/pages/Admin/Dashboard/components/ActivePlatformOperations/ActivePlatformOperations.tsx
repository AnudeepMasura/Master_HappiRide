import { useEffect, useState } from "react";

import "./ActivePlatformOperations.css";

import MetricCard from "../MetricCard/MetricCard";

import type { DashboardMetric } from "../../types";

import { getDashboardData } from "../../api";

const ActivePlatformOperations = () => {

    const [metrics,setMetrics] = useState<DashboardMetric[]>([]);

    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        loadMetrics();

    },[]);

    const loadMetrics = async()=>{

        try{

            setLoading(true);

            const dashboard = await getDashboardData();

            setMetrics(dashboard.metrics);

        }

        catch(error){

            console.error("Dashboard Metrics Error",error);

        }

        finally{

            setLoading(false);

        }

    };

    if(loading){

        return(

            <div className="dashboard-loading">

                Loading Dashboard...

            </div>

        );

    }

    return(

        <section className="platform-operations">

            <div className="section-header">

                <div className="section-title-wrapper">

                    <span className="status-dot"></span>

                    <h2>

                        ACTIVE PLATFORM OPERATIONS

                    </h2>

                </div>

            </div>

            <div className="metric-grid">

                {

                    metrics.map((metric)=>(

                        <MetricCard

                            key={metric.id}

                            data={metric}

                        />

                    ))

                }

            </div>

        </section>

    );

};

export default ActivePlatformOperations;
