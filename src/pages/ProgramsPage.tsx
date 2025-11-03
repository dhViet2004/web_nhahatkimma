import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProgramsPage.css'
import Partners from '../components/Partners'
import poster1 from '../assets/VO-CHEO-CHUYEN-CONG-CHUA-TRIEU-TRAN.jpg'
import poster2 from '../assets/VO-TUONG-CON-MAI-VOI-NON-SONG.jpg'
import poster3 from '../assets/VO-CAI-LUONG-BUC-CHAN-DUNG-HUYEN-THOAI.jpg'
import poster4 from '../assets/VO-CHEO-MAU-NGU-TROI-NAM.jpg'
import poster5 from '../assets/VO-CAI-LUONG-CAU-THO-YEN-NGUA.jpg'
import poster6 from '../assets/VO-CHEO-DEM-DIEN-DAT-BIET.jpg'
import poster7 from '../assets/VO-CAI-LUONG-BUC-CHAN-DUNG-HUYEN-THOAI.jpg'
import poster8 from '../assets/LUU-KIM-DINH.jpg'
import poster9 from '../assets/nam-xuong.jpg'
import poster10 from '../assets/dai-than-thang-long.jpg'
import poster11 from '../assets/doi-co-luu.jpg'
import poster12 from '../assets/nghieu-so-oc-hen.jpg'
function ProgramsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const programs = [
    {
      id: 1,
      image: poster4,
      title: 'VỞ CHÈO: MẪU NGỰ TRỜI NAM ',
      description: `Một kiệt tác nghệ thuật dân gian – Đậm chất linh thiêng, ngập tràn tự hào dân tộc! Vở chèo "Mẫu Ngự Trời Nam" tái hiện huyền thoại về Thánh Mẫu – người kết nối tâm thức dân tộc, bảo hộ non sông, mang lại bình an và thịnh vượng cho muôn dân. Sự kết hợp hài hòa giữa nghệ thuật chèo truyền thống và dàn dựng sân khấu hiện đại sẽ đưa khán giả vào không gian huyền ảo, trang nghiêm mà giàu cảm xúc. Dàn nghệ sĩ tài năng của Nhà hát Sân khấu Truyền thống Quốc gia Việt Nam biểu diễn! Sân khấu hoành tráng, ánh sáng lung linh, gợi không gian tâm linh huyền nhiệm.`,
      time: '20h ngày 20 tháng 9 năm 2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Hòa nhạc'
    },
    {
      id: 2,
      image: poster1,
      title: 'VỞ CHÈO: CHUYỆN CÔNG CHÚA TRIỀU TRẦN',
      description: `Đây là vở Chèo mang tầm vóc và quy mô lớn, bởi tính học thuật và triết lý nhân sinh. Với cốt truyện hấp dẫn, nhân văn và đậm chất trữ tình, đặc biệt là những làn điệu Chèo mượt mà, đằm thắm, hứa hẹn sẽ mang đến cho quý vị khán giả một đêm thưởng thức nghệ thuật thật bổ ích và lý thú. Trân trọng kính mời quý vị khán giả đến với vở diễn: "Chuyện Công Chúa Triều Trần" của Nhà hát Chèo Việt Nam`,
      time: '20h ngày 23 tháng 7 năm 2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Hòa tấu'
    },
    {
      id: 3,
      image: poster2,
      title: 'VỞ TUỒNG: CÒN MÃI VỚI NON SÔNG',
      description: 'Mô tả: Đây là một vở tuồng hiện đại hoặc mang đề tài lịch sử Việt Nam. Vở diễn có thể tái hiện lại một giai đoạn lịch sử hào hùng, một câu chuyện về lòng trung quân ái quốc hoặc sự hy sinh vì đại nghĩa của một nhân vật lịch sử hoặc huyền thoại. Tiêu đề "Còn mãi với non Sống" gợi lên sự bất tử của tinh thần dân tộc và những di sản văn hóa, tinh thần mà người anh hùng để lại. Mặc dù thông tin chi tiết về cốt truyện không phổ biến, vở diễn được dự kiến công diễn miễn phí, thể hiện nỗ lực của Nhà hát trong việc bảo tồn và đưa nghệ thuật Tuồng đến gần hơn với công chúng, đặc biệt là thế hệ trẻ và du khách quốc tế.',
      time: '19h30 ngày 26/7/2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Live Concert'
    },
    {
      id: 4,
      image: poster3,
      title: 'VỞ CẢI LƯƠNG: BỨC CHÂN DUNG HUYỀN THOẠI ',
      description: 'Đây là một vở cải lương mang đề tài lịch sử cách mạng, được dàn dựng đặc biệt nhân các dịp kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh (19/5). Vở diễn thường tập trung khai thác những khía cạnh ít biết về cuộc đời Bác, đặc biệt là những năm tháng bôn ba tìm đường cứu nước hoặc những tình cảm gần gũi của Bác với người dân và đồng bào. Tác phẩm nhằm mục đích ca ngợi cuộc đời và sự nghiệp vĩ đại của Người, đồng thời truyền tải thông điệp về lòng yêu nước, tinh thần hy sinh và sự giản dị, gần gũi của vị Cha già dân tộc. Vở diễn đòi hỏi sự kết hợp giữa tính nghệ thuật của Cải lương và yếu tố lịch sử, giáo dục, tạo nên một tác phẩm vừa trang trọng, vừa xúc động.',
      time: '19h30 ngày 18/5/2025',
      location: 'Nhà Hát Kim Mã, Hà Nội',
      category: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội'
    },
    // Bổ sung thêm vở diễn để đủ 16 mục (4 trang x 4 mục)
    {
      id: 5,
      image: poster5,
      title: 'VỞ CẢI LƯƠNG: CÂU THƠ YÊN NGỰA',
      description: `Thuộc thể loại Cải lương tuồng cổ (hay Cải lương Hồ quảng), vở diễn Câu Thơ Yên Ngựa hấp dẫn khán giả bằng sự kết hợp giữa ca diễn Cải lương truyền thống và các màn vũ đạo, võ thuật mang tính ước lệ cao. Vở diễn thường lấy tích từ lịch sử hoặc dã sử Trung Hoa hoặc sử Việt được hư cấu mạnh mẽ. Cốt truyện thường xoay quanh những mâu thuẫn triều đình, ân oán giang hồ, hay những mối tình ly biệt. Tên vở gợi lên hình ảnh vị tướng dù bận việc binh đao vẫn nặng lòng với thi ca, tình cảm, tạo nên sự lãng mạn bi tráng.`,
      time: '19h30 ngày 19/4/2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Hòa nhạc'
    },
    {
      id: 6,
      image: poster6,
      title: 'VỞ CHÈO: ĐÊM DIỄN ĐẶC BIỆT – KỶ NIỆM 100 NĂM NGÀY SINH NGND HOÀNG KIỀU – VỞ CHÈO “SÚY VÂN” - 09/08',
      description: `Xúy Vân – kiệt tác tinh hoa của nghệ thuật Chèo sẽ trở lại trong đêm diễn đặc biệt kỷ niệm 100 năm ngày sinh NGND. Hoàng Kiều. 

Chương trình là lời tri ân sâu sắc mà Nhà hát gửi tới người nghệ sĩ tài hoa đã dành trọn tâm huyết để nâng tầm giá trị âm nhạc trong nghệ thuật Chèo.

Một trong những dấu ấn góp phần đưa Xúy Vân trở thành một tác phẩm kinh điển của sân khấu Chèo Việt Nam chính là âm nhạc do Nhạc sĩ, NGND. Hoàng Kiều sáng tác. Vở diễn Xúy Vân sẽ trở lại như một bản nhạc tuyệt đẹp kết nối giữa truyền thống và đương đại, giữa ngôn ngữ sân khấu và tâm hồn của những người yêu nghệ thuật truyền thống.`,
      time: '20h ngày 09 tháng 08 năm 2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Hòa tấu'
    },
    {
      id: 7,
      image: poster7,
      title: 'VỞ CẢI LƯƠNG: BỨC CHÂN DUNG HUYỀN THOẠI ',
      description: `Đây là một vở cải lương mang đề tài lịch sử cách mạng, được dàn dựng đặc biệt nhân các dịp kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh (19/5). Vở diễn thường tập trung khai thác những khía cạnh ít biết về cuộc đời Bác, đặc biệt là những năm tháng bôn ba tìm đường cứu nước hoặc những tình cảm gần gũi của Bác với người dân và đồng bào. Tác phẩm nhằm mục đích ca ngợi cuộc đời và sự nghiệp vĩ đại của Người, đồng thời truyền tải thông điệp về lòng yêu nước, tinh thần hy sinh và sự giản dị, gần gũi của vị Cha già dân tộc. Vở diễn đòi hỏi sự kết hợp giữa tính nghệ thuật của Cải lương và yếu tố lịch sử, giáo dục, tạo nên một tác phẩm vừa trang trọng, vừa xúc động.`,
      time: '19h30 ngày 18/5/2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Live Concert'
    },
    {
      id: 8,
      image: poster8,
      title: 'VỞ TUỒNG -  LƯU KIM ĐÍNH GIẢI GIÁ THÀNH THỌ CHÂU',
      description: `Vở tuồng cổ này thuộc thể loại Tuồng kiếm hiệp hay Tuồng tích Tàu, tập trung vào cuộc đời và sự nghiệp của nữ tướng Lưu Kim Đính. Đây là một vở diễn kinh điển với nhiều màn võ thuật, múa hát ước lệ đặc sắc. Nội dung thường xoay quanh những mâu thuẫn phức tạp trong gia đình và triều đình, nơi Lưu Kim Đính phải thể hiện tài năng quân sự và sự khéo léo trong đối nhân xử thế để giải quyết các vấn đề liên quan đến tình cảm cá nhân và vận mệnh quốc gia. Đặc biệt, phân cảnh "Giải giá Thành Thọ Châu" là một trong những đoạn cao trào, nơi nữ tướng thể hiện sự dũng mãnh, trí tuệ để cứu chồng (Thành Thọ Châu) khỏi hiểm nguy hoặc oan khuất. Vở diễn không chỉ hấp dẫn bởi trang phục lộng lẫy và kỹ thuật hát bội điêu luyện mà còn truyền tải thông điệp về sự kiên cường, lòng trung trinh và tinh thần "giải quyết việc nhà, lo việc nước" của người phụ nữ trong xã hội xưa.`,
      time: '19h30 ngày 07/02/2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Nhạc kịch'
    },
    {
      id: 9,
      image: poster9,
      title: 'VỞ TUỒNG - THIẾU PHỤ NAM XƯƠNG',
      description: `Vở Tuồng được chuyển thể từ truyện cổ tích nổi tiếng Chuyện người con gái Nam Xương của Nguyễn Dữ. Nội dung kể về nàng Vũ Nương, người vợ hiền thục, nết na của Trương Sinh. Vì chồng đi lính, nàng ở nhà nuôi con, lo việc gia đình chu toàn. Do nhớ thương chồng, nàng chỉ bóng mình trên tường mà nói dối con đó là cha nó. Khi Trương Sinh trở về, nghe con thơ nói: "Ông ấy đêm nào cũng đến", chàng hiểu lầm vợ thất tiết nên đã nghi ngờ và đuổi nàng đi. Quá oan ức và đau khổ, Vũ Nương đã gieo mình xuống sông tự vẫn để minh oan. Vở diễn tập trung vào bi kịch cá nhân của Vũ Nương, lên án sự đa nghi vô cớ và những định kiến xã hội thời phong kiến. Đây là một tác phẩm Tuồng đề tài dân gian, không chỉ lôi cuốn bằng kỹ thuật diễn xuất tinh tế mà còn chạm đến trái tim khán giả bằng câu chuyện thương tâm về phẩm giá và số phận của người phụ nữ Việt Nam.`,
      time: '06/2024',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Hòa nhạc'
    },
    {
      id: 10,
      image: poster10,
      title: 'VỞ CẢI LƯƠNG ĐẠI THẦN THĂNG LONG',
      description: `Vở Cải lương mang đậm tính lịch sử, thường được Nhà hát Cải lương Hà Nội dàn dựng. Tác phẩm lấy bối cảnh Thăng Long xưa, tập trung vào cuộc đời và sự nghiệp của một vị đại thần có công với triều đình và đất nước. Vở diễn không chỉ tái hiện những sự kiện lịch sử quan trọng mà còn khai thác nội tâm phức tạp của nhân vật, người phải đứng giữa lợi ích quốc gia, trách nhiệm với vua, và tình cảm gia đình. Đại Thần Thăng Long là một tác phẩm mang âm hưởng hào hùng, ca ngợi lòng trung thành, sự chính trực và trí tuệ của người Việt xưa trong việc xây dựng và bảo vệ kinh đô.`,
      time: '8/3/2025',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Hòa tấu'
    },
    {
      id: 11,
      image: poster11,
      title: 'VỞ CẢI LƯƠNG ĐỜI CÔ LỰU',
      description: `Mô tả: Kiệt tác của soạn giả Trần Hữu Trang, khắc họa số phận bi thảm, éo le của cô Lựu – nạn nhân tiêu biểu của xã hội phong kiến, thực dân Nam Kỳ những năm đầu thế kỷ 20. Cô Lựu, vợ của tá điền Hai Thành, vì có nhan sắc mà bị Hội đồng Thăng tham lam muốn chiếm đoạt. Hội đồng Thăng lập mưu bỏ truyền đơn và súng lục vào nhà, khiến Hai Thành bị kết án tù 20 năm và bị đày ra Côn Đảo. Lựu bị ép làm vợ Hội đồng Thăng khi đang mang thai đứa con của Hai Thành. Sau khi sinh, đứa con trai bị Hội đồng Thăng bí mật đem cho cô nhi viện và nói dối là đã chết. Lựu sau đó sinh con gái với Hội đồng Thăng tên là Kim Anh. Sau 19 năm vượt ngục, Hai Thành trở về, hiểu lầm Lựu đã phụ bạc mình, anh viết thư đòi tiền để lo cho con trai (Minh Luân, đứa con bị bỏ rơi nay được người khác nuôi dưỡng). Vở diễn đẩy cao trào cảm xúc khi cô Lựu đứng giữa bi kịch tình yêu và trách nhiệm, khi cô Kim Anh phải hy sinh bán tư trang để giúp mẹ. Vở diễn là bản hùng ca bi tráng về lòng yêu thương, sự hy sinh của người phụ nữ, tố cáo tội ác của cường quyền và khẳng định giá trị nhân đạo sâu sắc.`,
      time: '7/2/2025 (Mùng 10 Tết)',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Live Concert'
    },
    {
      id: 12,
      image: poster12,
      title: 'VỞ TUỒNG NGHÊU, SÒ, ỐC, HẾN',
      description: `Là vở tuồng hài trào phúng, dân gian rất được yêu thích, mang tính châm biếm sâu sắc. Vở diễn kể về những rắc rối, mâu thuẫn nảy sinh từ một vụ kiện tụng giữa các nhân vật mang tên các loài hải sản: Nghêu, Sò, Ốc, Hến. Sự kiện này phơi bày bộ mặt tham lam, thối nát, và hủ lậu của tầng lớp quan lại địa phương, điển hình là nhân vật Quan Huyện. Xuyên suốt vở diễn, khán giả được chứng kiến những màn đối đáp dí dỏm, hài hước nhưng sâu cay, lật tẩy thói nhũng nhiễu, đục khoét của quan tham. Nghêu, Sò, Ốc, Hến là một tác phẩm tuồng cổ có giá trị hiện thực cao, thể hiện sự đấu tranh và khát vọng công lý của người dân lao động thông qua tiếng cười châm biếm, đồng thời khẳng định sức sống của nghệ thuật Tuồng trong việc phản ánh những vấn đề xã hội muôn thuở.`,
      time: '25/9/2023',
      location: 'NHÀ HÁT KIM MÃ - 71 Kim Mã - Hà Nội',
      category: 'Nhạc kịch'
    },
    
  ]

  // Phân trang: 4 mục mỗi trang
  const PAGE_SIZE = 4
  const totalPages = Math.ceil(programs.length / PAGE_SIZE)
  const start = (currentPage - 1) * PAGE_SIZE
  const paginatedPrograms = programs.slice(start, start + PAGE_SIZE)

  return (
    <div className="programs-page">
      <div className="programs-page-container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link to="/" className="breadcrumb-link">Trang chủ</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Chương trình biểu diễn</span>
        </nav>

        {/* Tiêu đề */}
        <h1 className="page-title">Chương trình biểu diễn</h1>

        {/* Đường kẻ phân cách */}
        <hr className="divider" />

        {/* Danh sách sự kiện */}
        <div className="event-list">
          {paginatedPrograms.map((program, index) => (
            <div key={program.id} className={`event-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="event-top-line"></div>
              <div className="event-image">
                <img src={program.image} alt={program.title} />
              </div>
              <div className="event-content">
                <h3 className="event-title">{program.title}</h3>
                <p className="event-description">{program.description}</p>
                <div className="event-footer">
                  <div className="event-info-group">
                    <div className="event-time">
                      <svg className="calendar-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
                      </svg>
                      <span>{program.time}</span>
                    </div>
                    <div className="event-location">
                      <svg className="location-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>{program.location}</span>
                    </div>
                  </div>
                  <button 
                    className="book-ticket-btn"
                    onClick={() => window.open('https://www.facebook.com/Nhahatkimma', '_blank')}
                  >
                    Đặt vé
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phân trang */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-link ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Đường kẻ phân cách */}
        <hr className="divider" />
      </div>

      {/* Đơn vị đồng hành */}
      <Partners />
    </div>
  )
}

export default ProgramsPage

