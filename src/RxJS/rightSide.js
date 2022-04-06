import { useEffect, useState } from "react";
import { prodSubject } from "./subjectVal";

function RightSide() { 

    const [todo, setTodo] = useState([]);
    console.log("todo",todo);
    useEffect(() => {
        prodSubject.subscribe(data => {
            if (data !== undefined) {
                // debugger
                var setData = JSON.parse(JSON.stringify(todo));
                console.log("setData",setData);
                setData.push({data});
                setTodo(setData);
            }
        });
    }, []);

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
                        todo.map((emp, i) =>
                            <tr key={"keyName" + i}>
                                <td>{emp.id}</td>
                                <td>{emp.title}</td>
                                <td><button type="button" className='btn1' >Edit</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default RightSide;