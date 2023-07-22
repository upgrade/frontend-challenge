/**********************************************************************************/
/* Layout.jsx: 
/* Main layout for the application.
/* @author: Elvis Goncalves
/**********************************************************************************/

import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Loader } from 'react-overlay-loader';
 
export default function Layout() {
  
  const loading = useSelector(state => state.appReducer.loading);
  
  return (
    <div className="container align-items-center d-flex w-100">
      <div className="row justify-content-center py-3 w-100">
        <div className="col-6 main-container">
          <div className="card">
            <div className="card-header">
              <a href="/" tabIndex="-1">
                <img src="https://media.licdn.com/dms/image/D4E0BAQFukYWyzk9MDQ/company-logo_200_200/0/1688476771340?e=1698278400&amp;v=beta&amp;t=vC_nqDSKXNPVW0W53TTTE27lK1ZtRTi0AEQ-yb_q9Ps" alt="Upgrade, Inc. logo" />
              </a>
              Upgrade
            </div>
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Loader fullPage loading={loading} />
    </div>
  )
};