"use client";
import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Button } from "../components/ui/button";

const About = () => {
//   const [propSelect, setPropSelect] = useState<string>("");

//   const onPropClick = (prop: string) => {
//     setPropSelect(prop);
//   };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen  text-white">
      <main className="flex-1 min-h-screen">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-12">
            <img
              src="/images/profile.jpg" // Replace with the actual path to the profile image
              alt="David Andrew Enwiya"
              className="w-24 h-24 rounded-full mr-6 object-cover mb-4 md:mb-0"
            />
            <div className="text-center md:text-left">
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



          {/* Practice Areas Section */}

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Practice Areas</h2>
            <div className="flex flex-col gap-10">
              {[
                {
                  key: "corporate",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-yellow-400 drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M17 20H7v-2h10v2zm1-4H6c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm-1-6V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2zm-6-3c0-1.1.9-2 2-2s2 .9 2 2v3h-4V7z"/></svg></span>
                  ),
                  title: "Business & Corporate Law",
                  content: (
                    <>
                      <p className="text-gray-300 mb-2">Building and operating a successful business requires more than a strong idea—it requires a solid legal foundation. From formation through growth, transition, or exit, business owners face complex legal decisions that can significantly affect their operations, personal liability, and long-term goals. Clear legal guidance at each stage is essential to protecting both the business and the people behind it.</p>
                      <p className="text-gray-300 mb-2">Enwiya Law Firm works closely with entrepreneurs, professionals, and established companies to provide practical, strategic counsel tailored to their unique needs. We take the time to understand how each business operates, the risks it faces, and the objectives it seeks to achieve. Our approach emphasizes thoughtful planning, careful drafting, and proactive problem-solving, allowing clients to make informed decisions with confidence.</p>
                      <ul className="list-disc list-inside text-gray-200 mb-2">
                        <li>Business Entity Formation and Structuring</li>
                        <li>Contract Drafting, Review, and Negotiation</li>
                        <li>Business Acquisitions and Sales</li>
                        <li>Ownership Transitions and Succession Planning</li>
                        <li>Business Dissolutions and Wind-Downs</li>
                      </ul>
                      <p className="text-gray-400 italic">Whether you are launching a new venture, formalizing relationships through well-crafted agreements, acquiring or selling a business, or navigating a transition or dissolution, Enwiya Law Firm provides clear, reliable legal guidance focused on protecting your interests and supporting your long-term success.</p>
                    </>
                  ),
                },
                {
                  key: "estate",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-yellow-400 drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg></span>
                  ),
                  title: "Estate Planning",
                  content: (
                    <>
                      <p className="text-gray-300 mb-2">Estate planning is about more than distributing assets—it is about protecting loved ones, preserving what you have built, and ensuring your wishes are honored when it matters most. Without a clear and legally sound plan in place, families are often left to navigate uncertainty, unnecessary expense, and avoidable conflict during already difficult times.</p>
                      <p className="text-gray-300 mb-2">At Enwiya Law Firm, we help individuals and families create thoughtful, customized estate plans that reflect their values, goals, and unique circumstances. We believe effective estate planning begins with listening. By understanding each client’s family dynamics, financial situation, and long-term objectives, we are able to craft plans that provide clarity, continuity, and peace of mind.</p>
                      <ul className="list-disc list-inside text-gray-200 mb-2">
                        <li>Wills and Revocable Living Trusts</li>
                        <li>Powers of Attorney and Health Care Directives</li>
                        <li>Asset Protection and Beneficiary Planning</li>
                        <li>Trust Funding and Estate Plan Implementation</li>
                        <li>Estate Planning for Business Owners and Families</li>
                      </ul>
                      <p className="text-gray-400 italic">Whether you are planning for the future, preparing for life’s uncertainties, or seeking to protect your legacy for the next generation, Enwiya Law Firm provides careful guidance and strategic counsel designed to safeguard your interests and support your family with confidence and dignity.</p>
                    </>
                  ),
                },
                {
                  key: "probate",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-yellow-400 drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></span>
                  ),
                  title: "Probate & Trust Administration",
                  content: (
                    <>
                      <p className="text-gray-300 mb-2">The loss of a loved one is never easy, and the legal responsibilities that follow can feel overwhelming. Probate and trust administration often involve complex procedures, strict deadlines, and emotionally sensitive decisions—all at a time when families are focused on grieving and healing. Without experienced legal guidance, even straightforward estates can become unnecessarily time-consuming or contentious.</p>
                      <p className="text-gray-300 mb-2">At Enwiya Law Firm, we guide personal representatives, trustees, and beneficiaries through the probate and trust administration process with care, clarity, and efficiency. Our approach emphasizes clear communication, practical problem-solving, and diligent administration, helping clients understand their responsibilities while minimizing stress and uncertainty. We work to ensure that estates and trusts are administered properly, efficiently, and in accordance with the law and the decedent’s intentions.</p>
                      <ul className="list-disc list-inside text-gray-200 mb-2">
                        <li>Informal Probate Proceedings</li>
                        <li>Trust Administration and Trustee Guidance</li>
                        <li>Estate and Trust Asset Management Support</li>
                        <li>Creditor Claims and Notice Requirements</li>
                        <li>Distribution of Assets to Beneficiaries</li>
                        <li>Resolution of Probate and Trust-Related Issues</li>
                      </ul>
                      <p className="text-gray-400 italic">Whether you are serving as a personal representative or trustee, or you are a beneficiary seeking guidance, Enwiya Law Firm provides steady, knowledgeable support throughout the administration process. Our goal is to ease the legal burden during a difficult time while protecting your interests and honoring your loved one’s legacy.</p>
                    </>
                  ),
                },
                {
                  key: "immigration",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-yellow-400 drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></span>
                  ),
                  title: "Immigration Law",
                  content: (
                    <>
                      <p className="text-gray-300 mb-2">For generations, the United States has represented opportunity, stability, and the promise of a better future. Individuals and families from around the world continue to answer that call—seeking to build lives, reunite with loved ones, and contribute to the communities they call home. Yet the immigration process itself can be complex, demanding, and,  overwhelming. Strict requirements, evolving regulations, and high stakes often leave individuals and families uncertain about their next steps.</p>
                      <p className="text-gray-300 mb-2">Immigration law is a dynamic and detail-intensive area of practice that requires careful legal analysis, strategic planning, and clear guidance. At Enwiya Law Firm, we are committed to helping clients navigate this process with confidence. We take the time to understand each client’s goals and circumstances, explain available options in plain terms, and advocate diligently to protect their rights at every stage of the process.</p>
                      <ul className="list-disc list-inside text-gray-200 mb-2">
                        <li>Fiancé (K-1) Petitions</li>
                        <li>Spousal and Family-Based Petitions</li>
                        <li>Adjustment of Status</li>
                        <li>Removal of Conditions on Permanent Residence</li>
                        <li>Naturalization and U.S. Citizenship</li>
                        <li>Permanent Resident Card (Green Card) Renewals</li>
                        <li>USCIS Interview Preparation and Legal Advising</li>
                      </ul>
                      <p className="text-gray-400 italic">Enwiya Law Firm serves clients from diverse backgrounds and communities, offering personalized immigration counsel rooted in respect, diligence, and professionalism. Whether you are beginning your immigration journey or navigating a critical stage in the process, we are dedicated to providing steady guidance and strong advocacy as you pursue your future in the United States.</p>
                    </>
                  ),
                },
              ].map((area, idx) => {
                const [open, setOpen] = useState(idx === 0);
                return (
                  <div key={area.key} className="relative bg-gradient-to-br from-yellow-400/30 via-yellow-900/10 to-transparent border border-yellow-400 rounded-xl shadow-xl p-8 flex flex-col items-start transition-all">
                    <div className="flex items-center w-full justify-between cursor-pointer select-none" onClick={() => setOpen((v) => !v)}>
                      <div className="flex items-center gap-3">
                        {area.icon}
                        <h3 className="text-xl font-bold text-yellow-300 mb-2">{area.title}</h3>
                      </div>
                      <button className="ml-4 text-yellow-400 text-2xl focus:outline-none" aria-label={open ? 'Collapse' : 'Expand'}>
                        {open ? '−' : '+'}
                      </button>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                    >
                      {area.content}
                    </div>
                    <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none">{area.icon}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Personal Interests Section */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Personal Interests</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Outside of his practice, David enjoys reading, playing piano, and spending time with family and friends.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;