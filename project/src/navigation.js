import { useContext} from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./App";

function Navigation() {
    const {globalCount} = useContext(globalContext);
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:"black", padding:'20px', cursor:'pointer', fontSize:20}}>
                <Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link>
                <Link to="/products" style={{textDecoration:'none', color:'white'}}>Products</Link>
                
                <Link to="/cart" style={{textDecoration:'none', color:'white'}}>cart({globalCount})</Link>
                <Link to="/profile" style={{textDecoration:'none', color:'white'}}>profile</Link>
        </div>
    )
}
export default Navigation;