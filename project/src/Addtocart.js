import { useContext } from "react";
import { globalContext } from "./App";
import Price from "./price";
import Navigation from "./navigation";
// import Cart from "./cart";

function AddToCart() {
    const {card, setCard} = useContext(globalContext);
    return (<div>
        <Navigation/>
        <div>
        <h1 style={{margin:20}}>Cart</h1>
     
            <div style={{width:700, height:150, backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.9)', margin:20, borderRadius:10, padding:50, paddingTop:20, paddingBottom:20, display:'flex'}}>
                <img src={card.path} alt="pic" width={130} height={150} />
                <div style={{marginLeft:20}}>
                    <h3>{card.title}</h3>
                    {/* <p>{card.descript}</p> */}
                    <Price/>
                </div>
            </div>
        </div>
    </div>)
}
export default AddToCart;