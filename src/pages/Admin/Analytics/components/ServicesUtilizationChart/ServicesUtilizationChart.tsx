import {
    useEffect,
    useState
} from "react";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend
} from "recharts";

import { getAnalyticsData } from "../../api";

import type {
    ServiceUtilizationData
} from "../../types";

import "./ServicesUtilizationChart.css";

const COLORS = [

    "#405D2F",

    "#748F62",

    "#A9BDA0"

];

const ServicesUtilizationChart = () => {

    const [chartData,setChartData] =
    useState<ServiceUtilizationData[]>([]);

    useEffect(()=>{

        loadData();

    },[]);

    const loadData = async() => {

        const data = await getAnalyticsData();

        setChartData(data.serviceUtilization);

    };

    return(

        <div className="service-chart-card">

            <h3>

                SERVICES UTILIZATION SHARE

            </h3>

            <div className="service-chart">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <PieChart>

                        <Pie
                            data={chartData}
                            dataKey="value"
                            cx="50%"
                            cy="45%"
                            outerRadius={115}
                            stroke="#FFFFFF"
                            strokeWidth={2}
                        >

                            {

                                chartData.map((_,index)=>(

                                    <Cell
                                        key={index}
                                        fill={
                                            COLORS[
                                                index %
                                                COLORS.length
                                            ]
                                        }
                                    />

                                ))

                            }

                        </Pie>

                        <Legend
                            iconType="rect"
                            wrapperStyle={{
                                fontSize: "10px"
                            }}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};

export default ServicesUtilizationChart;