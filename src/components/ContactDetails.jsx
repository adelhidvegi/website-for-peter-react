import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";

const ContactDetails = () => {
  return (
    <div className="contact-details-container">
      <div className="phone-email-address-container">
        <div className="contact-card-container">
          <div className="contact-icon">
            <PhoneAndroidRoundedIcon fontSize="large" />
          </div>
          <h2>+36 30 111 1111</h2>
        </div>
        <div className="contact-card-container">
          <div className="contact-icon">
            <EmailRoundedIcon fontSize="large" />
          </div>
          <h2>valami@valami.hu</h2>
        </div>
        <div className="contact-card-container">
          <div className="contact-icon">
            <HouseRoundedIcon fontSize="large" />
          </div>
          <h2>2167 Vácduka</h2>
        </div>
      </div>
      <iframe
        title="map-for-farm"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21461.60002774322!2d19.212347454956056!3d47.74847516806647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47402cb00686adbb%3A0xe8f6a04b09eec7d2!2zVsOhY2R1a2EsIDIxNjc!5e0!3m2!1sen!2shu!4v1658330256239!5m2!1sen!2shu"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactDetails;
