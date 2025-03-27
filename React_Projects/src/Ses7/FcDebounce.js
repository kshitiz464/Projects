import { useEffect,useState,useRef } from "react";
const debounce = (fn,delay) =>{
    let timeoutId;
    return function(...args) {
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => fn(...args),delay);
    }
}
const FcDebounce= () =>{        
    const [name,setName] = useState('');
    const handleSearchText = (t) => {
        console.log('Debounce', t);
    }
    const debouncedSearch = useRef(debounce(handleSearchText,500)).current;
    useEffect(()=> {
        if (name){
            debouncedSearch(name);
        }
        },[name, debouncedSearch]);
        return (
            <div>
                Hello Debounce
                <input
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
            </div>
        )
        
        
    }
    
export default FcDebounce;