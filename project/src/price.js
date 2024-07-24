import React from "react";
class Price extends React.Component {
    name = "Rs."
    count = 0;
    constructor() {
        super();
        this.state = {mrp : 70000, number:1, number1 : 70000};
        console.log("Constructured is called");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
        console.log(this.mrp * this.state.number );
    }
    componentWillUnmount(){
        console.log("Unmounted");
    }
    componentDidUpdate(){
        console.log("Updated!!!");
    }
    funcBtnClick = () =>{
        console.log("Button Clicked");
        if( this.state.number > 1) {
            console.log(this.count - 1);
            this.setState({number : this.state.number - 1});
            this.setState({number1 : this.state.mrp * (this.state.number-1)});
        }
    }
    funcBtnClick1 = () =>{
        console.log("Button Clicked");
        console.log(this.count + 1);
        this.setState({number : this.state.number + 1});
        this.setState({number1 : this.state.mrp * (this.state.number+1)});
    }

    render() {
        return (
            <div>
                <h3> {this.name} {this.state.number1} </h3>
                <div style={{display:'flex'}}>
                    <button className = "btn btn-primary" onClick = {this.funcBtnClick} style={{margin:15, padding:5}}><strong>-</strong></button>
                    <h3> {this.state.number}</h3>
                    <button className = "btn btn-primary" onClick = {this.funcBtnClick1} style={{margin:15, padding:5}}><strong>+</strong></button>
                </div>
            </div>
        );
    }
}
export default Price;