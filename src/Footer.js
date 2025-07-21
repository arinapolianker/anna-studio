import "./App.css";

export default function Footer() {
  return (
    <footer className="bottom">
      <div className="footer-content">
        <div className="footer-section">
          <h4>יצירת קשר</h4>
          <p>+972 52-4817225</p>
        </div>
        <div className="footer-section">
          <h4>הזמנות בוואטסאפ</h4>
          <a href="https://wa.me/972524817225" target="_blank" rel="noopener noreferrer" className="whatsapp">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
        <div className="footer-section">
          <h4>עקבו אחריי</h4>
          <a href="https://www.facebook.com/annannas76" target="_blank" rel="noopener noreferrer" className="facebook">
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
        </div>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Anna Studio</p>
    </footer>
  );
}
