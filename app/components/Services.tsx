import Image from "next/image";

export default function Services() {
    return (
        <section className="outline-white bg-white px-5 py-10 text-black sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="mx-auto max-w-6xl">
                <div className="border-l-2 border-[#f27c08] pl-3">
                    <p className="text-[0.625rem] font-bold text-[#f27c08]">What do we offer</p>
                    <h2 className="mt-1 text-2xl font-bold leading-none sm:text-3xl">Our<br className="sm:hidden" /> Services</h2>
                </div>
                <section className="mt-8 grid gap-8 md:grid-cols-2 lg:gap-10">
                    <article className="grid gap-4 sm:grid-cols-[9rem_1fr] sm:items-start lg:grid-cols-[1fr_1.1fr]">
                        <Image
                            className="hidden lg:block h-32 w-full rounded-lg object-cover sm:h-32 lg:h-32"
                            src="/weldingjob.jpg"
                            alt="Welder working on a metal project"
                            width={640}
                            height={800}
                        />
                        <div>
                            <h3 className="text-lg font-bold">Welding</h3>
                            <p className="mt-2 text-s leading-[1.65] text-black/70">
                                Combining precision and artistry, we expertly repair stainless steel, aluminum, and wrought iron with care.
                            </p>
                            <div className="mt-3 grid h-7 grid-cols-3 gap-1 overflow-hidden">
                                <Image className="h-full w-full object-cover" src="/weldingjob.jpg" alt="" width={640} height={800} />
                                <Image className="h-full w-full object-cover" src="/paintjob.jpg" alt="" width={640} height={640} />
                                <Image className="h-full w-full object-cover" src="/weldingjob.jpg" alt="" width={640} height={800} />
                            </div>
                        </div>
                    </article>
                    <article className="grid gap-4 sm:grid-cols-[9rem_1fr] sm:items-start lg:grid-cols-[1fr_1.1fr]">
                        <Image
                            className="hidden lg:block h-32 w-full rounded-lg object-cover sm:h-32 lg:h-32"
                            src="/paintjob.jpg"
                            alt="Painter working on a building"
                            width={640}
                            height={640}
                        />
                        <div>
                            <h3 className="text-lg font-bold">Painting</h3>
                            <p className="mt-2 text-s leading-[1.65] text-black/70">
                                Our skilled brushstrokes transform walls, ceilings, and facades with a palette of colors that align with your vision.
                            </p>
                            <div className="mt-3 grid h-7 grid-cols-3 gap-1 overflow-hidden">
                                <Image className="h-full w-full object-cover" src="/paintjob.jpg" alt="" width={640} height={640} />
                                <Image className="h-full w-full object-cover" src="/weldingjob.jpg" alt="" width={640} height={800} />
                                <Image className="h-full w-full object-cover" src="/paintjob.jpg" alt="" width={640} height={640} />
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    )
}