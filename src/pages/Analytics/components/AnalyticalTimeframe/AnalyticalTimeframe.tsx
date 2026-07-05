import {
    CalendarDays,
    PieChart
} from "lucide-react";

import "./AnalyticalTimeframe.css";


interface AnalyticalTimeframeProps {

    dateFrom: string;

    dateTo: string;

    loading: boolean;

    onDateFromChange:
        (value: string) => void;

    onDateToChange:
        (value: string) => void;

    onApplyFilter:
        () => void;

}


const AnalyticalTimeframe = ({

    dateFrom,

    dateTo,

    loading,

    onDateFromChange,

    onDateToChange,

    onApplyFilter

}: AnalyticalTimeframeProps) => {

    return (

        <section className="analytical-timeframe">

            <div className="timeframe-title">

                <CalendarDays size={21} />

                <h2>

                    SELECT ANALYTICAL TIMEFRAME

                </h2>

            </div>


            <div className="timeframe-controls">

                <div className="date-field">

                    <label>

                        SELECT DATE FROM

                    </label>

                    <input

                        type="date"

                        value={dateFrom}

                        onChange={(event) =>

                            onDateFromChange(
                                event.target.value
                            )

                        }

                    />

                </div>


                <div className="date-field">

                    <label>

                        SELECT DATE TO

                    </label>

                    <input

                        type="date"

                        value={dateTo}

                        onChange={(event) =>

                            onDateToChange(
                                event.target.value
                            )

                        }

                    />

                </div>


                <button

                    type="button"

                    className="apply-date-filter"

                    onClick={onApplyFilter}

                    disabled={loading}

                >

                    <PieChart size={18} />

                    {

                        loading

                            ? "Applying..."

                            : "Apply Date Filter"

                    }

                </button>

            </div>

        </section>

    );

};


export default AnalyticalTimeframe;