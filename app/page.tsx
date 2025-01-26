import { getServerSession } from "next-auth";
import "react-calendar/dist/Calendar.css";
import { options } from "./api/auth/[...nextauth]/options";
import Navbar from "./components/Nav";
import TrackForm from "./components/TrackForm";
import UserCard from "./components/UserCard";

export default async function Page() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>
          <Navbar />
        <UserCard user={session?.user} pagetype={"Home"} />
        <TrackForm />
        </div>
      ) : (
        <div>
        <Navbar />
        <h1 className="text-5xl">Log in!</h1>
        </div>
      )}
    </>
  );
}
