const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form target="" class="form-container">
        <h1 id="form-h1">Küldjön nekünk üzenetet</h1>
        <input type="text" name="name" placeholder="Név" id="name-input" />
        <input
          type="text"
          name="email"
          placeholder="Email cím"
          id="email-address-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefonszám"
          id="phone-number-input"
        />
        <textarea
          name="message"
          placeholder="Üzenet"
          id="message-input"
        ></textarea>
        <button type="submit" id="send-button">
          Küldés
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
