import { ExpandMore } from '@material-ui/icons'
import './NewsUpdate.scss'
const NewsUpdate = () => {
  return (
    <div className="news">
      <div className="news-update">
        <div className="header">
          <h2 className="title">Rapat Umum Pemegang Saham Luar Biasa PT Bank KB Bukopin Tbk</h2>
          <span className="time">23 Februari 2021</span>
        </div>
        <div className="image-wrapper">
          <img src="/images/internal-news/RUPS.png" className="image" alt="" />
        </div>
        <div className="body-content">
          <p>
            <b>Jakarta, 22 Desember 2020</b> – Bank Bukopin menggelar Rapat Umum Pemegang Saham Luar Biasa (RUPSLB) pada Selasa 22 Desember 2020 bertempat di The Westin Jakarta Ballroom Hotel, Jl. H.R. Rasuna Said Kav.C 22-A Jakarta Selatan, dalam rangka meminta persetujuan para Pemegang Saham guna menjalankan Aksi Korporasi selanjutnya.
          </p>
          <p>
            Pada pelaksanaan RUPSLB hari ini, terdapat 3 (tiga) agenda yang dibahas oleh Bank Bukopin untuk dimintakan persetujan kepada para pemegang saham, ketiga agenda tersebut adalah, perubahan Anggaran Dasar, perubahan susunan Direksi dan Dewan Komisaris, dan peningkatan Paket Remunerasi bagi anggota Direksi dan Dewan Komisaris.
          </p>
          <p>
            Perubahan nama dan logo Perseroan sebagai salah satu dari proses transformasi Perseroan diyakini dapat merubah dan memperbaiki citra Perseroan dalam skala nasional khususnya di dunia perbankan. Sehingga diharapkan perubahan nama dan logo Perseroan dapat kembali meningkatkan kinerja Perseroan kedepannya.
          </p>
        </div>
      </div>
      <div className="list-news">
        <h3 className="header-list">News Update</h3>
        <div className="row">
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/internal-news/Wokee+.png" className="image" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  Wokee+ KB Bukopin Adopsi Sistem Pembayaran Dengan Sistem Scan Barcode
                </span>
                <span className="time-publised">12 Mei 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/internal-news/Customer Gathering.png" className="image" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  KB Bukopin Gelar Serangkaian Customer Gathering di 6 kota
                </span>
                <span className="time-publised">30 Maret 2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="kb-card">
              <div className="image-wrapper">
                <img src="/images/internal-news/Rebranding.png" className="image" alt="" />
              </div>
              <div className="body">
                <span className="title">
                  Sosialiasi Rebranding KB Bukopin
                </span>
                <span className="time-publised">23 Februari 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="more">
          <span className="text">More</span>
          <ExpandMore />
        </div>
      </div>
    </div>
  )
}

export default NewsUpdate
