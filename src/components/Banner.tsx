import { useState, useEffect } from 'react'
import './Banner.css'
import img1 from '../assets/anh-bieu-dien.jpg'
import img2 from '../assets/cheo-anh.jpg'
import img3 from '../assets/Nghe-thuat-tuong-trong-thoi-ky-phong-kien.jpg'
import img4 from '../assets/quan-am-hat-kich.jpg'

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { id: 1, image: img1, alt: 'Biểu diễn nghệ thuật' },
    { id: 2, image: img2, alt: 'Nghệ thuật chèo' },
    { id: 3, image: img3, alt: 'Nghệ thuật tuồng thời kỳ phong kiến' },
    { id: 4, image: img4, alt: 'Quan âm thị kính' }
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="banner">
      <div className="banner-container">
        <div 
          className="banner-slides" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="banner-slide">
              <img src={slide.image} alt={slide.alt} className="banner-image" />
              <div className="banner-overlay"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="banner-arrow banner-arrow-left" onClick={goToPrevious}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="banner-arrow banner-arrow-right" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="banner-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner

