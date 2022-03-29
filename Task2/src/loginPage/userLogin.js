import { useEffect, useRef, useState } from "react";

function UserLogin() {

    const [empUserName, updateUserName] = useState("");
    const [empPassword, updatePassword] = useState("");
    const [userNameCheck, userTrue] = useState();
    //const [passwordCheck, passwordTrue] = useState();
    const [btnLogin, btnLogin1] = useState(true);
    const [empList, updateEmpList] = useState([]);

    const focusPassword = useRef(null);

    useEffect(() => {
        userNameCheck === true ? btnLogin1(false) : btnLogin1(true)
    }, [userNameCheck]);
    useEffect(() => {
        var getUserStore = JSON.parse(sessionStorage.getItem("userToken"));
        getUserStore !== null && updateEmpList(getUserStore);
    }, []);

    const updateUserName1 = (event) => {
        updateUserName(event.target.value)
        userTrue(false)
    }
    const updatePassword1 = (event) => {
        updatePassword(event.target.value)
        //passwordTrue(false)
    }

    const checkUser = (event) => {
        var getUserStore = JSON.parse(localStorage.getItem("user"));
        getUserStore.map((val, index) =>
            val.username === (event.target.value) && userTrue(true)
        )
    }
    // const checkPassword = (event) => {
    //     var getUserStore = JSON.parse(localStorage.getItem("user"));
    //     getUserStore.map((val, index) => 
    //         val.password === (event.target.value) && passwordTrue(true)
    //     )
    // }
    const submitLogin = () => {
        var getUserStore = JSON.parse(localStorage.getItem("user"));
        var userIndex    = getUserStore.findIndex(getUserStore => getUserStore.username === empUserName);
        var userDetail   = getUserStore[userIndex];
        var passCheck    = userDetail.password;
        if (passCheck === empPassword) {
            var updateEmpList1 = JSON.parse(JSON.stringify(empList));
            updateEmpList1.push({
                login: true,
                username: empUserName,
                password: empPassword
            });
            updateEmpList(updateEmpList1);
            sessionStorage.setItem("userToken", JSON.stringify(updateEmpList1));
            window.location.href = "#/" + userIndex;
            //console.log("Succes");
        } else if(empPassword === ''){
            alert("Please Enter Password And Continue..");
            focusPassword.current.focus();
        } else {
            alert("Password is Wrong..");
            focusPassword.current.focus();
        }
    }

    return (
        <div className='container appUser'>
            <p style={{ paddingBottom: '10px' }}></p>
            <div className='row'>
                <div className='col-md-12' style={{textAlign: 'center', color: 'blue'}}><b>User LogIn</b></div>
            </div>
            <hr style={{border: '1px solid black' }} />
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-7'><b>UserName</b></div>
            </div>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'><input type="text" className='form-control' value={empUserName}
                    onChange={updateUserName1} onBlur={checkUser}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-7'><b>Password</b></div>
            </div>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'><input type="password" className='form-control' value={empPassword}
                    onChange={updatePassword1} ref={focusPassword}
                /></div>
            </div>
            <p></p>
            <div className='row'>
                {/* <div className='col-md-4'></div> */}
                <div className='col-md-12' style={{textAlign: 'center'}}>
                    <button type="button" className='btn1' disabled={btnLogin} onClick={submitLogin}>LogIn</button>
                </div>
            </div>
        </div>
    );
}
export default UserLogin;