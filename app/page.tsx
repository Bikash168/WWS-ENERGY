import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

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

      {/* About Section */}
      <section className="py-16 bg-white text-gray-800 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
                        src="/logo.png"
                        alt="WWS Energy"
                        className="h-6 sm:h-8 md:h-12 lg:h-16 w-auto"
                    />
          <div>
            <h2 className="text-3xl font-bold mb-4">About WWS Energy</h2>
            <p className="text-lg leading-relaxed">
              WWS Energy is a forward-thinking enterprise focused on generating renewable energy
              from Wind, Water, and Sun. We are committed to delivering clean and sustainable energy
              solutions that reduce carbon emissions and contribute to a greener planet.
            </p>
            <p className="mt-4 text-sm text-gray-500 italic">Website: <a href="https://wwsenergy.in" className="text-blue-600 underline">wwsenergy.in</a></p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-700 text-white text-center">
        <h3 className="text-2xl font-semibold">Join us in revolutionizing clean energy</h3>
        <p className="mt-2">Building a sustainable tomorrow, today.</p>
      </section>

      <Footer />
    </main>
  );
}
