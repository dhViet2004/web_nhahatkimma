import './Header.css'

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: object) => void;
    dataLayer?: unknown[];
  }
}

function Header() {
  return (
    <header className="header">
      <div className="header-top-decoration"></div>
      <div className="header-content">
        <div className="header-left">
          <div className="contact-item">
            <span className="label">TELEPHONE</span>
            <span className="value">+84 123456789</span>
          </div>
          <div className="contact-item">
            <span className="label">EMAIL</span>
            <span className="value">onderaoeberg@gmail.com</span>
          </div>
        </div>

        <div className="header-center">
          <h1 className="theater-name">NHÀ HÁT SÂN KHẤU QUỐC GIA VIỆT NAM</h1>
        </div>

        <div className="header-right">
          <button
            className="login-btn"
            onClick={() => {
              const url = 'https://www.facebook.com/Nhahatkimma/events/?id=61573061699178&sk=events';
              if (window.gtag) {
                window.gtag('event', 'dang_ky_facebook', {
                  'button_location': 'header_right',
                  'link_url': url
                });
              }
              window.open(url, '_blank');
            }}
          >
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

