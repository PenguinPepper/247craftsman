import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-white px-4 py-8 text-black sm:px-6 sm:py-12 lg:px-10 lg:py-18">
            <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div className="relative hidden h-[17rem] overflow-hidden rounded-xl bg-[#f27c08] sm:h-[21rem] lg:block lg:h-[22rem]">
                    <Image
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        src="/aboutgen.jpeg"
                        alt="Welder working on a metal project"
                        fill
                        sizes="(min-width: 1024px) 35vw, 100vw"
                        priority
                    />
                </div>
                <div className="max-w-2xl lg:py-4">
                    <p className="text-[0.625rem] font-bold">Who are we?</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                        MJ <span className="text-[#f27c08]">Welding</span> and Painting
                    </h2>
                    <p className="mt-4 text-[0.6875rem] leading-[1.7] text-black/80 sm:text-xs">
                        At MJ Welding & Painting, we ignite creativity and fortify structures around the clock! With our custom welding services we'll provide you with sleek modern designs that are mended with precision to provide lasting strength. Paired with our quality painting services we'll help you transform your living spaces with our expert brushstrokes. Discover the fusion of artistry and reliability at MJ Welding & Painting.
                    </p>
                </div>
            </div>
        </section>
    )
}