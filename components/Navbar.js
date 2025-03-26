import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width={60} height={60} src="/piglogcrop.png" />
      </div>
      <Link class="a" href="/">
        Home
      </Link>
      <Link class="a" href="/about">
        About
      </Link>
      <Link class="a" href="/people">
        People Listing
      </Link>
    </nav>
  );
};

export default Navbar;
