import React from "react";
import LegalPage, { LegalSection } from "../components/LegalPage/legalPage";

export const metadata = {
  title: "Privacy Policy | Enwiya Law Firm PLLC",
  description:
    "Learn how Enwiya Law Firm PLLC collects, uses, and protects your personal information.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "Enwiya Law Firm PLLC (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our legal services.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We may collect personal information that you voluntarily provide to us, as well as certain information automatically when you use our website.",
    ],
    bullets: [
      "Contact details such as your name, email address, phone number, and mailing address.",
      "Information you provide through contact forms, consultation requests, or correspondence.",
      "Technical data such as your IP address, browser type, and pages visited on our site.",
    ],
  },
  {
    heading: "How We Use Your Information",
    bullets: [
      "To respond to your inquiries and provide requested legal services.",
      "To schedule consultations and communicate with you about your matter.",
      "To improve our website, services, and client experience.",
      "To comply with legal, regulatory, and professional obligations.",
    ],
  },
  {
    heading: "Attorney-Client Relationship",
    paragraphs: [
      "Communications through this website do not create an attorney-client relationship until a formal engagement is established. Your inquiry or consultation alone does not amount to an attorney-client relationship, and we do not represent you until after a written engagement agreement is executed by both parties (the firm and client).",
    ],
  },
  {
    heading: "Disclosure of Information",
    paragraphs: [
      "We do not sell your personal information. We may share information with trusted service providers who assist in operating our website and delivering services, or when required by law, court order, or professional obligation.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or our data practices, please contact us through our Contact page.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      effectiveDate="August 9, 2026"
      sections={sections}
    />
  );
};

export default PrivacyPolicyPage;
