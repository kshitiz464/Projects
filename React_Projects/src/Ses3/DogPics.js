import {useEffect, useState} from "react";
import axios from "axios";
const li=['Random','Beagle','Boxer','Dalmatian', 'Husky']

const Dogpics = () =>  {
    const [next,setNext]=useState(0);
    const [option,setOption] = useState("https://dog.ceo/api/breeds/image/random");
    const [img,setImg]=useState();
    // console.log(option)
   
    
const handlerefresh=()=>{
    setNext(next+1)
}

const ConditionalApi=  (name) => {
    if (name==="Random"){
        setOption("https://dog.ceo/api/breeds/image/random")
    }
    else{
        const link=`https://dog.ceo/api/breed/${name.toLowerCase()}/images/random`
        setOption(link)
        
    }
}
useEffect(()=>{axios.get(option).then(res=>{
    setImg(res.data.message); 
}).catch(function(error){
    return alert("failed")
})
},[option,next]);




return(
    <div>
    {/* document.querySelector("#select1") */}
        
            <label >Select A Breed : <select id="select1" onChange={(event) => ConditionalApi(event.target.value) }
            >
                {li.map(name => <option key={name} value={name} > {name}</option>)}
            </select>  
            </label>          
       
        <br></br>
        <img src={img} style={{height:"100px",width:"100px" }}></img>
        <br></br>
        <button onClick={handlerefresh}>Next</button>
    </div>
)}

export default Dogpics;