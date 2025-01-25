import Form from "next/form";

export default function Page() {
  return (
    <Form action="/submit">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <h1 className="color:blue">
        <strong>Wellness-tracker</strong>
      </h1>
      <div className="grid-main grid gap-2">
        <input className="placeholder-gray-500 border" placeholder="Physical activity in hours today in total (ex. 2h)" />
        <br></br>
        <input className="placeholder-gray-500 border" placeholder="Sleep in hours last night in total (ex. 8h)" />
        <br></br>
        <input className="placeholder-gray-500 border" placeholder="Water intake today in total (ex. 2l)" />
        <br></br>
        <input className="placeholder-gray-500 border" placeholder="(optional) Calories today in total (ex. 2000kcal)" />
        <br></br>
        <button
          className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ..."
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
