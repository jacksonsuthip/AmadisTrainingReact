import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState, useEffect} from "react";


function EmpReg(props){
    
    const [empName, updateEmpName] = useState("");
    const [empAddr, updateEmpAddr] = useState("");
    const [empCity, updateEmpCity] = useState("");
    const [genType, updateGenType] = useState("");
    const [count, updateCount]     = useState(0);
    const [count1, updateCount1]   = useState();
    const [empList, updateEmpList] = useState([]);
    const [btnUpdate, btnUpdate1]  = useState(true);
    const [btnAdd, btnAdd1]        = useState(false);

    useEffect(() => {
        updateEmpName(props.empEdit.name);
    }, [props.empEdit.name]);
    useEffect(() => {
        updateEmpAddr(props.empEdit.address);
    }, [props.empEdit.address]);
    useEffect(() => {
        updateEmpCity(props.empEdit.city);
    }, [props.empEdit.city]);
    useEffect(() => {
        updateGenType(props.empEdit.gender);
    }, [props.empEdit.gender]);
    useEffect(() => {
        updateCount1(props.empEdit.id);
        if (props.empEdit.id !== undefined){
            btnUpdate1(false);
            btnAdd1(true);
        }
    }, [props.empEdit.id]);

    const updateEmpName1 = (event) => {
        updateEmpName(event.target.value);
    }
    function updateEmpAddr1(event){
        updateEmpAddr(event.target.value)
    }
    function updateGenType1(event){
        if(event.target.checked){
            updateGenType("Male");
        }
    }
    function updateGenType2(event){
        if(event.target.checked){
            updateGenType("Female");
        }
    }

    const addEmployee = () => {
        //var updateEmpList1 = [...empList];
        var updateEmpList1 = JSON.parse(JSON.stringify(empList));
        updateCount(count + 1)
        updateEmpList1.push({
            name: empName,
            address: empAddr,
            city: empCity,
            gender: genType,
            id : count
        });
        updateEmpList(updateEmpList1);
        props.getEmpDetailList(updateEmpList1);
        resetForm()
    }
    function updateEmployee(){
        var updateEmpList1 = JSON.parse(JSON.stringify(empList));
        updateEmpList1.splice(props.empEditI, 1, {
            name: empName,
            address: empAddr,
            city: empCity,
            gender: genType,
            id: count1
        });
        updateEmpList(updateEmpList1);
        props.getEmpDetailList(updateEmpList1);
        btnAdd1(false);
        btnUpdate1(true);
        resetForm()
        console.log("aa");
    }

    function resetForm() {
        updateEmpName("");
        updateEmpAddr("");
        updateEmpCity("");
        updateGenType("");
    }

    return(
        <div className='row'>
            <div className=' formDiv'>
                <fieldset className='field'>
                    <p></p>   
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><b>Name</b></div>
                    <div className='col-md-5'><input type="text" className='form-control' value={empName}
                    onChange={updateEmpName1}
                    /></div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><b>Address</b></div>
                    <div className='col-md-5'><textarea className='form-control' value={empAddr}
                    onChange={updateEmpAddr1}
                    >    
                    </textarea></div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><b>City</b></div>
                    <div className='col-md-5'>
                        <select className='form-control' value={empCity}
                            onChange={e => updateEmpCity(e.target.value)}
                            >
                            <option value="">Select City</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                        </select>
                    </div>
                </div>
                <p></p>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><b>Gender</b></div>
                    <div className='col-md-5 radioDiv'>
                        <input className="form-check-input" type="radio" name="genType" id='genM'  
                        checked = {genType === 'Male'} 
                        onChange = {updateGenType1}
                        />
                            <label className="form-check-label radioDiv" htmlFor="genM">Male</label>
                        <input className="form-check-input" type="radio" name="genType" id='genF'  
                        checked = {genType === 'Female'} 
                        onChange = {updateGenType2}
                        />
                            <label className="form-check-label radioDiv" htmlFor="genF">Female</label>
                        <input className="form-check-input" type="radio" name="genType" id='genO'  
                        checked = {genType === 'Other'} 
                        onChange = {e => e.target.checked && updateGenType("Other")}
                        />
                            <label className="form-check-label radioDiv" htmlFor="genO">Other</label>
                    </div>
                </div>    
                <p></p>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-2'>
                        <button type="button" className='btn1 btn2' onClick={addEmployee} disabled={btnAdd}>Add</button>
                        <button type="button" className='btn1' onClick={updateEmployee} disabled={btnUpdate}>Update</button>
                    </div>
                </div>
                <input type="hidden" value={count} />
                <input type="hidden" value={count1} />
                <p></p>
                </fieldset>
            </div>
        </div>
    )
}      
export default EmpReg;