import './Logins.scss'
import HelpBG from '../../../assets/Background Help New.png'
import { CloseRounded, Visibility, VisibilityOff } from '@material-ui/icons'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Logins = () => {
  const [inputType, setInputType] = useState('password');
  const [loginError, setLoginError] = useState(false)
  const [loginStatus, setLoginStatus] = useState(false)
  const [auth, setAuth] = useState(false);
  const [usernameData, setUsernameData] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const togglePassword = () => {
    inputType === 'text' && setInputType('password')
    inputType === 'password' && setInputType('text')
  }
  
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
  
  const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  
  const onClickLogin = async() => {
    // let username = document.querySelector('#usernameLogin').value
    // let password = document.querySelector('#passwordLogin').value
    let config = {
      url: 'http://localhost:3031/login',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      data: JSON.stringify({'username':username, 'password':password})
    }
    //  axios(config).then(response => {
      // console.log(response)
      // setCookie('dataUser',JSON.stringify(response.data),7)
      // setAuth(!auth)
      // window.location.href='/'
    // }).catch(err =>{
    //   console.log(err)
    // })
    const result = await axios(config).then(response => response).catch(error => null)
    if( result !== null ) {
      setLoginError(false)
      setCookie('dataUser',JSON.stringify(result.data),7)
      setAuth(!auth)
      window.location.href='http://localhost:3000/add'
    } else {
      setLoginError(true)
    }
  }
  
  useEffect(() => {
    let cookie = readCookie('dataUser')
    if ( cookie !== null ) {
      console.log(JSON.parse(cookie).result.username)
      setLoginStatus(true)
      setUsernameData(JSON.parse(cookie).result.username)
    } else {
      setLoginStatus(false)
    }
  })

  return (
    
    <div className="container help-center">
        <div className="helpForm">
          <img className="bg-form" src={HelpBG} alt="" />
          <div className="form">
              {/* <span className="close" style={{marginLeft:'400px'}} >
                <CloseRounded />
              </span> */}
            <div className="header">
              <img src="/logo.png" alt="" className="logoHelp" />
            </div>
            <div className="body">
              <h5 className="title">Welcome to</h5>
              <div className="form-group">
                <span className="label">NIP</span>
                <div className="input-wrapper">
                  <input type="text" placeholder="213901267" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <span className="label">Password</span>
                <div className="input-wrapper">
                  <input id="passwordLogin" type={inputType} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span className="togglePassword" onClick={togglePassword}>
                    {
                      inputType === 'password' ? <VisibilityOff /> : <Visibility />
                    }
                  </span>
                </div>  
                <div className="input-error" style={ loginError === true ? { display: 'block', fontSize:'12px', color:'red', marginLeft: '5px' } : { display: 'none' }}>
                    <span>Login Error. Wrong NIP and/or Password</span>
                </div>
              </div>
              <button onClick={onClickLogin} className="btnSign">Sign in</button>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Logins

