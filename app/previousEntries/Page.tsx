'use client'

//TODO: Figure out tsconfig.json paths for ex. this should
// be @/components/Calendar
import Navbar from "../components/Nav";

export default function Page() {
 // TODO: Add calendar component
  
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div className="min-h-screen flex felx-col p-4">
      </div>
    </>
  );
}
