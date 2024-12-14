import Link from "next/link";


export default function NotFound() {
  return (
    <div className="container w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-600">Coming Soon</h1>
      <Link className="text-blue-500 hover:text-blue-700" href="/">
        Go Home
      </Link>
    </div>
  );
}
