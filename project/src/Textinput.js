
function Text() {
    const handleInput = (event) => {
        console.log(event.target.value);
    }
    const handleSubmit = (event) => {
        console.log(event.target.value);
    }
    return (
        <div style={{marginLeft:25}}>
            <input
                type="text"
                onChange={handleInput}
                placeholder="Enter your review"
            />
            <button onClick={handleSubmit} style={{margin:20}}>Submit</button>
        </div>
    );
}

export default Text;
