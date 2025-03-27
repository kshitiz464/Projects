import {useContext} from "react";
import {DataContext} from "./FCContext";

const FCChildTwo = () =>{
    const count = useContext(DataContext);
    // console.log( 'count',count);
    
    return <p>I am just a child of FCChildOne: {count.name}</p>
};
export default FCChildTwo;