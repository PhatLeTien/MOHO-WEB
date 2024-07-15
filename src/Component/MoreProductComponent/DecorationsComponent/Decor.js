import React from "react";
import '../../MoreProductComponent/DecorationsComponent/DecorStyle.css';

const Decor = () => {
    return (
        <main className="mainContent-theme">
            <div id="404" className="pageNot text-center wrap-flex-align">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="content-pagenot">
                        <h1>Không tìm thấy trang</h1>
                        <p className="subtext">Xin lỗi, chúng tôi không tìm thấy trang này</p>
                        <a href="https://moho.com.vn" className="button dark">Trở về trang chủ</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Decor