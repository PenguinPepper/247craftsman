"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavigationLink = {
    label: string;
    href: string;
};

export default function HamburgerMenu({ links }: { links: NavigationLink[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative ml-auto hidden max-sm:block">
            <button
                className="flex size-8 cursor-pointer items-center justify-center rounded border-0 bg-[#f27c08] p-0 text-white"
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
            {isOpen && (
                <nav id="mobile-navigation" className="absolute right-0 top-10 min-w-44 rounded-lg bg-white p-2 shadow-[0_0.5rem_1.25rem_rgb(0_0_0_/_18%)]" aria-label="Mobile navigation">
                    <ul className="m-0 list-none p-0">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link className="block rounded px-3.5 py-3 text-sm hover:bg-[#fff0df] hover:text-[#d96600] focus-visible:bg-[#fff0df] focus-visible:text-[#d96600]" href={link.href} onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
