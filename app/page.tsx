import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Writeups } from "@/components/sections/Writeups";
import { FindMe } from "@/components/sections/FindMe";

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 w-full">
      <Hero />
      <hr className="border-stone-800" />
      <Projects />
      <hr className="border-stone-800" />
      <Experience />
      <hr className="border-stone-800" />
      <TechStack />
      <hr className="border-stone-800" />
      <Writeups />
      <hr className="border-stone-800" />
      <FindMe />
    </main>
  );
}
