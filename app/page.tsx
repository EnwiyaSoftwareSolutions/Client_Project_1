import Image from "next/image";
import Law from "./components/pArea/lawArea";

export default function Home() {
  return (
    <div className="min-h-screen  text-white">
      {/* <Law /> */}

      {/* Hero Section */}
      <section className="relative  from-black to-gray-900 py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
            Enwiya Law Firm
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert legal services tailored to your needs. Protecting your rights with integrity and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Schedule Consultation
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <div className="bg-black" style={{ clipPath: "polygon(0 0, 100% 25%, 100% 58%, 100% 100%, 0% 100%)" }}> */}
<section className="py-16 px-6">
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                About Us
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                At Enwiya Lawfare, we are committed to providing exceptional legal representation. 
                With years of experience, our team delivers personalized solutions to complex legal challenges.
              </p>
              <p className="text-gray-300">
                Our mission is to uphold justice, protect your interests, and guide you through every step of the legal process.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder-law-image.jpg" // Replace with actual image path
                alt="Law firm office"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      {/* Services Section */}
      {/* <div className="bg-black" style={{clipPath: "polygon(0 0, 100% 0, 100% 58%, 100% 100%, 0 79%)"}}> */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Corporate Law</h3>
              <p className="text-gray-300">
                Comprehensive legal support for businesses, including contracts, mergers, and compliance.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Criminal Defense</h3>
              <p className="text-gray-300">
                Aggressive defense strategies to protect your rights and achieve the best possible outcomes.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Family Law</h3>
              <p className="text-gray-300">
                Sensitive handling of divorce, custody, and other family-related legal matters.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-400">
              <p className="text-gray-300 italic mb-4">
                "Enwiya Lawfare provided exceptional service and helped me navigate a complex legal issue with ease."
              </p>
              <p className="text-yellow-400 font-semibold">- John Doe, Client</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-400">
              <p className="text-gray-300 italic mb-4">
                "Professional, knowledgeable, and dedicated. Highly recommend their services."
              </p>
              <p className="text-yellow-400 font-semibold">- Jane Smith, Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 ">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact us today for a free consultation and let us help you with your legal needs.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}