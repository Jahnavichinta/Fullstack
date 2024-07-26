import { useRef, useState, useEffect, useContext } from "react";
// import { UserContext } from "./home";
import { globalContext } from "./App";

function Login() {
    const {globalUserObject, setGlobalUserObject} = useContext(globalContext);
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);
    const [loginMessage, setMessage] = useState('');
    // const {isLogin, setIsLogin} = useContext(UserContext);
    const {globalIsLogin, setGlobalIsLogin} = useContext(globalContext);
    useEffect(() => {
        collegeIdRef.current.focus();
    });
    const formSubmit = (event) => {
        event.preventDefault();
        console.log("form Submitted");
        console.log(collegeIdRef.current.value);
        console.log(passwordRef.current.value);
        if(collegeIdRef.current.value !== '' && passwordRef.current.value !== '') {
            if(collegeIdRef.current.value === globalUserObject.collegeIdValue && passwordRef.current.value === globalUserObject.passwordValue) {
                setMessage("correct");
                setGlobalIsLogin(true);
                localStorage.setItem("name", "ReactJs")
                localStorage.setItem("branch", "AI")
            }
            else {
                setMessage("Incorrect");
            }
        }
        collegeIdRef.current.value = '';
        passwordRef.current.value = '';
    }
    return(
        <div style={{margin:'auto', width:500}}>
            
            <div style={{ border:"1px solid black", padding:30, borderRadius:10}}>
                <h1>Login</h1>
                <p>Please provide your details to login</p>
                <div className="card" >
                    <form onSubmit={formSubmit} style={{display:'flex', flexDirection:"column"}}>
                        <label><h3>College ID</h3></label> 
                        <input type="text" ref={collegeIdRef} placeholder= "College Id" style={{fontSize:20}}/> <br/>
                        <label><h3>Password</h3></label> 
                        <input type="password" ref={passwordRef} placeholder="Password" style={{fontSize:20}}/> <br/> <br/>
                        <center><button type="submit" style={{width:100,float:'right', alignItems:'center', fontSize:20, backgroundColor:"black", color:"white", borderRadius:10}} >Login</button></center>
                        <center><h3><strong>{loginMessage}</strong></h3></center>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;