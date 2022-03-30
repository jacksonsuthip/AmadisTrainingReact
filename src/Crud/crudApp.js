// import AppLogo from './AppLogo';
import './App.css';
import EmpList from './empList';
import EmpReg from './employeReg';
import { useState } from "react";
import { Link } from 'react-router-dom';


function CrudApp() {

    const [empObjList, EmpDetails] = useState([]);
    const [setEmpEdit, getEmpEdit2] = useState({});
    const [setEmpEditI, getEmpEdit3] = useState({});
    const [empDelete1, empRemove2] = useState([]);

    function getEmpDet(allDet) {
        EmpDetails(allDet);
    }

    function getEmpEdit1(editObj, i) {
        getEmpEdit2(editObj, i);
        getEmpEdit3(i)
        //console.log("i--",i)
    }

    function empRemove1(i) {
        empRemove2(i);
        empObjList.splice(i, 1);
    }

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span style={{ color: 'white', fontSize: '1.6rem' }}>Registration</span>
                    <div className=" navbar-collapse ulDiv" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className='nav-item mx-0 mx-lg-1'>
                                <Link to='/home' className='li'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{marginTop:'30px'}} className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <EmpReg getEmpDetailList={getEmpDet} empEditI={setEmpEditI} empEdit={setEmpEdit} empD={empDelete1} />
                    </div>
                    <div className='col-md-6'>
                        <EmpList empDet={empObjList} getEmpEdit={getEmpEdit1} empRemove={empRemove1} />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CrudApp;
