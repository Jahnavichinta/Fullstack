import { useContext } from "react";
import { globalContext } from "./App";
import Price from "./price";
import Navigation from "./navigation";
import { useNavigate } from "react-router-dom";

function AddToCart() {
    const {card} = useContext(globalContext);
    const {globalCount, globalPrice} = useContext(globalContext);

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        navigate('/order-confirmation');
    };

    return (<div>
        <Navigation/>
        <div style={{margin:'auto'}}>
        <h1 style={{margin:20}}>Cart</h1>
        </div>
        <div style={{display:'flex'}}>
            <div>
                
                
                {card.map((item, index) => (
                    <div key={index} style={{ backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.9)', margin:20, borderRadius:10, padding:50, paddingTop:20, paddingBottom:20, display:'flex'}}>
                        <img src={item.path} alt="pic" width={130} height={150} />
                        <div style={{marginLeft:20}}>
                            <h3>{item.title}</h3>
                                <Price p={item.price} q={item.quantity}/>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{width:700, height:250, backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.15)', margin:20, borderRadius:10, padding:50, paddingTop:20, paddingBottom:20}}>
                <h3>Price Details</h3>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p>Price ({globalCount} items)</p>
                    <p>{globalPrice}</p>
                </div>
                <hr/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p>Total Amount</p>
                    <p>{globalPrice}</p>
                </div>
                <br/>
                <button onClick={handlePlaceOrder} style={{width:150, height:'30', float:'right', borderRadius:10, color:'white', backgroundColor:'black'}}>Place Order</button>
            </div>
        </div>
    </div>);
}
export default AddToCart;