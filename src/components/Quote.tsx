import { useState, useEffect } from 'react'
import './Quote.css'
import quote1 from '../assets/quote(1).jpg'
import quote2 from '../assets/quote(2).jpg'
import quote3 from '../assets/quote(3).jpg'
import quote4 from '../assets/quote(4).jpg'
import quote5 from '../assets/quote(5).jpg'
import quote6 from '../assets/quote(6).jpg'

function Quote() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { id: 1, image: quote1 },
    { id: 2, image: quote2 },
    { id: 3, image: quote3 },
    { id: 4, image: quote4 },
    { id: 5, image: quote5 },
    { id: 6, image: quote6 }
  ]

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="quote">
      <div className="quote-container">
        {/* Background Images Slider */}
        <div className="quote-background">
          <div 
            className="quote-slides" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="quote-slide">
                <img src={slide.image} alt={`Quote background ${slide.id}`} className="quote-image" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="quote-content">
          <div className="quote-text-wrapper">
            <p className="quote-text">
              Nhà hát Sân khấu Quốc gia Việt Nam là nơi sưu tầm, nghiên cứu, bảo tồn gìn giữ và phát triển những giá trị tinh hoa nghệ thuật Chèo - Tuồng - Cải Lương Việt Nam.
            </p>
            <button className="quote-btn">VỀ CHÚNG TÔI</button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="quote-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`quote-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quote

