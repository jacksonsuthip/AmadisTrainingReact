import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Button, Modal } from 'react-bootstrap';

function Registration() {

    const [empName, updateEmpName] = useState("");
    const [empEmail, updateEmpEmail] = useState("");
    const [empPhone, updateEmpPhone] = useState("");
    const [empUserName, updateUserName] = useState("");
    const [empPassword, updatePassword] = useState("");
    const [count, updateCount] = useState(1);
    const [empList, updateEmpList] = useState([]);

    const [userNameCheck, userTrue] = useState();
    const focusName = useRef(null);
    const focusPassword = useRef(null);
    const focusUserName = useRef(null);
    const [show, setShow] = useState(false);
    const [alertValue, setAlert] = useState("");

    useEffect(() => {
        var getUserStore = JSON.parse(localStorage.getItem("user"));
        getUserStore !== null && updateEmpList(getUserStore);
    }, []);
    useEffect(() => {
        if (userNameCheck === true) {
            focusUserName.current.focus();
            alert("This UserName is Not Available");
            //console.log("AJ");
        }
    });

    const updateEmpName1 = (event) => {
        updateEmpName(event.target.value);
    }
    function updateEmail1(event) {
        updateEmpEmail(event.target.value);
    }
    function updateUserName1(event) {
        updateUserName(event.target.value);
        userTrue(false);
    }

    const addEmployee = () => {
        var updateEmpList1 = JSON.parse(JSON.stringify(empList));
        if (empName === '') {
            setShow(true);
            setAlert("Enter Name And Continue . . .");
            focusName.current.focus();
        } else if (empUserName === '') {
            setAlert("Enter UserNmae And Continue . . .");
            setShow(true);
            focusUserName.current.focus();
        } else if (empPassword === '') {
            setAlert("Enter Password And Continue . . .");
            setShow(true);
            focusPassword.current.focus();
        } else {
            updateCount(count + 1)
            updateEmpList1.push({
                id: count,
                name: empName,
                email: empEmail,
                phone: empPhone,
                username: empUserName,
                password: empPassword
            });
            updateEmpList(updateEmpList1);
            localStorage.setItem("user", JSON.stringify(updateEmpList1));
            resetForm()
            window.location.href = "#/log/userLogin";
        }
    }
    function resetForm() {
        updateEmpName("");
        updateEmpEmail("");
        updateEmpPhone("");
        updateUserName("");
        updatePassword("");
    }
    const checkUser = (event) => {
        var getUserStore = JSON.parse(localStorage.getItem("user"));
        getUserStore.map((val) =>
            val.username === (event.target.value) && userTrue(true)
        )
    }
    const handleClose = () => setShow(false);

    return (
        <div className='container appReg'>
            <p></p>
            <div className='row'>
                <div className='col-md-12' style={{textAlign: 'center', color: 'blue'}}><b>Employe Detail</b></div>
            </div>
            <hr style={{border: '1px solid black' }} />
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-3'><b>Name</b></div>
                <div className='col-md-7'><input type="text" className='form-control' value={empName} placeholder='Enter Name'
                    onChange={updateEmpName1} ref={focusName}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-3'><b>Email</b></div>
                <div className='col-md-7'><input type="email" className='form-control' value={empEmail} placeholder='Enter Email'
                    onChange={updateEmail1}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-3'><b>Phone</b></div>
                <div className='col-md-7'><input type="number" className='form-control' value={empPhone} placeholder='Enter Ph.No'
                    onChange={e => updateEmpPhone(e.target.value)}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-3'><b>UserName</b></div>
                <div className='col-md-7'><input type="text" className='form-control ' value={empUserName} placeholder='UserName'
                    onChange={updateUserName1} onBlur={checkUser} ref={focusUserName}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-3'><b>Password</b></div>
                <div className='col-md-7'><input type="password" className='form-control' value={empPassword} placeholder='Password'
                    onChange={e => updatePassword(e.target.value)} ref={focusPassword}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-5'></div>
                <div className='col-md-1'>
                    <button type="button" className='btn1' onClick={addEmployee} >Submit</button>
                </div>
            </div>
            <input type="hidden" value={count} />
            <p style={{ paddingBottom: '20px' }}></p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header><span className='MHead'>Alert</span></Modal.Header>
                <Modal.Body><span className='MBody'>{alertValue}</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Registration;