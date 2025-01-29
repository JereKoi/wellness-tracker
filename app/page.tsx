import Link from "next/link";
import LoginForm from "./login/page";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">
        Welcome! Please sign in to use application.
      </h1>
      <LoginForm />
      <p className="my-3">
        <Link href="register" className="mx-2 underline">Register</Link>
      </p>
    </div>
  );
}
