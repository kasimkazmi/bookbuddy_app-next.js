'use client';
import {
    BOOK_CATEGORIES,
    FICTION_CATEGORIES,
    KIDS_CATEGORIES,
    NONFICTION_CATEGORIES,
    POPULAR_KIDS_CHARACTERS,
    TEENS_YOUNG_ADULT_CATEGORIES
} from '@/src/constants';

import Image from 'next/legacy/image';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
} from '@/src/components/ui/navigation-menu';
import React from 'react';

import { useRouter } from 'next/navigation';
import { SearchBox } from '@/src/components/SearchBox';
import ThemeSwitch from '@/src/components/ThemeSwitch';
import { Button } from '@/src/components/ui/button';

const Header = () => {
    const router = useRouter(); // Initialize useRouter
    const handleSignUpClick = () => {
        router.push('/signup'); // Navigate to the sign-up page
    };

    return (
        <section
            className="flex  items-center flex-col justify-between max-container padding-container
     relative z-30 py-5 sticky-navbarsmaller bg-navBG"
        >
            <div className="flex container items-center justify-between padding-container">
                <Link href="/">
                    <Image
                        className=" "
                        src="/logo.png"
                        alt="logo"
                        height={100}
                        width={100}
                        layout="intrinsic"
                    />
                </Link>

                <Link href="/features">Feature</Link>
                <Link href="/features">Shop</Link>
                <Link href="/features">How It Works</Link>
                <div className="flex justify-between px-3 items-center">
                    <Button onClick={handleSignUpClick}>
                        <Link href="./">Sign In</Link>
                    </Button>
                    <ThemeSwitch className="ml-4" />
                </div>
            </div>
        </section>
    );
};

export default Header;
