"use client";


function Calendar() {
const next = () => {};

const previous = () => {};

  return (
    <div className="flex-grow flex flex-col ax-h-screen">
      <div className="flex- justify-start mb-4">
        <button className="btn btn-blue w-[120px] me-2" onClick={previous}>
            &lt; Previous
        </button>
        <button className="btn btn-blue w-[120px]" onClick={next}>
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default Calendar;
