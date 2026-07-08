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
    AgeDemographicData
} from "../../types";

import "./UserAgeDemographics.css";

const COLORS = [

    "#405D2F",

    "#587746",

    "#92AA82",

    "#C5D1BF"

];

const UserAgeDemographics = () => {

    const [chartData,setChartData] =
    useState<AgeDemographicData[]>([]);

    useEffect(()=>{

        loadData();

    },[]);

    const loadData = async() => {

        const data = await getAnalyticsData();

        setChartData(data.ageDemographics);

    };

    return(

        <div className="age-demographics-card">

            <div className="age-demographics-header">

                <h3>

                    USER AGE GROUP DEMOGRAPHICS

                </h3>

                <span>

                    Active Booking Distribution

                </span>

            </div>

            <div className="age-demographics-chart">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <PieChart>

                        <Pie
                            data={chartData}
                            dataKey="value"
                            cx="50%"
                            cy="48%"
                            outerRadius={120}
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
                                fontSize:"10px"
                            }}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};

export default UserAgeDemographics;