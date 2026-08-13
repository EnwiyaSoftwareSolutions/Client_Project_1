import React from "react";
import LegalPage, { LegalSection } from "../components/LegalPage/legalPage";

export const metadata = {
  title: "Disclaimer | Enwiya Law Firm PLLC",
  description:
    "Legal disclaimer regarding the information provided on the Enwiya Law Firm PLLC website.",
};

const sections: LegalSection[] = [
  {
    heading: "General Information Only",
    paragraphs: [
      "The information provided on this website by Enwiya Law Firm PLLC is for general informational purposes only. It is not intended to be, and should not be relied upon as, legal advice for any particular situation.",
    ],
  },
  {
    heading: "No Attorney-Client Relationship",
    paragraphs: [
      "Viewing this website, contacting us, or transmitting information to us does not create an attorney-client relationship. An attorney-client relationship is formed only upon the execution of a written engagement agreement between you and Enwiya Law Firm PLLC.",
    ],
  },
  {
    heading: "Attorney Advertising",
    paragraphs: [
      "This website may be considered attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome. Every legal matter is unique, and outcomes depend on the specific facts and circumstances involved.",
    ],
  },
  {
    heading: "No Guarantee of Results",
    paragraphs: [
      "Nothing on this website constitutes a promise or guarantee regarding the outcome of any legal matter. Any testimonials or case results described do not guarantee or predict a similar result in any future matter.",
    ],
  },
  {
    heading: "Confidentiality of Communications",
    paragraphs: [
      "Please do not send any confidential or time-sensitive information through this website or by email until an attorney-client relationship has been formally established. Unsolicited information may not be treated as confidential or privileged.",
    ],
  },
  {
    heading: "Jurisdiction",
    paragraphs: [
      "Enwiya Law Firm PLLC provides legal services only in jurisdictions where its attorneys are licensed to practice. The availability of information on this website does not imply that we are able to represent you in your jurisdiction.",
    ],
  },
  {
    heading: "External Links",
    paragraphs: [
      "This website may contain links to external websites. We are not responsible for the accuracy, content, or reliability of any information provided by third-party sites.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Disclaimer, please contact us through our Contact page before relying on any information provided here.",
    ],
  },
];

const DisclaimerPage = () => {
  return (
    <LegalPage
      title="Disclaimer"
      subtitle="Important legal notices regarding the information on this website."
      effectiveDate="August 9, 2026"
      sections={sections}
    />
  );
};

export default DisclaimerPage;
