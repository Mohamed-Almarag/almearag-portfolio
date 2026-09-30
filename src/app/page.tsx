import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Freelance } from "@/components/sections/Freelance";
import { Hero } from "@/components/sections/Hero";
import { Languages } from "@/components/sections/Languages";
import { Product } from "@/components/sections/Product";
import { Skills } from "@/components/sections/Skills";
import { Summary } from "@/components/sections/Summary";
import { AppContainer } from "@/components/ui/AppContainer";

export default function Home() {
  return (
    <AppContainer className="divide-y divide-border *:py-14 [&>*:first-child]:pt-20 sm:[&>*:first-child]:pt-24">
      <Hero />
      <Summary />
      <Experience />
      <Freelance />
      <Product />
      <Skills />
      <div className="grid gap-14 sm:grid-cols-2">
        <Education />
        <Languages />
      </div>
    </AppContainer>
  );
}
