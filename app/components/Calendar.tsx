"use client";

import { useState } from "react";

import { Temporal } from "@js-temporal/polyfill";

function Calendar() {
  const [month, setMonth] = useState(Temporal.Now.plainDateISO().month);
  const [year, setYear] = useState(Temporal.Now.plainDateISO().year);

  const next = () => {
    const { month: nextMonth, year: nextYear } = Temporal.PlainYearMonth.from({
      month,
      year,
    }).add({ months: 1 });
    setMonth(nextMonth);
    setYear(nextYear);
  };

  const previous = () => {
    const { month: prevMonth, year: prevYear } = Temporal.PlainYearMonth.from({
      month,
      year,
    }).subtract({ months: 1 });
    setMonth(prevMonth);
    setYear(prevYear);
  };

  return (
    <div className="flex-grow flex flex-col ax-h-screen">
      <div className="flex- justify-start mb-4">
        <button
          className="calendar-btn calendar-btn-blue w-[120px] me-2"
          onClick={previous}
        >
          &lt; Previous
        </button>
        <button
          className="calendar-btn calendar-btn-blue w-[120px]"
          onClick={next}
        >
          Next &gt;
        </button>
      </div>
      <h2 className="text-lg font-semibold">
        {Temporal.PlainDate.from({ year, month, day: 1 }).toLocaleString("en", {
          month: "long",
          year: "numeric",
        })}
      </h2>
    </div>
  );
}

export default Calendar;
