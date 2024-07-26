function Payment() {
   return (
    <div style={{padding:20}} >
                <center><h1>
                    Payment
                </h1></center>
            <div style={{ margin: 'auto', width: 350, border: '1px solid black', padding: 30, paddingTop: 20, borderRadius: 10, marginTop: 20 }}>
                <h3>Enter your card details</h3>
                <form>
                <label>Card Number</label> <br/><br/>
                <input type="text" placeholder="card number" style={{ border: '1px solid black', padding: 5, width:350 }}></input> <br/><br/>
                <label>Card Name</label> <br/><br/>
                <input type="text" placeholder="card name" style={{ border: '1px solid black', padding: 5, width:350 }}></input> <br/><br/>
                <label>Expiry Date</label> <br/><br/>
                <input type="text" placeholder="Expiry date" style={{ border: '1px solid black', padding: 5, width:350 }}></input> <br/><br/>
                <label>CVV</label> <br/><br/>
                <input type="text" placeholder="CVV" style={{ border: '1px solid black', padding: 5, width:350 }}></input> <br/><br/><br/>
                <center><button style={{width:150, height:'30', borderRadius:10, color:'white', backgroundColor:'black'}}>Place Order</button></center>

                </form>
            </div>
        
    </div>
   )
}
export default Payment;