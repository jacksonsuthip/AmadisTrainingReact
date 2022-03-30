import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import  photo from './homeImg.png';

function Home() {

    const menuItems = [
        { id: 1, key: "Crud/crudApp", displayName: "CRUD App" },
        { id: 2, key: "log/registration", displayName: "Log In App" },
    ];

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span style={{ color: 'white', fontSize: '1.6rem' }}>Welcome To Amadis</span>
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
            <div className='container homeDiv'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-3 homeDiv1'>
                        <span style={{ paddingLeft: '20px', fontSize: '23px' }}><b>React Task</b></span>
                        <hr />
                        <ul className="">
                            {menuItems.map((menu, i) =>
                                <li className='home_li' key={i}>
                                    <Link to={'/' + menu.key} className='homeLink'><b>{menu.displayName}</b></Link>
                                </li>
                            )
                            }
                        </ul>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'><img src={photo} className="AppPhoto" alt=".." />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;
