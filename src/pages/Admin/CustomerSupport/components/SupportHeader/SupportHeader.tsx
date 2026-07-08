import "./SupportHeader.css";

interface SupportHeaderProps {

    dateFrom: string;

    dateTo: string;

    onDateFromChange: (value: string) => void;

    onDateToChange: (value: string) => void;

}

const SupportHeader = ({
    dateFrom,
    dateTo,
    onDateFromChange,
    onDateToChange
}: SupportHeaderProps) => {

    return (

        <div className="support-header">

            <h1>
                Customer Support
            </h1>

            <div className="support-date-filter">

                <span className="support-filter-label">

                    Filter:

                </span>

                <input
                    type="date"
                    value={dateFrom}
                    onChange={(event) =>
                        onDateFromChange(
                            event.target.value
                        )
                    }
                />

                <span className="support-date-separator">

                    to

                </span>

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

        </div>

    );

};

export default SupportHeader;