import ContactWithUs from "@/components/home/ContactWithUs";
import FrequentlyAskedQuestion from "@/components/home/FrequentlyAskedQuestion";
import HeroBanner from "@/components/home/HeroBanner";
import LegalPracticeArea from "@/components/home/LegalPracticeArea";
import OurClientSay from "@/components/home/OurClientSay";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-6">
      <main>
        <HeroBanner/>
        <LegalPracticeArea/>
        <OurClientSay/>
        <FrequentlyAskedQuestion/>
        <ContactWithUs/>
      </main>
    </div>
  );
}
