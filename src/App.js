import 'bootstrap/dist/css/bootstrap.min.css';
import './loginPage/login.css';
import React from 'react';
import { HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
//import CrudApp from './Crud/crudApp';
//import Home from './home';
const NonExistentRoute = React.lazy(() => import("./loginPage/NonExistentRoute"));
const UserLogin = React.lazy(() => import("./loginPage/userLogin"));
const DashBoard = React.lazy(() => import("./loginPage/dashboard"));
const AllEmpDetail = React.lazy(() => import("./loginPage/allEmpDetail"));
const Registration = React.lazy(() => import("./loginPage/registration"));
const CrudApp = React.lazy(() => import("./Crud/crudApp"));
const Home = React.lazy(() => import("./home"));

function App() {

  const menuItems = [
    { id: 1, key: "log/registration", displayName: "Registration" },
    { id: 2, key: "log/userLogin", displayName: "User Login" },
    { id: 3, key: "log/dashboard", displayName: "DashBoard" },
    { id: 4, key: "log/allEmpDetail", displayName: "View Employes" },
    { id: 5, key: "home", displayName: "Home" }
  ];

  return (
    <div className="">
      <HashRouter>
        <Routes>
          {/* <Route path='registration' element={<Registration />} /> */}
          <Route path='/' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </React.Suspense>} />
          <Route path='/home' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </React.Suspense>} />

          <Route path='/Crud/crudApp' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <CrudApp />
          </React.Suspense>} />

          <Route path='log' element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                  <span style={{ color: 'white', fontSize: '1.6rem' }}>SignUp And LogIn</span>
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
              <Outlet />
            </React.Suspense>
          } >
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
          </Route>


          {/* <Route path='registration' element={<React.Suspense fallback={<h2>Loading...</h2>}>
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
          </React.Suspense>} /> */}

          <Route path='*' element={<React.Suspense fallback={<h2>Loading...</h2>}>
            <NonExistentRoute />
          </React.Suspense>} />

        </Routes>
      </HashRouter>
      {/* <p style={{ marginBottom: '120px' }}></p> */}
    </div>
  );
}
export default App;
