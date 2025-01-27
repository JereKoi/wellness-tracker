"use client";


import { Temporal } from "temporal-polyfill";

function Calendar() {

  const [month, setMonth] = useState(Temporal.now.plainDateISO().month);
  const [year, setYear] = useState(Temporal.Now.plainDateISO().year);

  const next = () => {};

  const previous = () => {};

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
    </div>
  );
}

export default Calendar;
