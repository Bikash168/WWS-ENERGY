import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo"
import WhatWeThink from "@/components/WhatWeThink";
import WhoWeAre from '@/components/WhoWeAre';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <Hero />
      </section>

      {/* What We Do Section */}
      <section id="about" className="py-20 bg-white px-4 md:px-12 text-center">
        <WhatWeDo />
      </section>

      {/* What We Think Section */}
      <section id="think" className="py-20 bg-gray-100 px-4 md:px-12 text-center">
        <WhatWeThink />
      </section>

      {/* Who We Are Section */}
      <section id="who" className="py-20 bg-white px-4 md:px-12 text-center">
        <WhoWeAre />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white px-4 md:px-12 text-center">
        <ContactSection />
      </section>


      <Footer />
    </main>
  );
}
