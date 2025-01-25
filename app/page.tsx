import Form from "next/form";
import "react-calendar/dist/Calendar.css";

export default function Page() {
  return (
    <Form action="/submit">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <div className="gap-2">
        <h1 className="text-center font-bold text-2xl">Wellness-tracker</h1>
        <h3 className="text-center">Hello name, please the data.</h3>
      </div>
      <div className="grid-main grid gap-2">
        <input
          className="placeholder-gray-500 border"
          placeholder="Physical activity in hours today in total (ex. 2h)"
        />
        <br></br>
        <input
          className="placeholder-gray-500 border"
          placeholder="Sleep in hours last night in total (ex. 8h)"
        />
        <br></br>
        <input
          className="placeholder-gray-500 border"
          placeholder="Water intake today in total (ex. 2l)"
        />
        <br></br>
        <input
          className="placeholder-gray-500 border"
          placeholder="(optional) Calories today in total (ex. 2000kcal)"
        />
        <br></br>
        <button
          className="rounded-full py-2 px-4  bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ..."
          type="submit"
        >
          Submit
        </button>
        <div className="grid gap-6">
          <h3>Results:</h3>

          <h3>Physical activity: </h3>
          <h3>Sleep: </h3>
          <h3>Water intake: </h3>
          <h3>Calories: </h3>

          <h3>Wellness score: </h3>
        </div>
        <div className="grid gap-6">
          <h3>Previous entries:</h3>
          <h3>Physical activity: </h3>
          <h3>Sleep: </h3>
          <h3>Water intake: </h3>
          <h3>Calories: </h3>
          <h3>Wellness score: </h3>
        </div>
      </div>
    </Form>
  );
}
