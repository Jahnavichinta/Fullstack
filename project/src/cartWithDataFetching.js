import { useContext } from "react";
import { globalContext } from "./App";

function Cart({id, path, title, price, descript, category, rating, count}) {
    const {setCard} = useContext(globalContext);
    const {globalCount, setGlobalCount} = useContext(globalContext);
   const func = () => {
        const obj = {
            id, path, title, price, descript, category, rating, count
        }
        setGlobalCount(globalCount+1);
        // setCard(obj);
        setCard((prevCards) => [...prevCards, obj]);
    }
    return (
        <div style={{backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.9)', margin:20, borderRadius:10, padding:40, paddingTop:20, paddingBottom:40, width:210}}>
            <img src="wishlistSymbol.jpeg" alt="wishlist" width={40} height={40} style={{float:'right'}}/>
            <br/>
            <center>
            <img src={path} alt="flower" width={150} height={150} />
            <h4>{title}</h4>
            
            </center>
            <div style={{display:'flex'}}>
                <img src="ratings.jpeg" alt="ratings" width={110} height={40}/> 
                <p>{count}</p>
            </div>
            <h4>Rs.{price}</h4>
            <center><button onClick={func} style={{backgroundColor:'white', border:"0.2px solid black", width:200, height:30}}><div style={{display:'flex', alignItems:'center', marginLeft:40}}><img src="cartSymbol.jpeg" alt="cart" width={30} height={25}></img>Add to cart</div></button></center>
        </div>
    )
}
export default Cart;


