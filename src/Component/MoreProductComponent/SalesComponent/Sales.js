import React from 'react';
import './SalesStyle.css'; // File CSS để tùy chỉnh giao diện card
import SalesData from '../SalesComponent/SalesData';

const Sales = () => {
    return (
        <div className="sales-container">
            <div className="site-animation">
                <div className="family-month">Ưu Đãi</div>
                {/* <div className="see-more">Xem thêm</div> */}
            </div>
            <div className="cards-container">
                {SalesData.map((card, index) => ( // Sửa thành cardsData.map và thêm index để sử dụng làm key
                    <div className="card" key={index}> {/* Sửa key thành index */}
                        <a href={`/sales-detail/${index}`}> {/* Sửa link href */}
                            <img src={card.image} alt={card.title} className="card-image" />
                            <div className="card-content">
                                <h2 className="card-title">{card.title}</h2>
                                <div>
                                    <p className="card-price">{card.price}</p>
                                    <p className="card-discount">{card.discount}</p>
                                </div>
                                {/* Nếu muốn hiển thị mô tả, bạn cần cung cấp dữ liệu mô tả trong cardData */}
                                {/* <p className="card-description">{card.description}</p> */}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sales;