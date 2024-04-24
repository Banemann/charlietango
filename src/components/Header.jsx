import Link from 'next/link';

const Header = () => {
  return (
    <main className="bg-blue-500 text-white shadow-md">
      <nav className="container mx-auto flex justify-between p-5">
        <ul className="flex space-x-4">
          <li>
            <Link prefetch={false} className="hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link prefetch={false} className="hover:underline" href="/rules">
              Rules
            </Link>
          </li>
          <li>
            <Link prefetch={false} className="hover:underline" href="/report">
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;