function Cart({path, name, description}) {
   
    return (
        <div style={{backgroundColor:'white', boxShadow:'0px 4px 8px rgba(0,0,0,0.9)', margin:20, borderRadius:10, padding:70, paddingTop:40, paddingBottom:40}}>
            <center>
            <img src={path} alt="flower" width={100} height={100} style={{border:"2px solid black", borderRadius:"50%"}} />
            <h2>{name}<span style={{fontWeight:20, fontSize:15}}> .2nd</span></h2>
            <p>{description}</p>
            </center>
            <div style={{display:'flex', alignItems:'center'}}>
                <img src="img1.jpeg" alt = "flower" width={30} height={30} style={{borderRadius:50}}></img>
                <pre><strong> 25 connections</strong></pre>
            </div>
            <hr/>
            <center>
            <button style={{backgroundColor:"white", borderColor:"white", border:"none", color:"blue"}}><strong>Connect</strong></button>
            </center>
        </div>
    )

    
}
export default Cart;


