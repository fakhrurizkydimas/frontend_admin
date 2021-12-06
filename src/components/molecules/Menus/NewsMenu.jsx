import { Link } from "react-router-dom"

function NewsMenu() {
  return (
    <div className="child-menu">
      <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
      <div className="item">
        <span className="title">Internal News</span>
        <Link to="/" className="item-link">News Update</Link>
        <Link to="/" className="item-link">Organizational Structure</Link>
        <Link to="/" className="item-link">Board of Director</Link>
        <Link to="/" className="item-link">Board of Commissioner</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <div className="title">External News</div>
        <Link to="/" className="item-link">Financial Update</Link>
        <Link to="/" className="item-link">National Update</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Regulator</span>
        <Link to="/" className="item-link">POJK</Link>
        <Link to="/" className="item-link">PBI</Link>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Dashboard</span>
        <Link to="/" className="item-link">Performance</Link>
        <Link to="/" className="item-link">Financial</Link>
      </div>
    </div>
  )
}

export default NewsMenu
