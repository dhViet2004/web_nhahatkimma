import './Footer.css'
import footerBg from '../assets/footer.png'
import logo from '../assets/logo_nha-hat.png'

function Footer() {
  

  return (
    <>
      <footer className="footer">
        <div className="footer-background">
          <img src={footerBg} alt="Footer background" className="footer-bg-image" />
        </div>
        
        <div className="footer-content">
          <div className="footer-container">
            {/* Cột 1: Thông tin liên hệ */}
            <div className="footer-section footer-info">
              <h3 className="footer-title">NHÀ HÁT SÂN KHẤU TRUYỀN THỐNG QUỐC GIA VIỆT NAM</h3>
              <ul className="contact-list">
                <li className="contact-item">
                 
                  <span> <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0zM12 11C10.343 11 9 9.657 9 8s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg> Địa chỉ: Rap 71 Kim Mã, Quận Ba Đình, Hà Nội, Việt Nam</span>
                </li>
                <li className="contact-item">
                  
                  <span><svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg> Điện thoại: 024 3845 7403</span>
                </li>
                <li className="contact-item">
                  
                  <span><svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg> Email: info@nhahatcheovietnam.vn</span>
                </li>
              </ul>
            </div>

            {/* Cột 2: Bản đồ */}
            <div className="footer-section footer-map">
             
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.021325489361!2d105.8271552!3d21.0318327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab750cec6e29%3A0xe724ebea7b2320bc!2zTmjDoCBow6F0IENow6lvIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1760025020279!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nhà hát Chèo Việt Nam Location"
                />
              </div>
            </div>

            {/* Cột 3: Keep in Touch */}
            <div className="footer-section footer-links">
              <h3 className="footer-title-keep">Keep in Touch</h3>
              
              <div className="keep-in-touch-content">
                <div className="footer-logo-social">
                  <img src={logo} alt="Nhà Hát Kim Mã" className="logo-image-social" />
                </div>
                
                <div className="social-buttons">
                  <a 
                    href="https://www.facebook.com/Nhahatkimma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="Facebook"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://youtube.com/@phongntnhcvn?si=mx1EgOLGcXAjV6s4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="Youtube"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://nhahatkimma.vn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="Website"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© Bản quyền thuộc về Nhà Hát Sân Khấu Quốc Gia Việt Nam</p>
          </div>
        </div>
      </footer>

     
    </>
  )
}

export default Footer
