import React from 'react';

function AllEmpDetail() {

    var allEmployes;
    var getUserStore = JSON.parse(localStorage.getItem("user"));
    getUserStore !== null ? allEmployes = getUserStore : allEmployes = [{ name: "" }]

    return (
        <div className='container'>
            <p style={{ margin: '25px' }}></p>
            <table className='table table-hover table-bordered table-striped'>
                <thead className='tabHed'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allEmployes.map((emp, i) =>
                            <tr key={"keyName" + i}>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.phone}</td>
                                <td>{emp.username}</td>
                                <td>{emp.password}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <p style={{ margin: '25px' }}></p>
        </div>
    );
}
export default AllEmpDetail;