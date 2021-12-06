import DatePicker from "react-date-picker";
import { useState } from "react";
import { PictureAsPdf } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import axios from 'axios'
import "./Add.scss";

const readCookie = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

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
      url: "http://localhost:3031/news/edit", // TODO: update with correct API
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ JSON.parse(readCookie('dataUser')).result.token }`
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
        url: `http://localhost:3031/viewnews/search?query=${ e.target.value }`, // TODO: update with correct API
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
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
          <input type="text" onKeyDown={ SearchData } placeholder="Search data by title here.." style={{ width: '100%', padding: '10px 20px', borderRadius: '10px' }} />
          <div style={{ height: '200px', overflowY: 'scroll', marginBottom: '25px', marginTop: '25px', boxShadow: '3px 3px 5px rgba(25,25,25,0.5)', padding: '1% 2.5%' }}>
            {
              dataSearch ?
                dataSearch.map((data, i) => {
                  return(
                    <div key={ i }>
                      <hr />
                      <div><b>title : { data.title }</b></div>
                      <div style={{ fontSize: '20px' }}><b>id : { data._id }</b></div>
                      <div>excerpt : { data.excerpt }</div>
                      <hr />
                    </div>
                  )
                })
              : <div style={{ padding: '2.5% 10px' }}>list of search data</div>
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
              <input id="fileImages" type="file" accept="image/*" className="form-control input-custom" placeholder="Images" {...register("images")} name="images" />
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
