import { useEffect, useState } from "react";
import { prodSubject, removeSubject } from "./subjectVal";

function RightSide() {

    const [mytodo, setMyTodo] = useState([]);

    useEffect(() => {
        prodSubject.subscribe(data => {
            if (data !== undefined) {
                setMyTodo(data);
            }
        });
    }, []);

    // const removeTodo = (i, val) => {
    //     var mTodo = JSON.parse(JSON.stringify(mytodo));
    //     val.completed = false;
    //     mTodo.splice(i, 1);
    //     setMyTodo(mTodo);
    //     removeSubject.next(mTodo)
    // }

    return (
        <div style={{ marginTop: '25px' }} className='listDiv'>
            <div style={{ paddingTop: '20px', textAlign: 'center' }}><b>ToDo List</b></div>
            <hr />
            {
                mytodo.map((ttdd, i) =>
                    <div key={"keyName" + i} className='row' style={{ paddingBottom: '20px' }}>
                        <div className="col-md-1" style={{textAlign: 'center', fontSize:'20px' }}><b>*</b></div>
                        <div className="col-md-8">{ttdd.title}</div>
                        {/* <div className="col-md-2"><button type="button" className='btn btn-danger' onClick={e => removeTodo(i, ttdd)} >Remove</button></div> */}
                    </div>
                )
            }
        </div>
    );
}
export default RightSide;