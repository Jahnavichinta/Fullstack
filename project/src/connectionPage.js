import Cart from "./cart";

function ConnectionPage() {
    return (
        <div style={{display:'flex', flexFlow:'row wrap'}}> 
            <Cart path={'girl1.jpeg'} name={'Grace'} description={'Software Developer'} />
            <Cart path={'boy2.jpeg'} name={'Annie'} description={'Manager'}/>
            <Cart path={'boy1.jpeg'} name={'Steve Jobs'} description={'Software Developer'} />
            <Cart path={'girl1.jpeg'} name={'Annie'} description={'Manager'}/>
            <Cart path={'boy2.jpeg'} name={'peter'} description={'Software Developer'} />
            <Cart path={'girl2.jpeg'} name={'Annie'} description={'Manager'}/>
            <Cart path={'boy1.jpeg'} name={'Steve'} description={'Software Developer'} />
            <Cart path={'girl1.jpeg'} name={'Annie'} description={'Manager'}/>
        </div>
    );
}
export default ConnectionPage;
