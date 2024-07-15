import React from 'react';
import '../WorkroomComponent/WorkroomStyle.css';
import WorkroomData from './WorkroomData';

const Kitchen = () => {
    return (
        <div className="sales-container">
            <div className="site-animation">
                <div className="family-month">Nội Thất Phòng Làm Việc</div>
                {/* <div className="see-more">Xem thêm</div> */}
            </div>
            <div className="cards-container">
                {WorkroomData.map((card, index) => ( // Sửa thành cardsData.map và thêm index để sử dụng làm key
                    <div className="card" key={index}> {/* Sửa key thành index */}
                        <a href={`/workroom-detail/${index}`}> {/* Sửa link href */}
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

export default Kitchen;