import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import TabsSection from "@/components/TabsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <TabsSection />
      </main>
      <Footer />
    </>
  );
}
