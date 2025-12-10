import HeroSection from "@/components/anniversary/HeroSection";
import FirstDateSection from "@/components/anniversary/FirstDateSection";
import MemoriesSection from "@/components/anniversary/MemoriesSection";
import ReunionSection from "@/components/anniversary/ReunionSection";
import PresentListSection from "@/components/anniversary/PresentListSection";
import PromiseListSection from "@/components/anniversary/PromiseListSection";
import MusicPlayer from "@/components/anniversary/MusicPlayer";
import { SchoolJourneySection } from "@/components/anniversary/SchoolJourneySection";
import { ClosingSection } from "@/components/anniversary/ClosingSection";
import { PlaylistSection } from "@/components/anniversary/PlaylistSection";
// import TimelineSection from "@/components/anniversary/TimelineSection";
// import MemoryGallery from "@/components/anniversary/MemoryGallery";
// import LoveLetter from "@/components/anniversary/LoveLetter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 overflow-hidden relative">
      <HeroSection />
      <FirstDateSection />
      <MemoriesSection />
      <ReunionSection />
      <PresentListSection />
      <PlaylistSection />
      <PromiseListSection />
      <SchoolJourneySection />
      <ClosingSection />

      <MusicPlayer />
    </main>
  );
}
