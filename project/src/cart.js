function Cart({id, path, title, price , descript, category, rating, count} ) {
   
    return (
        <div style={{backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.9)', margin:20, borderRadius:10, padding:70, paddingTop:40, paddingBottom:40}}>
            <center>
            <img src={path} alt="flower" width={100} height={100} style={{border:"2px solid black", borderRadius:"50%"}} />
            <h2>{title}</h2>
            <p>{descript}</p>
            <button style={{backgroundColor:"white", borderColor:"white", border:"none", color:"blue"}}><strong>Connect</strong></button>
            </center>
        </div>
    )

    
}
export default Cart;


