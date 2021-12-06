import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import './Portal.scss';

const Portal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal
