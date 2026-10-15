"use client"

import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import { Facebook, Instagram } from "lucide-react";
import Brand from "./Brand";

const links = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/#gallery" },
];

export default function Footer() {
    function sendForm() {
        console.log("form sent");
    }


    return (
        <footer className="text-[#21140f]">
            <section className="mx-auto max-w-full overflow-hidden bg-white">
                <div className="grid min-h-[18.5rem] grid-cols-[minmax(0,1fr)_minmax(20rem,31.5rem)] items-center gap-12 px-[clamp(2rem,9vw,7.5rem)] py-8 max-lg:grid-cols-[minmax(0,1fr)_minmax(16rem,45%)] max-lg:gap-8 max-lg:px-10 max-sm:min-h-0 max-sm:grid-cols-1 max-sm:gap-6 max-sm:px-5 max-sm:pb-6 max-sm:pt-12">
                    <div className="max-w-[31rem]">
                        <h3 className="m-0 text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold leading-tight">
                            MJ Welding & Painting:24/7 Craftsmanship Hub!
                        </h3>
                        <p className="mt-2.5 max-w-[29rem] text-s leading-[1.45] text-[#68615e]">
                            In need of a new paint job? Or have a maintaince inqury submit it in the from below and we will get back to you!
                        </p>
                        <Form action={sendForm} className="mt-3 flex h-11 max-w-[25rem] rounded-md border border-[#e6bd94] p-1">
                            <label className="sr-only" htmlFor="footer-request">Your request</label>
                            <input
                                id="footer-request"
                                className="min-w-0 flex-1 bg-transparent px-3 text-xs text-[#21140f] outline-none placeholder:text-[#8f8985]"
                                name="request"
                                placeholder="How can we help you?"
                                type="text"
                                required
                            />
                            <button
                                className="w-[6.5rem] rounded-md bg-[#f27c08] text-xs font-semibold text-white transition hover:bg-[#d96600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    </div>
                    <div className="relative h-full min-h-[15rem] max-sm:hidden">
                        <Image
                            className="object-cover object-center"
                            src="/aboutgen.jpeg"
                            alt="Welder working on a metal project"
                            fill
                            sizes="(max-width: 1024px) 45vw, 32rem"
                        />
                    </div>
                </div>

                <div className="border-t border-[#f0d1af] px-[clamp(2rem,5.5vw,4.5rem)] max-sm:px-5">
                    <div className="flex min-h-[4rem] items-center justify-between gap-8 max-sm:min-h-0 max-sm:flex-wrap max-sm:gap-4 max-sm:py-4">
                        <Brand />
                        <nav aria-label="Footer navigation">
                            <ul className="m-0 flex list-none items-end gap-3 p-0 text-[0.625rem] text-[#57504c] max-sm:w-full max-sm:justify-start max-sm:gap-0">
                                {links.map((link, index) => (
                                    <li className="flex items-end" key={link.href}>
                                        {index > 0 && <span className="mx-3 text-[#d5ad88] max-sm:mx-2" aria-hidden="true">|</span>}
                                        <Link
                                            className="transition hover:text-[#f27c08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                    </div>
                    <div className="flex items-center justify-between border-t border-[#e9c59f] py-3 text-[0.5625rem] text-[#57504c] max-sm:block max-sm:py-3.5">
                        <p className="m-0">©2024 M.J Welding and Painting. All Rights Reserved.</p>
                        <div className="flex gap-2.5 max-sm:order-3">
                            <a
                                className="flex size-7 items-center justify-center rounded bg-[#f27c08] text-white transition hover:bg-[#d96600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                                href="#"
                                aria-label="Facebook"
                            >
                                <Facebook className="size-4" aria-hidden="true" />
                            </a>
                            <a
                                className="flex size-7 items-center justify-center rounded bg-[#f27c08] text-white transition hover:bg-[#d96600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                                href="#"
                                aria-label="Instagram"
                            >
                                <Instagram className="size-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}