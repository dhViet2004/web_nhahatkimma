import { useState, useEffect } from 'react'
import './Partners.css'
import logo1 from '../assets/logo(1).jpg'
import logo2 from '../assets/logo(2).jpg'
import logo3 from '../assets/logo(3).jpg'
import logo4 from '../assets/logo(4).png'
import logo5 from '../assets/logo(5).png'
import logo6 from '../assets/logo(6).png'
import logo7 from '../assets/logo(7).png'
import logo8 from '../assets/logo(8).png'
import logo9 from '../assets/logo(9).jpg'

function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Chia logos thành các nhóm, mỗi nhóm 5 logos
  const logoGroups = [
    [
      { id: 1, image: logo1, name: 'Partner 1' },
      { id: 2, image: logo2, name: 'Partner 2' },
      { id: 3, image: logo3, name: 'Partner 3' },
      { id: 4, image: logo4, name: 'Partner 4' },
      { id: 5, image: logo5, name: 'Partner 5' }
    ],
    [
      { id: 6, image: logo6, name: 'Partner 6' },
      { id: 7, image: logo7, name: 'Partner 7' },
      { id: 8, image: logo8, name: 'Partner 8' },
      { id: 9, image: logo9, name: 'Partner 9' },
      { id: 1, image: logo1, name: 'Partner 1' }
    ]
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % logoGroups.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [logoGroups.length])

  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">Đơn vị đồng hành</h2>
        <div className="partners-slider">
          <div 
            className="partners-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {logoGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="partners-group">
                {group.map((logo) => (
                  <div key={logo.id} className="partner-item">
                    <img src={logo.image} alt={logo.name} className="partner-logo" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="partners-dots">
          {logoGroups.map((_, index) => (
            <button
              key={index}
              className={`partners-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

