import "./RideHistoryHeader.css";

import { CalendarDays, Download } from "lucide-react";

interface RideHistoryHeaderProps {

    fromDate: string;

    toDate: string;

    onFromDateChange: (value: string) => void;

    onToDateChange: (value: string) => void;

    onExport: () => void;

}

const RideHistoryHeader = ({
    fromDate,
    toDate,
    onFromDateChange,
    onToDateChange,
    onExport
}: RideHistoryHeaderProps) => {

    return (

        <div className="ride-history-header">

            <div className="ride-history-title">

                <h1>

                    Ride History

                </h1>

            </div>

            <div className="ride-history-actions">

                <div className="date-input">

                    <CalendarDays size={18} />

                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) =>
                            onFromDateChange(e.target.value)
                        }
                    />

                </div>

                <div className="date-input">

                    <CalendarDays size={18} />

                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) =>
                            onToDateChange(e.target.value)
                        }
                    />

                </div>

                

            </div>

        </div>

    );

};

export default RideHistoryHeader;