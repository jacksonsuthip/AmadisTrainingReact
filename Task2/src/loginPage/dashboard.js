import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DashBoard() {

    const [empName, updateEmpName] = useState("");
    const [empEmail, updateEmpEmail] = useState("");
    const [empPhone, updateEmpPhone] = useState("");
    const [empUserName, updateUserName] = useState("");
    const [empPassword, updatePassword] = useState("");

    const routeParams = useParams();
    useEffect(() => {
        var getUserStore = JSON.parse(localStorage.getItem("user"));
        if (getUserStore !== null) {
            var userDetails = getUserStore[routeParams.id];
            if (userDetails !== undefined && userDetails !== null) {
                updateEmpName(userDetails.name);
                updateEmpEmail(userDetails.email);
                updateEmpPhone(userDetails.phone);
                updateUserName(userDetails.username);
                updatePassword(userDetails.password);
            }
        }
    }, [routeParams.id]);

    function removeToken() {
        sessionStorage.removeItem("userToken");
        window.location.href = "#/userLogin";
    }

    return (
        <div className='container appbord'>
            <p></p>
            <div className='row'>
                <div className='col-md-12' style={{textAlign: 'center', color: 'blue'}}><b>User Details</b></div>
            </div>
            <hr style={{border: '1px solid black' }} />
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-3'><b>Name</b></div>
                <div className='col-md-7'>{empName}</div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-3'><b>Email</b></div>
                <div className='col-md-7'>{empEmail}</div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-3'><b>Phone No.</b></div>
                <div className='col-md-7'>{empPhone}</div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-3'><b>UserName</b></div>
                <div className='col-md-7'>{empUserName}</div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-3'><b>Password</b></div>
                <div className='col-md-7'>{empPassword}</div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-5'></div>
                <div className='col-md-2'>
                    <button type="button" className='btn btn-danger' onClick={removeToken} >LogOut</button>
                </div>
            </div>
        </div>
    );
}
export default DashBoard;