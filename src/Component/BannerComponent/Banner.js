import React from 'react';
import '../BannerComponent/BannerStyle.css';
const Banner = () => {
    return (
        <div className="wrapper-home-banner-img">
            <div className="container site-animation">
                <div className="wrapper-heading-home">
                    <h2>
                        Không Gian Sống Với MOHO
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-sm-4 padding-img">
                        <div className="row">
                            <div className="fade-out col-md-12 col-xs-6 col-sm-12 no_pdr fade-box">
                                <a href="https://moho.com.vn/collections/phong-khach" className="fadeoutcenter">
                                    <img width="360" height="357" srcSet="//theme.hstatic.net/200000065946/1001187274/14/imgaView1_large.jpg?v=317 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView1.jpg?v=317" alt="nội thất phòng khách" />
                                </a>
                            </div>
                            <div className="col-md-12 col-xs-6 col-sm-12 no_pdr padding-img fade-box">
                                <div className="fade-out">
                                    <a href="https://moho.com.vn/collections/phong-ngu" className="fadeoutcenter">
                                        <img width="360" height="357" srcSet="//theme.hstatic.net/200000065946/1001187274/14/imgaView2_large.jpg?v=317 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView2.jpg?v=317" alt="nội thất phòng ngủ" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-8 padding-img fade-box">
                        <div className="fade-out">
                            <a href="https://moho.com.vn/collections/bo-suu-tap-moi" className="fadeoutcenter">
                                <img width="750" height="430" srcSet="//theme.hstatic.net/200000065946/1001187274/14/imgaView3_large.jpg?v=317 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView3.jpg?v=317" alt="Trọn bộ nội thất" />
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-6 col-sm-6 padding-img pd_lr fade-box">
                                <div className="fade-out">
                                    <a href="https://moho.com.vn/collections/phong-an" className="fadeoutcenter">
                                        <img width="400" height="314" srcSet="//theme.hstatic.net/200000065946/1001187274/14/imgaView4_large.jpg?v=317 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView4.jpg?v=317" alt="nội thất phòng ăn" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-6 col-sm-6 padding-img pd_lr fade-box">
                                <div className="fade-out">
                                    <a href="https://moho.com.vn/pages/kitchen" className="fadeoutcenter">
                                        <img width="400" height="314" srcSet="//theme.hstatic.net/200000065946/1001187274/14/imgaView5_large.jpg?v=317 412w, //theme.hstatic.net/200000065946/1001187274/14/imgaView5.jpg?v=317" alt="tủ bếp moho" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
