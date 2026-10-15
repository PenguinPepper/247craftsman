"use client"
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Monial from "./components/Tstimonial";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Services />
      <Monial />
      <Gallery />
    </main>
  );
}
