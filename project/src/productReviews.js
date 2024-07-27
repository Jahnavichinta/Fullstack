import { useContext } from "react";
import Navigation from "./navigation";
import Reviews from "./reviews";
import StarRating from "./starRating";  
import { globalContext } from "./App";

function ProductsReviews() {
    const { setCard } = useContext(globalContext);
    const { globalCount, setGlobalCount } = useContext(globalContext);
    const { globalPrice, setGlobalPrice } = useContext(globalContext);
    const { data } = useContext(globalContext);

    const addToCart = () => {
        const obj = {
            id: data.id,
            path: data.path,
            title: data.title,
            price: data.price,
            descript: data.descript,
            category: data.category,
            rating: data.rating,
            count: data.count,
            quantity: 1
        };
        setCard((prevCards) => {    
            const existingProduct = prevCards.find((product) => product.id === obj.id);
            if (existingProduct) {
                const updatedCards = prevCards.map((product) =>
                    product.id === obj.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
                setGlobalPrice(globalPrice + obj.price);
                return updatedCards;
            } else {
                setGlobalPrice(globalPrice + obj.price);
                return [...prevCards, obj];
            }
        });
        setGlobalCount(globalCount + 1);
    };

    return (<div>
        <Navigation />
        <div style={{ margin: 70, padding: 5 , marginTop:5}}>
            
            <div style={{ backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0,0,0,0.9)', margin: 20, borderRadius: 10, padding: 50, paddingTop: 20, paddingBottom: 20, display: 'flex' }}>
                <img src={data.path} alt="pic" width={130} height={150} />
                <div style={{ marginLeft: 20 }}>
                    <h3>{data.title}</h3>
                    <p>Category: {data.category}</p>
                    <p>Price: Rs.{data.price}</p>
                    <StarRating rating={data.rating} />  
                    <p>{data.count} orders</p>
                    <center>
                    <button onClick={addToCart} style={{ backgroundColor: 'white', border: "0.2px solid black", width: 200, height: 30 }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 40 }}>
                            <img src="cartSymbol.jpeg" alt="cart" width={30} height={25}></img>Add to cart
                        </div>
                    </button>
                </center>
                </div>
            </div>
            
            <div style={{ backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0,0,0,0.9)', margin: 20, borderRadius: 10, padding: 50, paddingTop: 20, paddingBottom: 20 }}>
                <h2>Product specifications</h2>
                <p>{data.descript}</p>
            </div> 
            <div style={{ backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0,0,0,0.9)', margin: 20, borderRadius: 10, padding: 50, paddingTop: 20, paddingBottom: 20, display: 'flex' }}> <Reviews /> </div>
        </div>
        </div>
    );
}

export default ProductsReviews;
