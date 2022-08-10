import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1 id="contact-header">Elérhetőségeink</h1>
      <div className="contact-page-container">
        <ContactDetails />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
