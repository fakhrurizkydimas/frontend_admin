import { Close, ExpandLess, Visibility, VisibilityOff } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios'
// import { Link,useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import { ItMenu, NewsMenu } from '../../molecules';
import './Navbar.scss';

const Navbar = () => {
  const [openIt, setOpenIt] = useState(false)
  const [openNews, setOpenNews] = useState(false)
  const [auth, setAuth] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [loginStatus, setLoginStatus] = useState(false)
  const [usernameData, setUsernameData] = useState(null)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const navigate = useNavigate()
  const classMenusIt = cx({
    "menu isParent": true,
    "collapse": !openIt
  })
  const classMenusNews = cx({
    "menu isParent": true,
    "collapse": !openNews
  })

  const toggleMenu = (type) => {
    if (type === 'it') {
      setOpenIt(!openIt)
      setOpenNews(false)
    }
    if (type === 'news') {
      setOpenIt(false)
      setOpenNews(!openNews)
    }
  }

  const togglePassword = () => {
    inputType === 'text' && setInputType('password')
    inputType === 'password' && setInputType('text')
  }

  // const login=()=>{
  //   navigate('/news/update')
  //   setAuth(!auth)
  //   setIsLoggedIn(true)
  // }

  // useEffect(() => {
  //   !isLoggedIn && navigate('/home')
  //   isLoggedIn && navigate('/news/update')
  // }, [])

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

  const OnClickLogin = ()=> {
    let username = document.querySelector('#usernameLogin').value
    let password = document.querySelector('#passwordLogin').value
    let config = {
      url: 'http://localhost:3031/login',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      data: JSON.stringify({'username':username, 'password':password})
    }
    axios(config).then(response => {
      console.log(response)
      setCookie('dataUser',JSON.stringify(response.data),7)
      setAuth(!auth)
      window.location.href='/'
    }).catch(err =>{
      console.log(err)
    })
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
    <>
      <div className="_navbar">
        <div className="left">
          <Link to="/home">
            <img className="logo" src="./logo.png" alt="" />
          </Link>
        </div>
        <div className="center">
          <div className="search">
            <input type="text" className="inputSearch" placeholder="Search..." />
            <SearchIcon />
          </div>
        </div>
        <div className="right">
          <div className="menus">
            <div className={classMenusNews}>
              <span className="parent-link" onClick={() => toggleMenu('news')}>
                News
                {
                  openNews ? <ExpandLess /> : <ExpandMoreIcon />
                }
              </span>
              <NewsMenu />
            </div>
          </div>
          <div className="menus">
            <div className={classMenusIt}>
              <span className="parent-link" onClick={() => toggleMenu('it')}>
                IT Group
                {
                  openIt ? <ExpandLess /> : <ExpandMoreIcon />
                }
              </span>
              <ItMenu />
            </div>
          </div>
          <div className="menus">
            <Link to="/" className="menu">
              Infographic
            </Link>
          </div>
          {/* <div className="menus">
            <button className="auth" onClick={() => setAuth(!auth)}>
              Login
            </button>
          </div> */}
          <div className="menus">
            <div style={ loginStatus ? { display: 'block', marginLeft: '10px', fontSize: '18px' } : { display: 'none' }}>
              { usernameData }
            </div>
            <button 
              className="auth"
              onClick={() => setAuth(!auth)}
              style={ loginStatus ? { display: 'none' } : { display: 'block' }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      {
        auth && <div className="auth-container">
          <div className="authModal">
            <span className="closeAuth" onClick={() => setAuth(!auth)}>
              <Close />
            </span>
            <div className="title">
              <div className="text-welcome">Welcome to</div>
              <img src="./logo.png" alt="" className="img-auth" />
            </div>
            <div className="form">
              <div className="form-group">
                <span className="label">NIP</span>
                <div className="input-wrapper">
                  <input id="usernameLogin" type="text" placeholder="213456789" />
                </div>
              </div>
              <div className="form-group">
                <span className="label">Password</span>
                <div className="input-wrapper">
                  <input id="passwordLogin" type={inputType} placeholder="Password" />
                  <span className="togglePassword" onClick={togglePassword}>
                    {
                      inputType === 'password' ? <VisibilityOff /> : <Visibility />
                    }
                  </span>
                </div>
              </div>
              <button onClick={OnClickLogin} className="btnSign">Sign in</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar
