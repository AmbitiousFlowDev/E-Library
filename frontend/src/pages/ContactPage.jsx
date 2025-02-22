import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return <section className="container flex flex-col mt-12 gap-5 px-18 py-2">
    <h1 className="text-4xl font-bold font-[poppins]">Contact Us</h1>
    <ContactForm />
  </section>;
}
