import { useRef , useState} from "react";

function Reviews() {
    const firstRef = useRef(null);
    const[reviews,setReviews] = useState('');
    const[List,setList] = useState([]);
    const addReview = () => {
        console.log("Adding Review...");
        setList([...List,reviews]);
        setReviews('');
        firstRef.current.value = '';
    }
    const inputValueChange = (event) => {
        event.preventDefault();
        console.log(firstRef.current.value);
        setReviews(firstRef.current.value);
    }
    return (<div>
        <div className = "card" style = {{width : '1350px'}}>
                <h4>Reviews</h4>
                <div className = "cardbody">
                <input type = "text" placeholder = "Type a review" ref = {firstRef} onChange = {inputValueChange} style = {{ width : '1200px',marginRight :'15px'}}></input>
                <button className="btn btn-dark" style = {{ height : '30px'}} onClick = {addReview}>Add Review</button>
                
                <ul>
                {   
                    List.map(
                        (review,index) => <li key = {index}>
                        <strong>Reviewer Name</strong>
                        <br/>
                        {review}
                        </li>
                        )
                }
                </ul>
                </div>
            </div>
    </div>);
}
export default Reviews;


