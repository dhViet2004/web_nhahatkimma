import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Programs.css'
import poster1 from '../assets/Poster2.jpg'
import poster2 from '../assets/Poster-cheo2.jpg'
import poster3 from '../assets/Poster-cheo.jpg'
import poster4 from '../assets/poster3.jpg'

interface Program {
  id: number
  title: string
  image: string
  dates: { date: string; time: string }[]
}

function Programs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const programs: Program[] = [
    {
      id: 1,
      title: 'VỞ TUỒNG DẤU THIÊNG HÀ NỘI - CHO NHỮNG GÌ CÒN MÃI',
      image: poster1,
      dates: [
        { date: '20:00 - 23:00, 24/10/2025', time: '' },
        { date: '20:00 - 23:00, 25/10/2025', time: '' }
      ]
    },
    {
      id: 2,
      title: 'VỞ CHÈO TRƯƠNG VIÊN',
      image: poster2,
      dates: [
        { date: '20:00 - 21:00, 01/10/2025', time: '' },
        { date: '20:00 - 21:00, 02/11/2025', time: '' }
      ]
    },
    {
      id: 3,
      title: 'VỞ CHÈO XÚY VÂN GIẢ DẠI ',
      image: poster3,
      dates: [
        { date: '20:00 - 21:00, 22/10/2025', time: '' }
      ]
    },
    {
      id: 4,
      title: 'VỞ CẢI LƯƠNG MẶT TRỜI ĐÊM THẾ KỶ',
      image: poster4,
      dates: [
        { date: '20:00 - 23:00, 20/10/2025', time: '' }
      ]
    },
    {
      id: 5,
      title: 'VỞ TUỒNG - NGHỆ THUẬT TRUYỀN THỐNG VIỆT NAM',
      image: poster1,
      dates: [
        { date: '20:00 - 22:00, 15/11/2025', time: '' }
      ]
    }
  ]

  const itemsPerPage = 4
  const maxIndex = Math.max(0, programs.length - itemsPerPage)

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const totalDots = Math.ceil(programs.length / itemsPerPage)
  const currentDot = Math.floor(currentIndex / itemsPerPage)

  return (
    <section className="programs">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title">Chương trình biểu diễn</h2>
        </div>

        <div className="programs-slider-wrapper">
          <button 
            className="programs-arrow programs-arrow-left" 
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="programs-slider">
            <div 
              className="programs-track"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {programs.map((program) => (
                <div key={program.id} className="program-card">
                  <div className="program-image-wrapper">
                    <img src={program.image} alt={program.title} className="program-image" />
                  </div>
                  <div className="program-content">
                    <h3 className="program-title">{program.title}</h3>
                    <div className="program-dates">
                      {program.dates.map((date, index) => (
                        <div key={index} className="program-date-item">
                          <svg className="calendar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{date.date}</span>
                          <button 
                            className="register-btn"
                            onClick={() => window.open('https://www.facebook.com/Nhahatkimma/events/?id=61573061699178&sk=events', '_blank')}
                          >
                            ĐĂNG KÝ
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="programs-arrow programs-arrow-right" 
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="programs-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              className={`programs-dot ${currentDot === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
            />
          ))}
        </div>

        <div className="programs-footer">
          <Link to="/programs" className="view-all-btn">Xem tất cả →</Link>
        </div>
      </div>
    </section>
  )
}

export default Programs

