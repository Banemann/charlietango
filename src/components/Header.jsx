import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <nav className="container mx-auto flex justify-between p-5">
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/rules">
              Rules
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/report">
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;