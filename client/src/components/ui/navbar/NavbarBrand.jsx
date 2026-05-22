import Link from "next/link";

const NavbarBrand = ({ colorClass }) => {
  return (
    <Link href="/" className="inline-flex items-center group">
      <span
        className={`text-xl md:text-2xl font-bold font-heading transition-colors ${colorClass}`}
      >
        Wanderlast
      </span>
    </Link>
  );
};

export default NavbarBrand;
