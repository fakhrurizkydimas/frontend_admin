import axios from 'axios';
import React,{Component} from 'react';
import { Form } from 'react-bootstrap';
 
class Upload extends Component {    
    state = {
      // Initially, no file is selected
        selectedFile: null,
        files: new FormData()
    };   

    // On file select (from the pop up)
    onFileChange = (event) => {
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
      this.state.files = event.target.files[0]
      // console.log(event)
      console.log(this.state.files)
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
        var fileData = new FormData()
        var test = document.querySelector('#filename')        
        fileData.append('images', test.files[0])

        let config = {
          method: 'post',
          url: 'http://localhost:3031/createnews',
          headers:{
            'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpbWFzIiwiZW1haWwiOiJkaW1hc0BidWtvcGluLmNvbSIsInJvbGVzIjoiYWRtaW4iLCJpYXQiOjE2Mzc0ODMxODZ9.g8lrtDZnRxfv6OaHxC-vS-aXbpN4LBO-Ru3f93Xp64w"
          },
          data: fileData,
        }
        
        axios(config)
        // fetch('http://localhost:3031/logintes', config)
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
      if (this.state.selectedFile) {
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>        
            <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
    
    render() {    
      return (
        <div>
            <h1>
              UPLOAD FILE
            </h1>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input id="filename" type="file" onChange={ this.onFileChange } />
                <button onClick={ this.onFileUpload }>
                  Upload!
                </button>
            </div>
          { this.fileData() }
        </div>
      );
    }
  }
 
export default Upload;