import { useState, useContext } from "react";
import { globalContext } from "./App";

function RegisterPage() {
    // const { setUser } = useContext(UserContext);
    const [collegeIdValue, setCollegeId] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [branchValue, setBranch] = useState('');
    const [genderValue, setGender] = useState('');
    const [yearValue, setYear] = useState('');
    const [user, setUser] = useState({});
    const {globalUserObject, setGlobalUserObject} = useContext(globalContext);

    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
    };
    const getPassword = (event) => {
        setPassword(event.target.value);
    };
    const getEmail = (event) => {
        setEmail(event.target.value);
    };
    const getBranch = (event) => {
        setBranch(event.target.value);
    };
    const getGender = (event) => {
        setGender(event.target.value);
    };
    const getYear = (event) => {
        setYear(event.target.value);
    };
    const submitData = (event) => {
        event.preventDefault();
        
        const obj = {
            collegeIdValue, branchValue, passwordValue, emailValue, yearValue, genderValue
        }
        setUser(obj);
        setGlobalUserObject(obj);
        console.log(obj);

    };

    return (
        <div style={{ margin: 'auto', width: 500 }}>
            <div style={{ border: "1px solid black", padding: 30, paddingTop: 20, borderRadius: 10 }}>
                <h1>Register</h1>
                <p>Please provide your details to Register</p>
                <form style={{ display: 'flex', flexDirection: "column" }} onSubmit={submitData}>
                    <label><h3>College ID</h3></label>
                    <input type="text" onChange={getCollegeId} placeholder="College Id" style={{ fontSize: 17 }} /> <br />
                    <label><h3>Password</h3></label>
                    <input type="password" onChange={getPassword} placeholder="Password" style={{ fontSize: 17 }} /> <br />
                    <label><h3>Email address</h3></label>
                    <input type="email" onChange={getEmail} placeholder="Email address" style={{ fontSize: 17 }} /> <br />
                    <label><h3>Branch</h3></label>
                    <select style={{ fontSize: 17 }} value={branchValue} onChange={getBranch}>
                        <option value="">Select a branch</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="AI&ML">AI&ML</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CE">CE</option>
                        <option value="ME">ME</option>
                    </select> <br />
                    <label><h3>Year</h3></label>
                    <select style={{ fontSize: 17 }} onChange={getYear}>
                        <option value="">Select a year</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                    </select> <br />
                    <label><h3>Gender</h3></label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="radio" name="gender" value="Male" checked={genderValue === "Male"} onChange={getGender} style={{ fontSize: 17, marginRight: 10 }} />
                        <label value="Male"><h4>Male</h4></label>
                        <pre>       </pre>
                        <input type="radio" name="gender" value="Female" checked={genderValue === "Female"} onChange={getGender} style={{ fontSize: 17, marginRight: 10 }} />
                        <label value="Female"><h4>Female</h4></label>
                        <pre>       </pre>
                        <input type="radio" name="gender" value="Other" checked={genderValue === "Other"} onChange={getGender} style={{ fontSize: 17, marginRight: 10 }} />
                        <label value="Other"><h4>Other</h4></label>
                    </div>
                    <center><button type="submit" style={{ width: 100, float: 'right', alignItems: 'center', fontSize: 20, backgroundColor: "black", color: "white", borderRadius: 10 }}>Register</button></center>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
