import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const policyItems = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support. This may include your name, email address, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our services.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to carry out any other purpose for which the information was collected.",
    },
    {
      title: "Information Sharing and Disclosure",
      content:
        "We may share information about you as follows: With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process; If we believe your actions are inconsistent with the spirit or language of our user agreements or policies, or to protect the rights, property, and safety of PortaFlex, our users, or others.",
    },
    {
      title: "Data Retention",
      content:
        "We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.",
    },
    {
      title: "Security",
      content:
        "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.",
    },
    {
      title: "Your Choices",
      content:
        "You may update, correct, or delete information about you at any time by logging into your online account or by contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those communications.",
    },
    {
      title: "Changes to this Policy",
      content:
        "We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <p className="text-lg mb-8">
          At PortaFlex, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you use our website and services.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {policyItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <address className="not-italic">
            <p>PortaFlex</p>
            <p>123 Portfolio Lane</p>
            <p>San Francisco, CA 94105</p>
            <p>Email: privacy@portaflex.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </address>
        </div>
      </main>
    </div>
  );
}
