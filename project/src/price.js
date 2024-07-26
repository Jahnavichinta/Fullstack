
import React, { useState, useContext, useEffect } from 'react';
import { globalContext } from './App';

function Price() {
    const { card } = useContext(globalContext);
    const { globalCount, setGlobalCount } = useContext(globalContext);
    const [mrp, setMrp] = useState(card.price);
    const [number, setNumber] = useState(1);
    const [number1, setNumber1] = useState(card.price);

    useEffect(() => {
        console.log("Mounted");
        console.log(number);
        console.log(number + 1);
        console.log(mrp * number);
        return () => {
            console.log("Unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Updated!!!");
    }, [number, number1]);

    const funcBtnClick = () => {
        console.log("Button Clicked");
        if (number > 1) {
            setNumber(prevNumber => {
                const newNumber = prevNumber - 1;
                setNumber1(mrp * newNumber);
                setGlobalCount(globalCount - 1);
                return newNumber;
            });
        }
    };

    const funcBtnClick1 = () => {
        console.log("Button Clicked");
        setNumber(prevNumber => {
            const newNumber = prevNumber + 1;
            setNumber1(mrp * newNumber);
            setGlobalCount(globalCount + 1);
            return newNumber;
        });
    };

    return (
        <div>
            <p>
                Price: Rs. {mrp} 
            </p>
            <p>    
                Total: Rs. {number1}
            </p>
            <div>
                <div style={{ display: "flex" , marginTop:-15}}>
                    <button
                        className="btn btn-primary"
                        onClick={funcBtnClick}
                        style={{ margin: 20, padding: 5 }}>
                        <strong>-</strong>
                    </button>
                    <h3>{number}</h3>
                    <button
                        className="btn btn-primary"
                        onClick={funcBtnClick1}
                        style={{ margin: 20, padding: 5 }}>
                        <strong>+</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Price;
