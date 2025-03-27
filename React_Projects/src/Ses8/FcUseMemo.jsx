import { useState, useMemo } from "react";
const expensiveCalculation = (n) => {
    console.log("exp calc");
    return n+1;

};

const FCUseMemo =() =>{
    const [numberOne,setNumberOne]= useState(1);
    const [numberTwo,setNumberTwo]= useState(1);
    const calculation= useMemo (()=>
        expensiveCalculation(numberOne),[numberOne]
    );
    return (
        <div>
            <p>Number One: {numberOne}</p>
            <p>Number Two: {numberTwo}</p>
            <p>Calculation: {calculation}</p>
            <button onClick={()=> setNumberOne(numberOne+1)}>Update Number One</button>
            <button onClick={()=> setNumberTwo(numberTwo+1)}>Update Number Two</button>
            
        </div>
    );
};

export default FCUseMemo;