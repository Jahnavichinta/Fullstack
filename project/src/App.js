
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cart from './cartWithDataFetching';
import ProductsReviews from './productReviews';
import AddToCart from './Addtocart';
import Home from './home'; 
import Profile from './profile';
import Datafetch from './datafetching';
import Payment from "./payment";
export const globalContext = React.createContext();

function App() {
    const [card, setCard] = useState([]);
    const [globalCount, setGlobalCount] = useState(0);
    const [globalPrice, setGlobalPrice] = useState(0);
    const [data, setData] = useState({});
    const [globalIsLogin, setGlobalIsLogin] = useState(false);
    const [globalUserObject, setGlobalUserObject] = useState({});

    return (
        <globalContext.Provider value={{
            card, setCard,
            globalCount, setGlobalCount,
            globalPrice, setGlobalPrice,
            data, setData,
            globalIsLogin, setGlobalIsLogin,
            globalUserObject, setGlobalUserObject
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/cart" element={<AddToCart />} />
                    <Route path="/product-reviews" element={<ProductsReviews />} />
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/products" element={<Datafetch/>}/>
                    <Route path="/order-confirmation" element={<Payment/>}/>
                </Routes>
            </Router>
        </globalContext.Provider>
    );
}

export default App;
