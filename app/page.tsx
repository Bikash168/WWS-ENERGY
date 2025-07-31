import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactSection from '@/components/ContactSection';
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

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
        <AboutUs />
      </section>

      {/* What We Think Section */}
      <section id="services" className="py-20 bg-gray-100 px-4 md:px-12 text-center">
        <Services />
      </section>

      <section id="whychooseus" className="py-20 bg-gray-100 px-4 md:px-12 text-center">
        <WhyChooseUs />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white px-4 md:px-12 text-center">
        <ContactSection />
      </section>


      <Footer />
    </main>
  );
}
