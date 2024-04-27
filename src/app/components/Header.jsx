import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <main className="bg-blue-500 text-white shadow-md">
      <nav className="container mx-auto flex justify-between p-5">
        <ul className="flex space-x-4">
          <li>
            <Link prefetch={false} href="/">
              <Image src="/diversa.svg" alt="Logo" className="h-8 w-auto" width={100} height={100} priority />
            </Link>
          </li>
          <li>
            <Link prefetch={false} className="hover:underline" href="@./rules">
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