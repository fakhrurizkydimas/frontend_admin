import DatePicker from "react-date-picker";
import { useState } from "react";
import { PictureAsPdf } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import axios from 'axios'
import "./Add.scss";

const Edit = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [dataSearch, setDataSearch] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let FileImages = document.querySelector('#fileImages')
    let formData = new FormData()
    formData.append('images', FileImages.files[0])
    formData.append('id', document.querySelector("#data-id").value)
    formData.append('title', document.querySelector("#data-title").value)
    formData.append('excerpt', document.querySelector('#data-excerpt').value)
    formData.append('description', document.querySelector('#data-description').value)
    formData.append('date', dateValue)
    let config = {
      url: "http://localhost:3031/viewnews", // TODO: update with correct API
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData
    };
    
    axios(config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SearchData = (e) => {
    if ( e.key === 'Enter' ) {
      let config = {
        url: "http://localhost:3031/view/username", // TODO: update with correct API
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: { 'title': e.target.value }
      };
      
      axios(config)
      .then((response) => {
        setDataSearch(response.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div className="form-wrapper">
      <div className="form-search">
        <span className="title"></span>

        <div>
          <input type="text" onKeyDown={ SearchData } />
          <div>
            {
              dataSearch ?
                dataSearch.map((data, i) => {
                  return(
                    <div>
                      <hr />
                      <div>title : { data.title }</div>
                      <div>id : { data._id }</div>
                      <div>excerpt : { data.excerpt }</div>
                      <hr />
                    </div>
                  )
                })
              : null
            }
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Category</label>
            <div className="col-sm-6">
              <select className="form-select input-custom" {...register("category")} name="category">
                <option disabled>Select Category</option>
                <option value="1">News</option>
                <option value="2">IT Group</option>
                <option value="3">Infographic</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">id</label>
            <div className="col-sm-6">
              <input type="text" id="data-id" className="form-control input-custom" placeholder="id" {...register("id")} name="id" />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-6">
              <input type="text" id="data-title" className="form-control input-custom" placeholder="Title" {...register("title")} name="title" />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Excerpt</label>
            <div className="col-sm-6">
              <input type="text" id="data-excerpt" className="form-control input-custom" placeholder="Excerpt" {...register("excerpt")} name="excerpt" />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-6">
              <textarea className="message" id="data-description" placeholder="type your message" rows={4} {...register("description")} name="description"></textarea>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Images</label>
            <div className="col-sm-6">
              <input id="fileImages" type="file" accept="images/*" className="form-control input-custom" placeholder="Images" {...register("images")} name="images" />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-6">
              <DatePicker id="data-date" className="custom-input-date" onChange={setDateValue} value={dateValue} maxDetail="month" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 offset-sm-2">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
