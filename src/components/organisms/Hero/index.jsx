import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './Hero.scss';

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed : 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div className="hero-container">
      <Slider {...settings}>
        <div className="hero-banner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <h2 className="title">
                KB Bukopin Gelar Serangkaian Customer Gathering di 6 Kota
              </h2>
              <p className="desc">
                KB Bukopin melakukan serangkaian acara customer gathering marathon selama bulan Maret 2021.
              </p>
              <span className="read-more">
                <Link to="/">Read more...</Link>
              </span>
            </div>
            <div className="col-lg-6">
              <img src="/images/hero-1.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="hero-banner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <h2 className="title">
                Wokee+ KB Bukopin Adopsi Sistem Pembayaran Dengan Sistem Scan Barcode
              </h2>
              <p className="desc">
                KB Bukopin secara resmi memperkenalkan sistem pembayaran berbasis scan barcode (QRIS) pada aplikasi tabungan digital Wokee+.
              </p>
              <span className="read-more">
                <Link to="/">Read more...</Link>
              </span>
            </div>
            <div className="col-lg-6">
              <img src="/images/hero-2.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="hero-banner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <h2 className="title">
                Rapat Umum Pemegang Saham Luar Biasa PT Bank KB Bukopin Tbk
              </h2>
              <p className="desc">
                Bank KB Bukopin menggelar Rapat Umum Pemegang Saham Luar Biasa (RUPSLB) pada Selasa 22 Desember 2020.
              </p>
              <span className="read-more">
                <Link to="/">Read more...</Link>
              </span>
            </div>
            <div className="col-lg-6">
              <img src="/images/hero-3.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
