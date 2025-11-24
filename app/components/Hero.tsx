"use client"
import Image from "next/image"

export default function Hero() {
    return (
        <section>
            <h1>Uleash the power of precision</h1>
            <p>
                Expert welding and painting solutions tailored to you needs.
                Precision, quality, and unmatched craftsmanship for every project.
                Your trusted partner in welding and painting excellence.
            </p>
            <Image
                src="/mjhero.png"
                alt="Welding and Painting Services"
                width={600}
                height={400}
            />
            <section>
                <button>Contact Us</button>
                <button>Our Services</button>
            </section>
        </section>
    )
}