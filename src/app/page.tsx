import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { MindPlace } from "@/components/MindPlace";
import { RealmBridge } from "@/components/RealmBridge";
import { UnchartedStorm } from "@/components/UnchartedStorm";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { NavRing } from "@/components/NavRing";
import { Preloader } from "@/components/Preloader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayush Singh | Software & Systems Engineer",
  description: "High-end scrollytelling personal portfolio of Ayush Singh, Software Engineer.",
};

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-red-900 selection:text-white">
      <Preloader />
      <ScrollyCanvas />
      <MindPlace />
      <RealmBridge />
      <UnchartedStorm />
      <TechStack />
      <Footer />
    </main>
  );
}
