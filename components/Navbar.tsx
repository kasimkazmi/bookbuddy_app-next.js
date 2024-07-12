import {
  BOOK_CATEGORIES,
  FICTION_CATEGORIES,
  KIDS_CATEGORIES,
  NONFICTION_CATEGORIES,
  POPULAR_KIDS_CHARACTERS,
  TEENS_YOUNG_ADULT_CATEGORIES,
} from "@/constants";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import React from "react";
import {SearchBox} from "./SearchBox";

const Navbar = () => {
  return (
    <nav
      className="flex items-center flex-col justify-between max-container padding-container
     relative z-30 py-5"
    >
      <div className="flex container items-center justify-between padding-container  border">
        <Link href="./">Sign In</Link>
        <Link href="/">
          <Image
            className=" "
            src="/logo.png"
            alt="logo"
            height={180}
            width={180}
            layout="intrinsic"
          />
        </Link>

        <SearchBox />
        {/* <Image
          src="/menu.svg"
          alt="menu"
          height={40}
          width={40}
          className="inline-block cursor-pointer lg:hidden"
        /> */}
      </div>

      <NavigationMenu className="py-5 ">
        <NavigationMenuList className="gap-10 regular-20 ">
          {/* Book Categories menu item */}
          <NavigationMenuItem className=" ">
            <NavigationMenuTrigger>Book Categories</NavigationMenuTrigger>
            <NavigationMenuContent className="NavigationMenuContent">
              <>
                {BOOK_CATEGORIES.map((category) => (
                  // Wrap each category in a div that will act as a vertical container
                  <div key={category?.heading} className=" p-3 ">
                    <h4 className="font-bold bold-16  w-full   border-b-2 flex">
                      {category?.heading}
                    </h4>
                    <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-4  lg:w-[600px] ">
                      {category.categories.map((subCategory) => (
                        <li
                          key={subCategory.value}
                          className="regular-16 size-auto  transition-all"
                        >
                          <Link href={`/${subCategory.value}`}>
                            {subCategory.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/*Fiction  menu item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="regular-20">Fiction</p>

              <NavigationMenuContent className="NavigationMenuContent">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {FICTION_CATEGORIES.map((link, index) => (
                    <li
                      key={`${link.label}-${index}`} // Combining label and index for uniqueness
                      className="regular-16 size-auto  transition-all"
                    >
                      <Link
                        href={link.value}
                        className="regular-20 transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          {/*Nonfiction  menu item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="regular-20">Nonfiction</p>

              <NavigationMenuContent className="NavigationMenuContent">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {NONFICTION_CATEGORIES.map((link, index) => (
                    <li
                      className="regular-16 size-auto  transition-all"
                      key={`${link.label}-${index}`} // Combining label and index for uniqueness
                    >
                      <Link href={link.value}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          {/*Young & Teen Adult menu item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="regular-20">Young & Teen Adult</p>

              <NavigationMenuContent className="NavigationMenuContent">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {TEENS_YOUNG_ADULT_CATEGORIES.map((link, index) => (
                    <li
                      className="regular-16 size-auto  transition-all"
                      key={`${link.label}-${index}`} // Combining label and index for uniqueness
                    >
                      <Link href={link.value}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          {/*Kids menu item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="regular-20">Young & Teen Adult</p>

              <NavigationMenuContent className="NavigationMenuContent">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {KIDS_CATEGORIES.map((link, index) => (
                    <li
                      className="regular-16 size-auto  transition-all"
                      key={`${link.label}-${index}`} // Combining label and index for uniqueness
                    >
                      <Link href={link.value}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          {/*Discount Aisle menu item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p className="regular-20">Young & Teen Adult</p>

              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {POPULAR_KIDS_CHARACTERS.map((link, index) => (
                    <li
                      className="regular-16 size-auto  transition-all text-muted-foreground"
                      key={`${link.label}-${index}`} // Combining label and index for uniqueness
                    >
                      <Link href={link.value}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport className="NavigationMenuViewport" />
      </NavigationMenu>

      {/* <NavigationMenuDemo></NavigationMenuDemo> */}
    </nav>
  );
};

export default Navbar;
