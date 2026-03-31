import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Writeups } from "@/components/sections/Writeups";
import { FindMe } from "@/components/sections/FindMe";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 w-full">
      <Hero />
      <hr className="border-neutral-800" />
      <Projects />
      <hr className="border-neutral-800" />
      <Experience />
      <hr className="border-neutral-800" />
      <Writeups />
      <hr className="border-neutral-800" />
      <FindMe />
      <hr className="border-neutral-800" />
      <Contact />
    </main>
  );
}
