import { Hero } from "@/components/sections/Hero";
import { ProgrammesPreview } from "@/components/sections/ProgrammesPreview";
import { ValuesStrip } from "@/components/sections/ValuesStrip";
import { GetInvolvedCta } from "@/components/sections/GetInvolvedCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProgrammesPreview />
      <ValuesStrip />
      <GetInvolvedCta />
    </main>
  );
}