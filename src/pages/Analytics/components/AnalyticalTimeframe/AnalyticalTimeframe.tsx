import { useState } from "react";
import { CalendarDays, PieChart } from "lucide-react";

import "./AnalyticalTimeframe.css";

const AnalyticalTimeframe = () => {
  const [dateFrom, setDateFrom] = useState("2026-06-01");
  const [dateTo, setDateTo] = useState("2026-06-27");

  const applyFilter = () => {
    console.log({
      dateFrom,
      dateTo,
    });
  };

  return (
    <section className="analytical-timeframe">
      <div className="timeframe-title">
        <CalendarDays size={21} />

        <h2>SELECT ANALYTICAL TIMEFRAME</h2>
      </div>

      <div className="timeframe-controls">
        <div className="date-field">
          <label>SELECT DATE FROM</label>

          <input
            type="date"
            value={dateFrom}
            onChange={(event) => setDateFrom(event.target.value)}
          />
        </div>

        <div className="date-field">
          <label>SELECT DATE TO</label>

          <input
            type="date"
            value={dateTo}
            onChange={(event) => setDateTo(event.target.value)}
          />
        </div>

        <button
          className="apply-date-filter"
          onClick={applyFilter}
        >
          <PieChart size={18} />

          Apply Date Filter
        </button>
      </div>
    </section>
  );
};

export default AnalyticalTimeframe;