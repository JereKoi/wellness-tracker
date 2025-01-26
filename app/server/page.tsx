// TODO:Have to figure out do I need this server at all or not
// Not familiar yet with next.js client and server side rendering


import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    redirect("/")
  );
}
