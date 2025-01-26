import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black p-4">
      <ul className="flex justify-evenly text-2xl font-bold text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/previousEntries">Previous Entries</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
}
