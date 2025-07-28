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

      {/* What We Do Section */}
<section id="about" className="py-20 bg-white px-4 md:px-12 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Do</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      At WWS Energy, we harness the power of Wind, Water, and Sun to deliver clean, renewable energy
      solutions. Our innovations span residential solar panels, hydroelectric systems, and commercial wind farms.
    </p>
    <div className="mt-10 grid md:grid-cols-3 gap-8">
      {['Wind Power', 'Hydro Energy', 'Solar Solutions'].map((title) => (
        <div key={title} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">
            Sustainable and efficient technology aimed at maximizing energy output with minimal environmental impact.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* What We Think Section */}
<section id="think" className="py-20 bg-gray-100 px-4 md:px-12 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Think</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      We believe that the shift to clean energy is more than a technological leap—it's a moral obligation.
      Our mission is to create a world where energy is accessible, sustainable, and equitable.
    </p>
  </div>
</section>

{/* Who We Are Section */}
<section id="who" className="py-20 bg-white px-4 md:px-12 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      WWS Energy is a team of engineers, researchers, and climate advocates powered by a shared passion
      for sustainability. Backed by SACRED Foundation and Trident Group, we are committed to making clean energy
      the global standard.
    </p>
    <div className="mt-6 flex justify-center gap-6">
      <img src="/team1.jpg" alt="Team 1" className="w-24 h-24 rounded-full object-cover" />
      <img src="/team2.jpg" alt="Team 2" className="w-24 h-24 rounded-full object-cover" />
      <img src="/team3.jpg" alt="Team 3" className="w-24 h-24 rounded-full object-cover" />
    </div>
  </div>
</section>

{/* Contact Us Section */}
<section id="contact" className="py-20 bg-blue-900 text-white px-4 md:px-12 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg mb-6">
      Have a project in mind or want to learn more? Let’s collaborate to create a cleaner planet.
    </p>
    <form className="grid gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-md text-gray-800"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-md text-gray-800"
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        className="px-4 py-3 rounded-md text-gray-800"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>


      <Footer />
      </main>
  );
}
