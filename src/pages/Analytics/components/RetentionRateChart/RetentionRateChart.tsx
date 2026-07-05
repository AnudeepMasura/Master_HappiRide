import {
    useEffect,
    useState
} from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

import { getAnalyticsData } from "../../api";

import type {
    RetentionData
} from "../../types";

import "./RetentionRateChart.css";

const RetentionRateChart = () => {

    const [chartData,setChartData] =
    useState<RetentionData[]>([]);

    useEffect(()=>{

        loadData();

    },[]);

    const loadData = async() => {

        const data = await getAnalyticsData();

        setChartData(data.retentionData);

    };

    return(

        <div className="retention-chart-card">

            <div className="retention-chart-header">

                <h3>

                    RETENTION RATE

                </h3>

                <span>

                    Active Cohort

                </span>

            </div>

            <div className="retention-chart">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart data={chartData}>

                        <CartesianGrid
                            strokeDasharray="0"
                            vertical={false}
                            stroke="#E3E8E3"
                        />

                        <XAxis
                            dataKey="label"
                            tickLine={false}
                            axisLine={false}
                            fontSize={11}
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            fontSize={11}
                        />

                        <Bar
                            dataKey="value"
                            fill="#405D2F"
                            radius={[5,5,0,0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            <div className="retention-axis-label">

                Number of Visits

            </div>

        </div>

    );

};

export default RetentionRateChart;