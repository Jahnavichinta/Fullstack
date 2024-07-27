import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from './App';
import Navigation from './navigation';

function Profile() {
    const {globalIsLogin, setGlobalIsLogin} = useContext(globalContext);
    const { globalUserObject } = useContext(globalContext);
    const [showPassword, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(true);
    // const logoutaction = () => {setGlobalIsLogin(false);}

    useEffect(() => {
        const name = localStorage.getItem("name");
        const branch = localStorage.getItem("branch");
        console.log(name);
        console.log(branch);
    })

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeIcon(!eyeIcon);
    };

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div style={{ margin: 'auto', width: 400, border: '1px solid black', padding: 30, paddingTop: 20, borderRadius: 10, marginTop: 20 }}>
                <center>
                    <h1>Profile</h1>
                </center>
                <p>Your details</p>
                <strong>
                    <p>College ID</p>
                </strong>
                <p style={{ border: '1px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.collegeIdValue :"No Data"}</p>
                <strong>
                    <p>Password</p>
                </strong>
                <p style={{ border: '1px solid black', padding: 5 }}>
                    {showPassword ? globalUserObject.passwordValue : '••••••••'} 
                    {eyeIcon ?
                        <button onClick={togglePasswordVisibility} style={{ float: 'right', backgroundColor: 'white', border: 'none' }}>
                            <img src='eyeOpen.png' alt="eye" width={20} height={13} />
                        </button>
                        :
                        <button onClick={togglePasswordVisibility} style={{ float: 'right', backgroundColor: 'white', border: 'none' }}>
                            <img src='eyeClose.png' alt="eye" width={20} height={13} />
                        </button>
                    }
                </p>
                <strong>
                    <p>Email address</p>
                </strong>
                <p style={{ border: '1px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.emailValue : "No Data"}</p>
                <strong>
                    <p>Branch</p>
                </strong>
                <p style={{ border: '1px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.branchValue :"No Data"}</p>
                <strong>
                    <p>Year</p>
                </strong>
                <p style={{ border: '1px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.yearValue :"No Data"}</p>
                <strong>
                    <p>Gender</p>
                </strong>
                <p style={{ border: '1px solid black', padding: 5 }}>{globalIsLogin? globalUserObject.genderValue : "No Data"}</p>
            </div>
        </div>
    );
}

export default Profile;
