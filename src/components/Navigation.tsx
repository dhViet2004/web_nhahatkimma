import './Navigation.css'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-top-decoration"></div>
      <div className="nav-content">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              TRANG CHỦ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>VỀ CHÚNG TÔI</Link>
          </li>
          <li className="nav-item">
            <Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>
              CHƯƠNG TRÌNH BIỂU DIỄN
            </Link>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">LIÊN HỆ</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

