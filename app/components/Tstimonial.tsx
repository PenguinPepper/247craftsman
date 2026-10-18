import { BadgeCheck, Clock3, Paintbrush } from "lucide-react";

const features = [
    {
        title: "24/7 Service",
        description:
            "We are available around the clock to keep your projects moving.",
        icon: Clock3,
    },
    {
        title: "Qualified Engineers",
        description:
            "Our experienced team delivers reliable work with careful attention to detail.",
        icon: BadgeCheck,
    },
    {
        title: "World-class Painters",
        description:
            "Expert preparation and finishing help every space look its best.",
        icon: Paintbrush,
    },
];

export default function Monial() {
    return (
        <section className="bg-white text-black">
            <div className="px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="border-l-2 border-[#f27c08] pl-3">
                        <p className="text-[0.625rem] font-bold text-[#f27c08]">
                            Why us
                        </p>
                        <h2 className="mt-1 text-2xl font-bold leading-none sm:text-3xl">
                            What makes
                            <br />
                            us different
                        </h2>
                    </div>
                </div>
            </div>

            <div
                className="relative bg-cover bg-center px-4 py-8 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
                style={{ backgroundImage: "url('/metalWork.jpg')" }}
            >
                <div className="absolute inset-0 bg-[#241a14]/45" />
                <ul className="relative mx-auto flex max-h-[25rem] max-w-6xl flex-col gap-4 overflow-y-auto overscroll-contain pr-1 sm:max-h-none sm:grid-cols-3 sm:flex-row sm:overflow-visible sm:pr-0 lg:gap-6">
                    {features.map(({ title, description, icon: Icon }) => (
                        <li
                            className="min-h-[10.5rem] shrink-0 rounded-lg bg-white p-5 shadow-[0_0.5rem_1.5rem_rgb(0_0_0_/_12%)] sm:flex-1 sm:p-6"
                            key={title}
                        >
                            <span className="flex size-9 items-center justify-center rounded-lg bg-[#f27c08] text-white">
                                <Icon aria-hidden="true" className="size-4" strokeWidth={2} />
                            </span>
                            <h3 className="mt-4 text-sm font-bold">{title}</h3>
                            <p className="mt-2 max-w-xs text-s leading-[1.55] text-black/60">
                                {description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
