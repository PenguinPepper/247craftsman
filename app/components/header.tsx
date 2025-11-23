"use client"
import { MapPin, Headset, Menu } from "lucide-react"

export default function Header() {
    return (
        <header>
            <section>
                <h1> 24/7 MJ Welding & Painting</h1>
            </section>
            <Menu />
            <section className="">
                <section>
                    <MapPin />
                    <p>Location:</p>
                    <p>Gauteng South Africa</p>
                </section>
                <section>
                    <Headset />
                    <p>For enquiry:</p>
                    <a href="tel: 0783588778"> 073 358 8778</a>
                </section>
                <section>
                    <a>
                        facebook
                    </a>
                    <a>
                        instagram
                    </a>
                </section>
            </section>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
            </ul>
        </header>
    )
}