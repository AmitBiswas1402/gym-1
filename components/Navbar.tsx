import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 
      backdrop-blur-lg bg-black/40 text-white shadow-md transition-all duration-300"
    >
      <div className="text-2xl font-bold">
        <Link href="/">Logo</Link>
      </div>

      <div className="flex gap-6 text-lg">
        <a href="#about" className="hover:text-green-400 transition">
          About
        </a>
        <a href="#programs" className="hover:text-green-400 transition">
          Programs
        </a>
        <a href="#membership" className="hover:text-green-400 transition">
          Memberships
        </a>
        <a href="#contact" className="hover:text-green-400 transition">
          Contact
        </a>
      </div>

      <div className="text-center">
        <Link
          href="/new-registry"
          className="px-8 py-3 bg-green-500 text-black rounded-full font-semibold hover:bg-green-600 transition"
        >
          Join Us Today
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
