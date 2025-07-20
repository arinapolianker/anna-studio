import "./App.css";
import Head from "./Head";
import anna from "./photos/anna.jpg";

export default function Contact() {
  return (
    <div className="contact-page">
      <Head />
      <div className="contact-header">
        <h1>צור קשר</h1>
        <p className="phone"><strong>טלפון:</strong> 052-6849426</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/annannas76" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://wa.me/972524817225" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="contact-photo">
        <img src={anna} alt="anna" />
      </div>
    </div>
  );
}