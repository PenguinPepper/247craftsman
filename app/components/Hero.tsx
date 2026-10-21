"use client";

import Image from "next/image";
import Link from "next/link";

const BUSINESS_PHONE = "0732154689";
const DEFAULT_MESSAGE =
    "Hello, I have an inquiry about your services.";

function buildWhatsAppLink(phone: string, message: string) {
    const digits = phone.replace(/\D/g, "");
    const normalizedPhone = digits.startsWith("0")
        ? `27${digits.slice(1)}`
        : digits;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-[#24110d] text-white">
            <div className="mx-auto grid min-h-[34rem] max-w-7xl items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-4 lg:px-16 lg:py-14">
                <section className="relative z-10 max-w-xl lg:pb-8">
                    <h1 className="max-w-[22rem] text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem]">
                        Unleash the Power of Precision
                        <span className="text-[#f27c08]"> Craftsman</span>
                    </h1>
                    <p className="mt-5 max-w-[28rem] text-s leading-[1.55] text-white/75 sm:text-sm">
                        Expert solutions tailored to your needs.
                        Precision, durability, and unmatched craftsmanship for
                        every project. Your trusted partner.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            className="rounded bg-[#f27c08] px-5 py-2.5 text-[0.625rem] font-bold text-white shadow-[0_0.5rem_1.25rem_rgb(242_124_8_/_18%)] transition hover:bg-[#d96600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                            href={buildWhatsAppLink(BUSINESS_PHONE, DEFAULT_MESSAGE)}
                        >
                            Contact Us
                        </Link>
                        <Link
                            className="rounded border border-[#f27c08] bg-transparent px-5 py-2.5 text-[0.625rem] font-bold text-[#f27c08] transition hover:bg-[#f27c08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                            href="/services"
                        >
                            View Service
                        </Link>
                    </div>
                </section>

                <div className="relative mx-auto h-[22rem] w-full max-w-[34rem] sm:h-[27rem] lg:h-[32rem] lg:max-w-[39rem]">
                    <div className="absolute left-[17%] top-[8%] h-[74%] w-[68%] rounded-xl border-2 border-[#f27c08] bg-white sm:rounded-2xl" />
                    <Image
                        className="absolute inset-x-[7%] bottom-[-8%] z-10 h-[116%] w-[86%] object-contain object-bottom sm:inset-x-[8%] sm:w-[84%] lg:inset-x-[3%] lg:w-[94%]"
                        src="/hero.png"
                        alt="Welder working on a metal project"
                        width={1024}
                        height={1536}
                        priority
                    />
                    <div className="absolute left-[1%] top-[42%] z-20 flex items-center gap-2 rounded-md bg-[#f27c08] px-3 py-2 text-white shadow-lg sm:left-[4%] sm:px-4">
                        <strong className="text-lg leading-none sm:text-xl">200+</strong>
                        <span className="border-l border-white/50 pl-2 text-[0.5rem] leading-tight">
                            <span className="block font-bold">Happy</span>
                            <span className="block">Customers</span>
                        </span>
                    </div>
                    <div className="absolute bottom-[5%] right-[1%] z-20 rounded-md bg-white px-3 py-2 text-[#24110d] shadow-lg sm:right-[4%]">
                        <div className="flex items-center gap-2">
                            <span className="flex size-7 items-center justify-center rounded-full bg-[#f27c08] text-[0.5rem] font-bold text-white">
                                GM
                            </span>
                            <div>
                                <p className="text-[0.5rem] font-bold leading-none">Patrick Ndlovu</p>
                                <p className="mt-1 text-[0.5rem] tracking-[0.16em] text-[#f27c08]">★★★★★</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
