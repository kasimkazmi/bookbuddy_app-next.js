import { FifthSection } from "@/components/FifthSection";
import { FirstSection } from "@/components/FirstSection";
import { ForthSection } from "@/components/ForthSection";
import { SecondSection } from "@/components/SecondSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ForthSection />
      <FifthSection />
    </>
  );
}
