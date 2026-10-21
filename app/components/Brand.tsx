import Link from "next/link";

export default function Brand() {
    return (
        <Link className="inline-flex shrink-0 items-center gap-2" href="/" aria-label="247 M.J Welding and Painting home">
            <span className="flex size-10 items-center justify-center rounded-full border-[0.1875rem] border-[#f27c08] bg-[#24130d] text-[0.6875rem] font-bold tracking-[-0.05em] text-white" aria-hidden="true">M.J</span>
            <span className="flex flex-col leading-[1.1]">
                <strong className="text-lg text-[#21140f]">24/7</strong>
                <small className="mt-0.5 text-[0.4375rem] font-bold text-[#f27c08]">Reliability</small>
            </span>
        </Link>
    );
}