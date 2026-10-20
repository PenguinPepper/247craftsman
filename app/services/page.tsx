import Image from "next/image";
import Link from "next/link";

const BUSINESS_PHONE = "0733588778";

function buildWhatsAppLink(service: string) {
    const digits = BUSINESS_PHONE.replace(/\D/g, "");
    const normalizedPhone = digits.startsWith("0")
        ? `27${digits.slice(1)}`
        : digits;
    const message = encodeURIComponent(
        `Hello, I would like to enquire about your ${service} services.`,
    );

    return `https://wa.me/${normalizedPhone}?text=${message}`;
}

const services = [
    {
        name: "Welding",
        eyebrow: "Built to last",
        description:
            "From custom designs to dependable repairs, we work with stainless steel, aluminium, and wrought iron to create strong, precise results.",
        image: "/weldingjob.jpg",
        alt: "Welder working on a metal project",
    },
    {
        name: "Painting",
        eyebrow: "Made to impress",
        description:
            "Refresh your home or business with clean, lasting finishes for walls, ceilings, and facades, tailored to your vision.",
        image: "/paintjob.jpg",
        alt: "Painting work in progress",
    },
];

export default function ServicesPage() {
    return (
        <main className="bg-white text-[#21140f]">
            <section className="relative overflow-hidden bg-[#24110d] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                <div className="absolute -right-20 -top-24 size-72 rounded-full border border-[#f27c08]/20" />
                <div className="absolute -right-8 -top-12 size-48 rounded-full border border-[#f27c08]/20" />
                <div className="relative mx-auto max-w-6xl">
                    <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                        Craftsmanship for every project.
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-[1.7] text-white/70">
                        Choose the service you need and let's bring your
                        next idea to life with precision, care, and quality
                        materials.
                    </p>
                </div>
            </section>

            <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:gap-10">
                    {services.map((service) => (
                        <article
                            className="group overflow-hidden rounded-xl border border-[#eadfd7] bg-white shadow-[0_0.75rem_2.5rem_rgb(36_17_13_/_8%)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_1rem_3rem_rgb(36_17_13_/_14%)]"
                            key={service.name}
                        >
                            <div className="relative h-56 overflow-hidden sm:h-64">
                                <Image
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#24110d]/70 to-transparent" />
                                <p className="absolute bottom-5 left-6 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#f27c08]">
                                    {service.eyebrow}
                                </p>
                            </div>
                            <div className="p-6 sm:p-8">
                                <h2 className="text-2xl font-bold">{service.name}</h2>
                                <p className="mt-3 text-sm leading-[1.7] text-[#68615e]">
                                    {service.description}
                                </p>
                                <Link
                                    className="mt-6 inline-flex items-center gap-2 rounded bg-[#f27c08] px-5 py-3 text-[0.625rem] font-bold text-white transition hover:bg-[#d96600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f27c08]"
                                    href={buildWhatsAppLink(service.name)}
                                >
                                    Enquire about {service.name}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}