import "./SupportHeader.css";

interface SupportHeaderProps {

    fromDate: string;

    toDate: string;

    onFromDateChange: (value: string) => void;

    onToDateChange: (value: string) => void;

}

const SupportHeader = ({

    fromDate,

    toDate,

    onFromDateChange,

    onToDateChange

}: SupportHeaderProps) => {

    return (

        <div className="support-header">

            <div className="support-title">

                <h1>

                    Customer Support

                </h1>

            </div>

            <div className="support-date-filter">

                <span>

                    Filter:

                </span>

                <input

                    type="date"

                    value={fromDate}

                    onChange={(e) =>

                        onFromDateChange(e.target.value)

                    }

                />

                <span>

                    to

                </span>

                <input

                    type="date"

                    value={toDate}

                    onChange={(e) =>

                        onToDateChange(e.target.value)

                    }

                />

            </div>

        </div>

    );

};

export default SupportHeader;