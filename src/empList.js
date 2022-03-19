import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import {useState, useEffect} from "react";


function EmpList(props) {
    const empDet = props.empDet || [];
    // let [empDet, updateDet] = useState([]);

    // useEffect(() => {
    //      updateDet(props.empDet);
    //      console.log("00");
    // }, [props]);

    // function handleRemove(name) {
    //     const newList = empDet.filter((emp) => emp.name !== name);
    //     //console.log("new",newList);
    //     this.useState({newList});
    //     updateDet(newList);  
    // }

    return (
        <div>
            <p style={{ margin: '25px' }}></p>
            <table className='table table-hover table-bordered table-striped'>
                <col width="15%" />
                <col width="20%" />
                <col width="15%" />
                <col width="20%" />
                <col width="30%" />
                <thead className='tabHed'>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Edit/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empDet.map((emp, i) =>
                            <tr key={"keyName" + i}>
                                <td>{emp.name}</td>
                                <td>{emp.address}</td>
                                <td>{emp.city}</td>
                                <td>{emp.gender}</td>
                                <td className='tdClass'>
                                    <button type="button" className='btn1' onClick={() => props.getEmpEdit(emp, i)}>Edit</button>
                                    <button type="button" className='btn1 btn-danger' onClick={() => props.empRemove(i)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}
export default EmpList;