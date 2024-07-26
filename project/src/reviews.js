import { useRef, useState } from "react";

function Reviews() {
    const firstRef = useRef(null);
    const [reviews, setReviews] = useState('');
    const [List, setList] = useState([]);

    const addReview = () => {
        console.log("Adding Review...");
        setList([...List, reviews]);
        setReviews('');
        firstRef.current.value = '';
    }

    const inputValueChange = (event) => {
        event.preventDefault();
        console.log(firstRef.current.value);
        setReviews(firstRef.current.value);
    }

    return (
        <div>
            <div className="card" style={{ width: '1350px' }}>
                <h2>Reviews</h2>
                <div className="cardbody">
                    <input
                        type="text"
                        placeholder="Type a review"
                        ref={firstRef}
                        onChange={inputValueChange}
                        style={{ width: 800, marginRight: '15px' }}
                    />
                    <button
                        className="btn btn-dark"
                        style={{ height: '30px', backgroundColor: 'black', borderRadius: 10, color: 'white' }}
                        onClick={addReview}
                    >
                        Add Review
                    </button>
                    <ul>
                        {
                            List.map((review, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <img src="user.jpeg" alt="user" width={30} height={30} style={{ marginRight: '10px' }} />
                                    <div>
                                        <strong>Reviewer Name</strong>
                                        <br />
                                        {review}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
