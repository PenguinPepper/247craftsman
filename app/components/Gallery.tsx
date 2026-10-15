import Image from "next/image";
import Link from "next/link";

const galleryImages = [
    {
        src: "/paintjob.jpg",
        alt: "Painter working beside a blue front door",
        tile: "lg:row-span-3",
    },
    {
        src: "/weldingjob.jpg",
        alt: "Welder working on a metal project",
        tile: "lg:row-span-2",
    },
    {
        src: "/gallery/creamWall.jpg",
        alt: "Freshly painted cream exterior wall",
        tile: "lg:row-span-3",
    },
    {
        src: "/gallery/yellowWall.jpg",
        alt: "Freshly painted yellow exterior wall",
        tile: "lg:row-span-2",
    },
    {
        src: "/paintjob.jpg",
        alt: "Painter applying color to an exterior wall",
        tile: "lg:row-span-3",
        featured: true,
    },
    {
        src: "/gallery/burglar.jpg",
        alt: "Decorative burglar bars installed on a window",
        tile: "lg:row-span-2",
    },
];

export default function Gallery() {
    return (
        <section className="bg-white px-5 py-12 text-black sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <p className="text-[0.625rem] font-bold text-[#f27c08]">
                        What do we offer
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-none sm:text-3xl">
                        Explore our gallery
                    </h2>
                </div>

                <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:auto-rows-[7rem] lg:grid-cols-3 lg:gap-4">
                    {galleryImages.map((image) => (
                        <figure
                            className={`${image.featured ? "block" : "hidden sm:block"} relative aspect-[4/3] overflow-hidden rounded-sm bg-black/5 ${image.tile}`}
                            key={`${image.src}-${image.alt}`}
                        >
                            <Image
                                className="object-cover"
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                            {image.featured && (
                                <Link
                                    className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded bg-[#f27c08] px-5 py-2.5 text-[0.625rem] font-bold text-white shadow-[0_0.5rem_1.25rem_rgb(242_124_8_/_25%)] transition hover:bg-[#d96600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                                    href="#contact"
                                >
                                    Contact Us
                                </Link>
                            )}
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
