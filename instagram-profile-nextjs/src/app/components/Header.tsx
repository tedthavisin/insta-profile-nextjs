import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Ted's Website</h1>
      <nav>
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <span className="mx-3"> | </span> 
        <Link href="/profile" className="text-blue-600 hover:underline">
          Profile
        </Link>
      </nav>
    </header>
  );
}