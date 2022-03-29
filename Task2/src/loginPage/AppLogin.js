import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import React from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
//import NonExistentRoute from './NonExistentRoute';
const NonExistentRoute = React.lazy(() => import("./NonExistentRoute"));
const UserLogin = React.lazy(() => import("./userLogin"));
const DashBoard = React.lazy(() => import("./dashboard"));
const AllEmpDetail = React.lazy(() => import("./allEmpDetail"));
const Registration = React.lazy(() => import("./registration"));

function AppLogin() {

  const menuItems = [
    { id: 1, key: "registration", displayName: "Registration" },
    { id: 2, key: "userLogin", displayName: "User Login" },
    { id: 3, key: "dashboard", displayName: "DashBoard" },
    { id: 4, key: "allEmpDetail", displayName: "View Employes" }
  ];

  return (
    <div className="">
      <HashRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span style={{ color: 'white', fontSize: '1.6rem' }}>React Training</span>
            <div className=" navbar-collapse ulDiv" id="navbarResponsive">
              <ul className="navbar-nav">
                {menuItems.map((menu, i) =>
                  <li className='nav-item mx-0 mx-lg-1' key={i}>
                    <Link to={'/' + menu.key} className='li'>{menu.displayName}</Link>
                  </li>
                )
                }
              </ul>
            </div>
          </div>
        </nav>
        <p></p>
        <div className='container '>
          <div className='row'>
            <div className='col-md-12'>
              <Routes>
                {/* <Route path='registration' element={<Registration />} /> */}
                <Route path='/' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <Registration />
                </React.Suspense>} />
                <Route path='registration' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <Registration />
                </React.Suspense>} />
                <Route path='userLogin' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <UserLogin />
                </React.Suspense>} />
                <Route path='dashboard' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <DashBoard />
                </React.Suspense>} />
                <Route path=':id' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <DashBoard />
                </React.Suspense>} />
                <Route path='allEmpDetail' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <AllEmpDetail />
                </React.Suspense>} />
                <Route path='*' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                  <NonExistentRoute />
                </React.Suspense>} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
      {/* <p style={{ marginBottom: '120px' }}></p> */}
    </div>
  );
}
export default AppLogin;
