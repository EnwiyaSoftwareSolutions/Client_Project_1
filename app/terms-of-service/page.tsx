import React from "react";
import LegalPage, { LegalSection } from "../components/LegalPage/legalPage";

export const metadata = {
  title: "Terms of Service | Enwiya Law Firm PLLC",
  description:
    "The terms and conditions governing your use of the Enwiya Law Firm PLLC website.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using the website of Enwiya Law Firm PLLC (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d), you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our website.",
    ],
  },
  {
    heading: "No Legal Advice",
    paragraphs: [
      "The content on this website is provided for general informational purposes only and does not constitute legal advice. You should not act or refrain from acting based on any information on this site without seeking advice from a qualified attorney licensed in your jurisdiction.",
    ],
  },
  {
    heading: "No Attorney-Client Relationship",
    paragraphs: [
      "Using this website, submitting a contact form, or communicating with us does not create an attorney-client relationship. Such a relationship is established only through a signed written engagement agreement.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, graphics, logos, and images, is the property of Enwiya Law Firm PLLC or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.",
    ],
  },
  {
    heading: "Acceptable Use",
    bullets: [
      "Do not use the website for any unlawful purpose or in violation of these terms.",
      "Do not attempt to gain unauthorized access to any portion of the website or its systems.",
      "Do not interfere with or disrupt the operation of the website.",
    ],
  },
  {
    heading: "Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of information on external sites.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Enwiya Law Firm PLLC shall not be liable for any damages arising from your use of, or inability to use, this website or any information contained on it.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We reserve the right to modify these Terms of Service at any time. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about these Terms of Service, please contact us through our Contact page.",
    ],
  },
];

const TermsOfServicePage = () => {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The terms and conditions governing your use of this website."
      effectiveDate="August 9, 2026"
      sections={sections}
    />
  );
};

export default TermsOfServicePage;
