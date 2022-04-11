import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReduxLeft from "./reduxLeft";
import ReduxRight from "./reduxRight";
import { addTodo } from "./todoSlice";

export default function ReduxApp() {

    const [todoName, setTodoName] = useState("");
    const dispatch = useDispatch();

    function sendTodo() {
        dispatch(addTodo(todoName));
        resetForm();
    }

    function resetForm() {
        setTodoName("");
    }    
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span style={{ color: 'white', fontSize: '1.6rem' }}>Redux App</span>
                    <div className=" navbar-collapse ulDiv" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className='nav-item mx-0 mx-lg-1'>
                                <Link to={'/home'} className='li'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ marginTop: '30px' }} className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8'>
                        <input className='form-control' type='text' value={todoName} onChange={e => setTodoName(e.target.value)} placeholder="Enter ToDo . . ." />
                    </div>
                    <div className='col-md-2'>
                        <button type='button' className="btn1" onClick={sendTodo}>Add</button>
                    </div>
                </div>
                <p style={{ marginTop: '30px' }}></p>
                <div className='row'>
                    <div className='col-md-6'><ReduxLeft /></div>
                    <div className='col-md-6'><ReduxRight /></div>
                </div>
            </div>
        </div>

    );
}
