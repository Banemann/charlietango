import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/rules">
              Rules
            </Link>
          </li>
          <li>
            <Link href="report">
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
