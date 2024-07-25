import { useRef } from "react";
import List from "./reviewsList";

function Reviews() {
    const firstRef = useRef(null);
    const formSubmit = (event) => {
        event.preventDefault();
        console.log("form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value = "";
    }
    return (<div>
        <form onSubmit={formSubmit}>
            <input type="text" ref={firstRef}/>
            <button type="submit">Submit</button>
        </form>
        <div><List/></div>
    </div>);
}
export default Reviews;
