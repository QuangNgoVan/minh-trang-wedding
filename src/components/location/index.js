import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

import { tiecCuoiLocation, thanhHonLocation } from '../../config';
import Sectiontitle from '../section-title';
// import story1 from '../../images/events/1.jpg';
import story2 from '../../images/events/2.jpg';
import story3 from '../../images/events/3.jpg';

import './style.css';

const Location = () => {
  const { t } = useTranslation();

  return (
    <div id="event" className="service-area section-padding">
      <div className="container">
        <Sectiontitle section={t('WHEN_WHERE')} />
        {/* <div className="service-area-menu">
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <LazyLoad height="100%">
                    <img src={story1} alt="Lễ vu quy" />
                  </LazyLoad>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>Lễ ăn hỏi</h3>
                  <span className="time">8 giờ Thứ 7, ngày 12 tháng 11 năm 2022</span>
                  <span className="location">
                    Thôn Đông Xuyên, Xã Đông Tiến, Huyện Yên Phong, Tỉnh Bắc Ninh
                  </span>
                  <a
                    className="locationMap"
                    href={anHoiLocation}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Xem địa điểm trên Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="Ceremony-wrap">
          <div className="row row-sp">
            <div className="col-lg-7">
              <div className="ceromony-content ceromony-content2">
                <h3>Tiệc cưới</h3>
                <span className="time">16 giờ 30 phút Thứ 7, ngày 12 tháng 11 năm 2022</span>
                <span className="location">
                  Thôn Đông Xuyên, Xã Đông Tiến, Huyện Yên Phong, Tỉnh Bắc Ninh
                </span>
                <a
                  className="locationMap"
                  href={tiecCuoiLocation}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Xem địa điểm trên Google Maps
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ceromony-img">
                <LazyLoad height="100%">
                  <img src={story2} alt="Tiệc cưới" />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
        <div className="service-area-menu">
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <LazyLoad height="100%">
                    <img src={story3} alt="Lễ vu quy" />
                  </LazyLoad>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>Lễ thành hôn</h3>
                  <span className="time">14 giờ Chủ Nhật, ngày 13 tháng 11 năm 2022</span>
                  <span className="location">
                    Thôn Đông Xuyên, Xã Đông Tiến, Huyện Yên Phong, Tỉnh Bắc Ninh
                  </span>
                  <a
                    className="locationMap"
                    href={thanhHonLocation}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Xem địa điểm trên Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
