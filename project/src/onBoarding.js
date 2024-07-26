import { useState } from "react";
import Login from "./login";
import RegisterPage from "./registerPage";

function SwitchTabs() {
    const [isLogin, setTab] = useState(true);
    const loginTab = () => {
        setTab(true);
    }
    const registerTab = () => {
        setTab(false);
    }
    return (<div>
        <div style={{marginTop:50}}>
            <center>
            <button onClick={loginTab} style={{height:40, width:250, fontSize:20, backgroundColor:'white', border:"1px solid black", borderLeft:"0.5px solid black"}}>Login</button>
            <button onClick={registerTab} style={{height:40, width:250, fontSize:20, backgroundColor:'white', border:"1px solid black",borderLeft:"none"}}>Register</button>
            </center>
            {
                isLogin ?
                <div><br/> <Login/> </div>
                :
                <div><br/> <RegisterPage/></div>
            }
        </div>
        </div>
    )
}
export default SwitchTabs;