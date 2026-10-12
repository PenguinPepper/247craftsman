import Image from "next/image";
import Link from "next/link";
import Form from "next/form"
import Brand from "./Brand";

const links = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/#gallery" },
];

export default function Footer() {
    function sendForm() {
        console.log("form sent")
    }
    return (
        <footer>
            <Image
                src="/aboutgen.jpeg"
                alt="Welder working on a metal project"
            />
            <h3>MJ Welding & Painting:24/7 Craftsmanship Hub!</h3>
            <p>In need of a new paint job? Or have a maintaince inqury submit it in the from below and we will get back to you!
            </p>
            <Form action={sendForm}>
                <input name="request" />
                <button type="submit">Submit</button>
            </Form>
            <div>
                <Brand />
                <nav aria-label="Footer navigation">
                    <ul>
                        {links.map((link, index) => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}