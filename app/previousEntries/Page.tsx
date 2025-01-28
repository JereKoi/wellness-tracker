//TODO: Figure out tsconfig.json paths for ex. this should
// be @/components/Calendar
import Calendar from "../components/Calendar";
import Navbar from "../components/Nav";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>

      <div className="min-h-screen flex felx-col p-4">
        <Calendar />
      </div>
    </>
  );
}
