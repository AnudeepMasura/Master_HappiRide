import "./SupportStats.css";

import type { SupportStats } from "../../types";

interface SupportStatsProps {

    stats: SupportStats;

}

const SupportStatsCards = ({
    stats
}: SupportStatsProps) => {

    return (

        <div className="support-stats">

            <div className="support-stat-card">

                <p className="support-stat-title">

                    Total Tickets

                </p>

                <h2 className="support-stat-value">

                    {stats.totalTickets}

                </h2>

            </div>

            <div className="support-stat-card">

                <p className="support-stat-title">

                    Tickets by Users

                </p>

                <h2 className="support-stat-value">

                    {stats.userTickets}

                </h2>

            </div>

            <div className="support-stat-card">

                <p className="support-stat-title">

                    Tickets by Riders

                </p>

                <h2 className="support-stat-value">

                    {stats.riderTickets}

                </h2>

            </div>

        </div>

    );

};

export default SupportStatsCards;