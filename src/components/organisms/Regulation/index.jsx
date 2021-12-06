import DatePicker from 'react-date-picker'
import './Regulation.scss'
import { useState } from 'react'
import { PictureAsPdf } from '@material-ui/icons';
const Regulation = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="form-wrapper">
      <div className="form-search">
        <span className="title">Regulation Search</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Regulation</label>
          <div className="col-sm-6">
            <select className="form-select input-custom">
              <option disabled>Choose Regulation</option>
              <option value="1">Undang-undang</option>
              <option value="2">Peraturan OJK</option>
              <option value="3">Surat Edaran OJK</option>
              <option value="3">Peraturan Bank Indonesia</option>
              <option value="3">Surat Bank Indonesia</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Year</label>
          <div className="col-sm-6">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="decade"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Title" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Number</label>
          <div className="col-sm-6">
            <input type="text" className="form-control input-custom" placeholder="Input Regulation Number" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6 text-end">
            <button className="btn btn-warning">Search</button>
          </div>
        </div>
      </div>
      <div className="result-search">
        <div className="title">Result</div>
        <div className="lists">
          <div className="item-result d-flex">
            <div className="icons-file me-3">
              <PictureAsPdf />
            </div>
            <div className="content">
              <a href="https://www.ojk.go.id/id/regulasi/Documents/Pages/Bank-Umum/POJK%2012%20-%2003%20-2021.pdf" className="file-name" target="_blank" rel="noopener noreferrer">
              POJK 12-03-2021.PDF
              </a>
              <p>
              Peraturan Otoritas Jasa Keuangan Nomor 12/POJK.03/2021 tentang Bank Umum
              </p>
              <div className="d-flex">
                <div className="note">Notes : </div>
                Peraturan Otoritas Jasa Keuangan ini mulai berlaku setelah  3 (tiga) bulan terhitung sejak tanggal diundangkan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regulation
