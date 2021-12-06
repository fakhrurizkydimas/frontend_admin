import DatePicker from 'react-date-picker'
import { useState } from 'react'
import { PictureAsPdf } from '@material-ui/icons';
const Report = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="form-wrapper">
      <div className="form-search">
        <span className="title">Report Search</span>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Report</label>
          <div className="col-sm-6">
            <select className="form-select input-custom">
              <option disabled>Choose Report</option>
              <option value="1">Undang-undang</option>
              <option value="2">Peraturan OJK</option>
              <option value="3">Surat Edaran OJK</option>
              <option value="3">Peraturan Bank Indonesia</option>
              <option value="3">Surat Bank Indonesia</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Periode</label>
          <div className="col-sm-6">
            <DatePicker
              className="custom-input-date"
              onChange={onChange}
              value={value}
              maxDetail="year"
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
              <a href="http://" className="file-name" target="_blank" rel="noopener noreferrer">
              SAMPEL.PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
