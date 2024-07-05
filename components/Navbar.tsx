import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between max-container padding-container
     relative z-30 py-5"
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo" height={40} width={150}></Image>
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="p-8 pb-1.5 text-cyan-500 cursor-pointer flex items-center justify-center transition-all 
          hover:underline"
            href={link.href}
            key={link.key}
          >
            <li className="regular-20 ">{link.label}</li>
          </Link>
        ))}
      </ul>
      <div className="lg:flex lg:items-center lg:justify-center hidden">
        <Button
          type="button"
          title="Login"
          // icon="/user.svg"
          variant="btn_dark_green"
        />
        <Button
          type="button"
          title="Signup"
          // icon="/user.svg"
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
