// import AppLogo from './AppLogo';
import './App.css';
import EmpList from './empList';
import EmpReg from './employeReg';
import { useState } from "react";


function App() {

  const [empObjList, EmpDetails] = useState([]);
  const [setEmpEdit, getEmpEdit2] = useState({});
  const [setEmpEditI, getEmpEdit3] = useState({});
  const [empDelete1, empRemove2] = useState([]);

  function getEmpDet(allDet) {
    EmpDetails(allDet);
  }

  function getEmpEdit1(editObj,i) {
    getEmpEdit2(editObj,i);
    getEmpEdit3(i)
    //console.log("i--",i)
  }

  function empRemove1(i) {
    empRemove2(i);
    empObjList.splice(i, 1);
  }

  return (
    <div className="">
      <header className="App-header">
        Registration
      </header>
      <div className='container-lg'>
        <div className='row'>
          <div className='col-md-6'>
            <EmpReg getEmpDetailList={getEmpDet} empEditI={setEmpEditI} empEdit={setEmpEdit} />
          </div>
          <div className='col-md-6'>
            <EmpList empDet={empObjList} getEmpEdit={getEmpEdit1} empRemove={empRemove1} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
