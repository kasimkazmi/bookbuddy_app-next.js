'use client';

import Link from 'next/link';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';

import { SearchBox } from '@/src/components/SearchBox';
import ThemeSwitch from '@/src/components/ThemeSwitch';
import { Button } from '@/src/components/ui/button';

const Header = () => {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/signup');
    };

    return (
        <section className="sticky container top-0 mb- z-50 mt-10 rounded-2xl bg-S1BG shadow-sm">
            <div className="flex container items-center justify-between ">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        height={60}
                        width={60}
                        layout="fixed"
                    />
                </Link>

                <div className="flex gap-6 items-center">
                    <Link
                        href="#features"
                        className="text-lg  font-semibold text-textColo hover:text-blue-500 transition duration-300 ease-in-out"
                    >
                        Feature
                    </Link>
                    <Link
                        href="#shop"
                        className="text-lg font-semibold  text-textColo hover:text-blue-500 transition duration-300 ease-in-out"
                    >
                        Shop
                    </Link>
                    <Link
                        href="#HowItWorks"
                        className="text-lg font-semibold text-textColo hover:text-blue-500 transition duration-300 ease-in-out"
                    >
                        How It Works
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button onClick={handleSignUpClick}>Sign In</Button>
                    <ThemeSwitch />
                </div>
            </div>
        </section>
    );
};

export default Header;
