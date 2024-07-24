import Price from "./price";

function Products({imgPath}) {
    return (
        <div style={{display:'flex', margin:40}}>
            <img src = {imgPath}></img>
            <div style={{margin:30, marginTop:5}}>
                <h2>iPhone</h2>
                <p>Original Smartphone Compatible with Apple i-Phone 6 Gold (64 GB Storage with 1-Year Warranty)</p>
                <br/>
                <Price/>
            </div>
            
        </div>
    )
}
export default Products;