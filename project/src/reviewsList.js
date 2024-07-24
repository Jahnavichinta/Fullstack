function List() {
    const reviewers = ['Reviewer1', 'Reviewer2', 'Reviewer3', 'Reviewer4', 'Reviewer5', 'Reviewer6'];
    const reviews = ['Good', 'Very good', 'Worst', 'Bad', 'Better', 'Not good'];
  
    return (
      <div>
        <ul>
        {reviewers.map((r, index) => (
          <dl key={index}>
            <dt><img src="user.jpeg" width={20} height={20} style={{borderRadius:"50%"}}></img><strong>{r}</strong></dt>
            <dd>{reviews[index]}</dd>
          </dl>
        ))}
        </ul>
      </div>
    );
  }
  
  export default List;
  