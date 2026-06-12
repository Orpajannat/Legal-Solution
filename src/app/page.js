import HeroBanner from "@/components/home/HeroBanner";
import LegalPracticeArea from "@/components/home/LegalPracticeArea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-6">
      <main>
        <HeroBanner/>
        <LegalPracticeArea/>
      </main>
    </div>
  );
}
