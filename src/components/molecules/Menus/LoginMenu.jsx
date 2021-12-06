import { Link } from "react-router-dom"

function LoginMenu() {
  return (
    <div className="child-menu">
      <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
      <div className="item">
        <div className="title">Welcome</div>
        <Link to="/" className="item-link">Username</Link>
        <Link to="/" className="item-link">Email</Link>
      </div>
    </div>
  )
}

export default LoginMenu
