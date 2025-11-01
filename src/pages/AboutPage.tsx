import { useEffect, useRef, useState } from 'react'
import Quote from '../components/Quote'
import './AboutPage.css'
import aboutUsBg from '../assets/ABOUTUS.jpg'

function AboutPage() {
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([])
  const [visibleFunctionItems, setVisibleFunctionItems] = useState<number[]>([])
  const [visibleRegulationItems, setVisibleRegulationItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const functionsRef = useRef<HTMLUListElement>(null)
  const regulationsRef = useRef<HTMLDivElement>(null)
  const timeline = [
    {
      year: '1951 - 1985',
      text:
        'Nhà hát Chèo Việt Nam được thành lập trên cơ sở Đoàn Chèo nhân dân Trung ương. Giai đoạn đặt nền móng cho việc bảo tồn, phát triển nghệ thuật Chèo; sau đổi tên thành Nhà hát Kim Mã.',
    },
    {
      year: '1985',
      text:
        'Đổi tên thành Nhà hát Chèo Kim Mã, tiếp tục củng cố đội ngũ nghệ sĩ và dàn dựng nhiều vở diễn nổi tiếng.',
    },
    {
      year: '1990 - 1995',
      text:
        'Củng cố thương hiệu Chèo Kim Mã trong lòng khán giả Thủ đô; tham gia liên hoan sân khấu toàn quốc, đạt nhiều giải thưởng.',
    },
    {
      year: '2007',
      text:
        'Hoàn thiện cơ sở vật chất, nâng cấp trang thiết bị, mở rộng hợp tác quốc tế trong lĩnh vực sân khấu truyền thống.',
    },
    {
      year: '2009 - 2010',
      text:
        'Đẩy mạnh sáng tác – dàn dựng, xây dựng chương trình nghệ thuật chuyên đề cho du lịch, giáo dục và công chúng trẻ.',
    },
    {
      year: '2010 - nay',
      text:
        'Trở thành đơn vị nòng cốt trong bảo tồn và phát huy nghệ thuật sân khấu truyền thống: Chèo – Tuồng – Cải lương; hướng tới mô hình Nhà hát Sân khấu Truyền thống Quốc gia Việt Nam.',
    },
  ]

  const functions = [
    'Bảo tồn và phát huy giá trị truyền thống',
    'Nơi diễn ra hoạt động sáng tạo và biểu diễn năng động',
    'Đào tạo và phát triển nguồn nhân lực',
  ]

  const regulations = [
    {
      title: 'Trang phục:',
      description: 'Khán giả mặc trang phục lịch sự khi đến thưởng thức nghệ thuật tại Nhà hát.',
    },
    {
      title: 'Thời gian:',
      description: 'Khán giả cần đến trước giờ biểu diễn để ổn định chỗ ngồi',
    },
    {
      title: 'Giữ Im lặng:',
      description: 'Yêu cầu khán giả giữ im lặng tuyệt đối trong suốt quá trình biểu diễn.',
    },
    {
      title: 'Không Quay phim/Chụp ảnh:',
      description:
        'Nghiêm cấm sử dụng điện thoại, máy ảnh, máy quay để ghi âm, ghi hình, chụp ảnh khi chưa được sự đồng ý.',
    },
    {
      title: 'Thực phẩm ngoài:',
      description: 'Không mang thức ăn, đồ uống (kẹo, bánh, kẹo cao su) vào phòng khán giả.',
    },
  ]

  useEffect(() => {
    // Timeline observer
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleTimelineItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b)
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const timelineItems = timelineRef.current?.querySelectorAll('[data-index]')
    timelineItems?.forEach((item) => timelineObserver.observe(item))

    // Functions observer
    const functionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleFunctionItems((prev) => {
              if (!prev.includes(index)) {
                setTimeout(() => {
                  setVisibleFunctionItems((p) => [...p, index + 1])
                }, 300)
                return [...prev, index]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    const functionItems = functionsRef.current?.querySelectorAll('[data-index]')
    functionItems?.forEach((item) => functionsObserver.observe(item))

    // Regulations observer
    const regulationsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleRegulationItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    const regulationItems = regulationsRef.current?.querySelectorAll('[data-index]')
    regulationItems?.forEach((item) => regulationsObserver.observe(item))

    return () => {
      timelineObserver.disconnect()
      functionsObserver.disconnect()
      regulationsObserver.disconnect()
    }
  }, [])

  return (
    <div className="about-page">
      {/* Keep Quote section at top */}
      <Quote />

      {/* Timeline Section */}
      <section className="history">
        {/* Background */}
        <div className="about-bg" style={{ backgroundImage: `url(${aboutUsBg})` }} />
        {/* Overlay */}
        <div className="about-overlay"></div>
        <div className="history-container">
          <h2 className="history-title">LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN</h2>

          <div className="timeline" ref={timelineRef}>
            {timeline.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                  visibleTimelineItems.includes(index) ? 'visible' : ''
                }`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="history-subtitle">CHỨC NĂNG & NHIỆM VỤ</h3>
          <ul className="function-list" ref={functionsRef}>
            {functions.map((f, i) => (
              <li
                key={i}
                data-index={i}
                className={`function-item ${visibleFunctionItems.includes(i) ? 'visible' : ''}`}
              >
                {f}
              </li>
            ))}
          </ul>

          <h3 className="history-subtitle">QUY ĐỊNH CHUNG</h3>
          <div className="regulations-container" ref={regulationsRef}>
            {regulations.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`regulation-item ${index % 2 === 0 ? 'left' : 'right'} ${
                  visibleRegulationItems.includes(index) ? 'visible' : ''
                }`}
              >
                <div className={`regulation-card ${index % 2 === 0 ? 'border-left' : 'border-right'}`}>
                  <h4 className="regulation-title">{item.title}</h4>
                  <p className="regulation-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


