"use client"
import { MapPin, Headset } from "lucide-react"

export default function Header() {
    return (
        <header>
            <section>
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