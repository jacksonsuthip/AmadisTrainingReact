import { useEffect, useState } from "react";
import { getTodo } from "./api";
import { prodSubject } from "./subjectVal";

function LeftSide() {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        // make api call & set users
        getTodo().then(response => response.json())
            .then(response => {
                setTodo(response);
            });
    }, []);

    function sendProductInfo(val) {
        prodSubject.next(val);
    }

    return (
        <div>
            <p style={{ margin: '25px' }}></p>
            <table className='table table-hover table-bordered table-striped'>
                <thead className='tabHed'>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.slice(0, 7).map((emp, i) =>
                            <tr key={"keyName" + i}>
                                <td>{emp.id}</td>
                                <td>{emp.title}</td>
                                <td><button type="button" className='btn1' onClick={() => sendProductInfo(emp)}>Add</button></td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
}
export default LeftSide;