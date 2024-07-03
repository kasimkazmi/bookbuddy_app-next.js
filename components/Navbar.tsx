import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <nav
      className="flex border items-center justify-between max-container padding-container
     relative z-30 py-5"
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo" height={80} width={200}></Image>
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 pb-1.5 text-cyan-500 cursor-pointer flex items-center justify-center transition-all 
            hover:font-semibold hover:underline"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        height={40}
        width={40}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
