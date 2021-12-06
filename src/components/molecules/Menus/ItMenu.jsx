import { Link } from "react-router-dom";

export default function ItMenu() {
  return (
    <div className="child-menu">
      <img className="arrow-nav" src="/arrow-nav-menu.svg" alt="" />
      <div className="item">
        <span className="title">About IT</span>
        <div className="item-link">
          <Link to="/">Vision & Mission IT Group</Link>
        </div>
        <div className="item-link">
          <Link to="/" className="item-link">Organizational Structure IT Group</Link>
        </div>
        <div className="item-link">
          <Link to="/" className="item-link">Board of Director</Link>
        </div>
        <div className="item-link">
          <Link to="/" className="item-link">Board of Commissioner</Link>
        </div>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">IT Guidelines</span>
        <div className="item-link">
          <div className="group">
            <Link to="/">Book 1</Link>
            <Link to="/">Book 2</Link>
            <Link to="/">Book 3</Link>
          </div>
          <div className="group">
            <Link to="/">Book 1</Link>
            <Link to="/">Book 2</Link>
            <Link to="/">Book 3</Link>
          </div>
        </div>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Information</span>
        <div className="item-link">
          <Link to="/">Incident Priority</Link>
        </div>
        <div className="item-link">
          <Link to="/" className="item-link">Contact List</Link>
        </div>
      </div>
      <div className="line vertical"></div>
      <div className="item">
        <span className="title">Document Support</span>
        <div className="item-link">
          <Link to="/">OLA</Link>
        </div>
        <div className="item-link">
          <Link to="/" className="item-link">SLA</Link>
        </div>
        <div className="item-link">
          <Link to="/" className="item-link">PKS</Link>
        </div>
      </div>
    </div>
  )
}
