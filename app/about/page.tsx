import React from "react";

const About = () => {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-12">
          <img
            src="/images/profile.jpg"  // Replace with the actual path to the profile image
            alt="David Andrew Enwiya"
            className="w-24 h-24 rounded-full mr-6 object-cover"
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              About David Andrew Enwiya
            </h1>
            <p className="text-gray-300 text-lg">
              Founding and Managing Attorney of Enwiya Law Firm PLLC
            </p>
          </div>
        </div>

        {/* Biography Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Biography
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            David Andrew Enwiya is the founding and managing attorney of Enwiya
            Law Firm PLLC, where he advises and represents clients in corporate
            law, estate planning, probate and trust administration, and
            immigration law. His practice focuses on guiding individuals, families,
            and business owners through some of the most consequential legal
            decisions they will face.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether assisting entrepreneurs with structuring and protecting their
            businesses, helping families preserve wealth and plan for the future,
            navigating probate and trust administration, or advising clients
            through critical immigration matters, David brings a thoughtful,
            solutions-oriented approach to every representation. He is committed
            to delivering client-centered legal services grounded in strategic
            analysis, clear communication, and close collaboration, ensuring
            clients feel informed, confident, and supported throughout the legal
            process.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Education
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Born in Chicago, Illinois, David relocated with his family after his
            childhood to Phoenix, Arizona. He earned his Bachelor of Science in
            Criminology and Criminal Justice, with a minor in Philosophy, from
            Arizona State University in 2014, and his Juris Doctor from Arizona
            Summit Law School in 2018.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            During law school, David distinguished himself through academic
            leadership and service. He served as Executive Articles Editor of the
            Law Review, worked as a teaching assistant for multiple courses—including
            Contracts, Civil Procedure, Secured Transactions, and Legal Writing—and
            was elected President of the Student Bar Association. In recognition
            of his leadership and academic excellence, he was awarded Student of
            the Year for the 2017–2018 academic year.
          </p>
        </section>

        {/* Personal Interests Section */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Personal Interests
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Outside of his practice, David enjoys reading, playing piano, and
            spending time with family and friends.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;