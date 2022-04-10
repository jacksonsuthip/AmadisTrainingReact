import { useEffect, useState } from "react";
import { getTodo } from "./api";
import { prodSubject, removeSubject } from "./subjectVal";
import './rxjs.css';

function LeftSide() {

    const [todo, setTodo] = useState([]);
    const [doneTodo, setDoneTodo] = useState([]);

    useEffect(() => {
        // make api call & set users
        getTodo().then(response => response.json())
            .then(response => {
                setTodo(response);
            });
    }, []);
    useEffect(() => {
        var mTodo1 = JSON.parse(JSON.stringify(todo));
        mTodo1.slice(0, 7).map((tod) => {
            if (tod.completed) {
                var mTodo = doneTodo;
                mTodo.push(tod);
                setDoneTodo(mTodo);
                prodSubject.next(mTodo);
            }
        });
    }, [todo]);
    useEffect(() => {
        removeSubject.subscribe(data1 => {
            if (data1 !== undefined) {
                setDoneTodo(data1);
            }
        });
    }, [removeSubject])

    function sendProductInfo(val, che) {
        var mTodo = JSON.parse(JSON.stringify(doneTodo));
        if (che === true) {
            val.completed = true;
            mTodo.push(val);
            setDoneTodo(mTodo);
            prodSubject.next(mTodo);
        } else {
            var userIndex = doneTodo.findIndex(doneT => doneT.id === val.id);
            val.completed = false;
            setDoneTodo(mTodo);
            if (userIndex >= 0) {
                mTodo.splice(userIndex, 1);
                prodSubject.next(mTodo);
            } 
        }
    }

    return (
        <div>
            <p style={{ margin: '25px' }}></p>
            <table className='table table-hover table-bordered table-striped'>
                <thead className='tabHed'>
                    <tr>
                        <th style={{ width: '10%' }}>Sl.No</th>
                        <th style={{ width: '70%' }}>ToDo List</th>
                        <th style={{ width: '20%' }}>Checkbox</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.slice(0, 7).map((ttdd, i) =>
                            <tr key={"keyName" + i} className={ttdd.completed === true ? "lin" : null}>
                                <td>{ttdd.id}</td>
                                <td>{ttdd.title}</td>
                                <td><input type="checkbox"
                                    checked={ttdd.completed}
                                    onChange={e => sendProductInfo(ttdd, e.target.checked)}
                                /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default LeftSide;