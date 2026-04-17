import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TabsSection from "@/components/TabsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TabsSection />
      </main>
      <Footer />
    </>
  );
}
