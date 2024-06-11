import { useState } from "react";
import "./Footer.scss";
import { FaTelegram, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const telegram_bot_id = "6891378324:AAHmcamvkn7j0sa5TS7NrHUm9BAFahy07vU";
  const chat_id = "1987764270";
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}`;
    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", phone: "" });
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <footer id="Footer" className="footer">
      <div className="container border">
        <div className="logo">Logo</div>
        <div className="social-media">
          <div>
            <a href="#">
              <FaTelegram />
            </a>
          </div>
          <div>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
          <div>
            <a href="#">
              <MdOutlineMail />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
