import { BrowserRouter, Route, Routes } from "react-router-dom";
import Datafetch from "./datafetching";
import Home from "./home";
import { createContext, useState } from "react";
import Profile from "./profile";
import AddToCart from "./Addtocart";

export const globalContext = createContext();
function App() {
    const [globalCount, setGlobalCount] = useState(0);
    const [globalUserObject, setGlobalUserObject] = useState({});
    const [globalIsLogin, setGlobalIsLogin] = useState(false);
    const [card, setCard] = useState([]);

    return (
        <globalContext.Provider value = {{globalCount, setGlobalCount, globalUserObject, setGlobalUserObject, globalIsLogin, setGlobalIsLogin, card, setCard}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Datafetch/>}/>
                    <Route path="/cart" element={<AddToCart/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;
