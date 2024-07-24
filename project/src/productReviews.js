import Products from "./products";
import Reviews from "./reviews";

function ProductsReviews() {
    return (
        <div style={{margin:20, padding:5}}>
            <h1>iPhone</h1>
            <div style={{border:"1px solid black"}}> <Products imgPath={'mobile.jpeg'}/> </div> <br/>
            <div style={{border:"1px solid black", padding:15}}>
                <h2>Product Specifications</h2>
                <p>Ceramic Shield front
                Glass back and aluminium design, capacity 512GB 15.4 cm / 6.1″ (diagonal) all‑screen OLED display 2532x1170-pixel resolution at 460 ppi HDR display</p>
            </div> <br/>
            <div style={{border:"1px solid black"}}> <Reviews/> </div>
        </div>
    )
}
export default ProductsReviews;