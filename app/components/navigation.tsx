"use client";

import Link from "next/link";
import { Facebook, Headset, Instagram, MapPin } from "lucide-react";
import HamburgerMenu from "./Menu";

const links = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/#gallery" },
];

function Brand() {
    return (
        <Link className="inline-flex shrink-0 items-center gap-2" href="/" aria-label="247 M.J Welding and Painting home">
            <span className="flex size-10 items-center justify-center rounded-full border-[0.1875rem] border-[#f27c08] bg-[#24130d] text-[0.6875rem] font-bold tracking-[-0.05em] text-white" aria-hidden="true">M.J</span>
            <span className="flex flex-col leading-[1.1]">
                <strong className="text-lg text-[#21140f]">247 M.J</strong>
                <small className="mt-0.5 text-[0.4375rem] font-bold text-[#f27c08]">Welding and Painting</small>
            </span>
        </Link>
    );
}

function ContactDetails() {
    return (
        <div className="flex flex-1 items-center justify-center gap-[clamp(1.5rem,5vw,4.5rem)] max-lg:gap-[1.125rem]">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-[#f27c08] [stroke-width:2.2]" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                    <span className="text-[0.625rem] text-[#444]">Location:</span>
                    <strong className="whitespace-nowrap text-[0.625rem] font-bold text-[#1e1e1e]">Gauteng South Africa</strong>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Headset className="size-5 text-[#f27c08] [stroke-width:2.2]" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                    <span className="text-[0.625rem] text-[#444]">For enquiry:</span>
                    <a className="whitespace-nowrap text-[0.625rem] font-bold text-[#1e1e1e]" href="tel:0733588778">073 358 8778</a>
                </div>
            </div>
        </div>
    );
}

function SocialLinks() {
    return (
        <div className="flex gap-2.5" aria-label="Social media">
            <a className="flex size-7 items-center justify-center rounded bg-[#f27c08] text-white transition duration-150 hover:-translate-y-px hover:bg-[#d96600]" href="#" aria-label="Facebook">
                <Facebook className="size-4" aria-hidden="true" />
            </a>
            <a className="flex size-7 items-center justify-center rounded bg-[#f27c08] text-white transition duration-150 hover:-translate-y-px hover:bg-[#d96600]" href="#" aria-label="Instagram">
                <Instagram className="size-4" aria-hidden="true" />
            </a>
        </div>
    );
}

export default function Header() {
    return (
        <header className="">
            <section className="relative z-10 mx-auto mt-2 max-w-full  bg-white shadow-[0_0.25rem_0.75rem_rgb(0_0_0_/_12%)] max-lg:mx-6 max-sm:m-0 max-sm:rounded-none">
                <div className="flex min-h-20 items-center gap-9 px-10 py-3.5 max-lg:gap-[1.125rem] max-lg:px-7 max-lg:py-3 max-sm:min-h-14 max-sm:px-4 max-sm:py-2">
                    <Brand />
                    <div className="flex flex-1 items-center max-sm:hidden">
                        <ContactDetails />
                    </div>
                    <div className="max-sm:hidden">
                        <SocialLinks />
                    </div>
                    <HamburgerMenu links={links} />
                </div>
            </section>
            <nav className="mx-auto w-fit max-w-full rounded-b-xl bg-white max-sm:hidden" aria-label="Main navigation">
                <ul className="m-0 flex w-max list-none p-0">
                    {links.map((link, index) => (
                        <li key={link.href}>
                            <Link className={`flex min-w-28 items-center justify-center px-6 py-3 text-xs text-black transition duration-150 hover:bg-[#f27c08] hover:text-white focus-visible:bg-[#f27c08] focus-visible:text-white ${index === 0 ? "bg-[#f27c08] text-white rounded-bl-xl" : ""}`} href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
