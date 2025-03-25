import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>People List</h1>
      </div>
      <Link class="a" href="/">Home</Link>
      <Link class="a" href="/about">About</Link>
      <Link class="a" href="/people">People Listing</Link>
    </nav>
  );
};

export default Navbar;
