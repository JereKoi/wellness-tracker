//TODO: Figure out tsconfig.json paths for ex. this should
// be @/components/Calendar
import Calendar from "../components/Calendar";

export default function Page() {
  return (
    <div className="min-h-screen flex felx-col p-4">
      <Calendar />
    </div>
  );
}
