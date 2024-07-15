import React from 'react';
import '../FooterComponent/FooterStyle.css';
import bocongthuong from '../../images/bo-cong-thuong.png';
import dcma from '../../images/dcma_moho.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="col-md-3">
                        <h3>NỘI THẤT MOHO</h3>
                        <p>
                            Nội Thất MOHO là thương hiệu đến từ Savimex với gần 40 năm lành
                            nghiệm trong việc sản xuất và xuất khẩu nội thất đạt chuẩn quốc tế.
                        </p>
                        <div className="moho-certification">
                            <a href="http://online.gov.vn/(X(1)S(x0oiui2u3epcjwy4z2xlko03))/Home/WebDetails/60567?AspxAutoDetectCookieSupport=1"><img src={bocongthuong} alt="Bộ Công Thương" /></a>
                            <a href="https://www.dmca.com/Protection/Status.aspx?ID=c870a589-fd82-4c14-9e41-c3891ec42fb5&refurl=https://moho.com.vn/"><img src={dcma} alt="DMCA" /></a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>DỊCH VỤ</h3>
                        <ul className="footer-list">
                            <li>
                                <a href="/sales-policy">Chính sách bán hàng</a>
                            </li>
                            <li>
                                <a href="/delivery-policy">Chính sách giao hàng & lắp đặt</a>
                            </li>
                            <li>
                                <a href="/return-policy">Chính sách đổi trả</a>
                            </li>
                            <li>
                                <a href="/warranty-policy">Chính sách bảo hành & bảo trì</a>
                            </li>
                            <li>
                                <a href="/MOHOmie">Khách Hàng Thân Thiết - MOHOmie</a>
                            </li>
                            <li>
                                <a href="/sales-partnet-policy">Chính Sách Đối Tác Bán Hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <ul className="footer-list">
                            <li>
                                <i class="fa-solid fa-location-dot"></i> Showroom: 162 HT17, P. Hiệp Thành, Q. 12, TP. HCM (Nằm trong khu viên công ty SAVIMEX phía sau nhà xe buýt Hiệp Thành) | Hotline: 0971 141 140
                            </li>
                            <li>
                                <i class="fa-solid fa-location-dot"></i> Experience Store 1: S05.03-S18 phân khu The Rainbow | Vinhomes Grand Park, TP. Thủ Đức | Hotline: 0931 880 424
                            </li>
                            <li>
                                <i class="fa-solid fa-location-dot"></i> Experience Store 2: S3.00-Sh 15 phân khu Sapphire | Vinhomes Smart City, Hà Nội | Hotline: 0909 665 728
                            </li>
                            <li>
                                <i class="fa-solid fa-location-dot"></i> Experience Store 3: S2.09-Sh 15 phân khu Sapphire | Vinhomes Occan Park, Hà Nội | Hotline: 0938 108 772
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i> 097 114 1140 (Hotline/Zalo)<br />
                                <br></br>
                                <i class="fa-solid fa-phone"></i> 0902 415 359 (Đội Giao Hàng)
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i> <a href="mailto:cskh@moho.com.vn">cskh@moho.com.vn</a>
                            </li>
                            <li>
                                Công Ty Cổ Phần Hợp Tác Kinh Tế Và Xuất Nhập Khẩu Savimex - STK: 0071001303367 - Vietcombank CN HCM
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>FANPAGE</h3>
                        <div className="footer-fanpage">
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmohofurniture%2F%3Fref%3Dem"
                                title="Facebook Page of MOHO Furniture" // Thêm title vào đây
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 Nội Thất MOHO.</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/mohofurniture"><span><i class="fa-brands fa-facebook"></i></span></a>
                <a href="https://www.youtube.com/channel/UChrgCVzBmKda-7Q8MYFnSeg/featured"><span><i class="fa-brands fa-youtube"></i></span></a>
                <a href="https://www.instagram.com/mohofurniture/"><span><i class="fa-brands fa-instagram"></i></span></a>
                <a href="https://www.tiktok.com/@mohofurniture"><span><i class="fa-brands fa-tiktok"></i></span></a>
            </div>
            <div className="link">
                <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x317529a12d82e2df:0x569afdd3c76bcbbc?source=g.page.share">Chỉ đường đến showroom trên Google Maps</a>
            </div>
        </div>
    );
};

export default Footer;
