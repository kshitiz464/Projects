import React,{ useCallback, useEffect,useState } from "react";
import axios from "axios";

const TitleComp = ({stat,Handlerfn}) => {
    console.log("inside Title")
    return (!stat?<h1>Book A Session</h1>:<h1>Appointment Booked Successfully!</h1>)
    
    // console.log("book a session") 
    
}

const HeadlineComp = ({stat,Handlerfn}) => {
    return (!stat?<p>Fill in the form below to book a virtual session with your doctor</p>:<></>)

}
const ButtonComp = ({stat,Handlerfn}) => {
    if (stat===false){
        return <button type="submit" onClick={()=> Handlerfn()} >Confirm Booking</button>
    }
    return <button type="submit" onClick={()=> Handlerfn()}>Cancel Appointment</button>
}

const FormComp = ({stat,Handlerfn}) => {
    const drList = ["Dr A", "Dr B", "Dr C", "Dr D"];
    const [IsdoctorSelected, SetDoctorSelect] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", event.data).then(res => {

            if (res.status === 201) {
                console.log(res.status)
                Handlerfn()
            }
        }).catch(function (error) {
            console.log(error);
            return alert("failed");

        })

    }

    return (!stat?
        (<div>
            {console.log("Inside form comp, false stat")}
        <form onSubmit={(event) => { handleSubmit(event) }}>
            <h4>Basic info</h4>
            <br></br>
            <label>First Name <input></input></label><br></br>
            <label>Last Name <input></input></label><br></br>
            <label>Email <input></input></label><br></br>
            <h4>Doctor</h4><br></br>
            <label>
                <select onChange={(event) => SetDoctorSelect(event)}>
                    <option value={false}>Select your doctor</option>
                    {drList.map(name => <option key={name} value={true}  > {name}</option>)}
                </select>
            </label>
            <br></br>
            
            {IsdoctorSelected ? (
                <div>
                    <br></br>
                    <h4>When?</h4>
                    <input type="radio" /> Google Meet
                    <br></br> <input type="radio" /> Phone
                    <br></br>
                    <h4>When?
                        <input type="date" />
                    </h4>
                </div>
            ) :
                (<></>)}

            <ButtonComp stat={stat} Handlerfn={Handlerfn} />
            <br></br>
        </form>
        </div>):<ButtonComp stat={stat} Handlerfn={Handlerfn}/>
    )
}

const TempFormComp = ({stat,Handlerfn}) => {
    const drList = ["Dr A", "Dr B", "Dr C", "Dr D"];
    const [IsdoctorSelected, SetDoctorSelect] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", event.data).then(res => {

            if (res.status === 201) {
                console.log(res.status)
                Handlerfn()
            }
        }).catch(function (error) {
            console.log(error);
            return alert("failed");

        })

    }

    (!stat?
        (<div>
            {console.log("Inside form comp, false stat")}
        <form onSubmit={(event) => { handleSubmit(event) }}>
            <h4>Basic info</h4>
            <br></br>
            <label>First Name <input></input></label><br></br>
            <label>Last Name <input></input></label><br></br>
            <label>Email <input></input></label><br></br>
            <h4>Doctor</h4><br></br>
            <label>
                <select onChange={(event) => SetDoctorSelect(event)}>
                    <option value={false}>Select your doctor</option>
                    {drList.map(name => <option key={name} value={true}  > {name}</option>)}
                </select>
            </label>
            <br></br>
            
            {IsdoctorSelected ? (
                <div>
                    <br></br>
                    <h4>When?</h4>
                    <input type="radio" /> Google Meet
                    <br></br> <input type="radio" /> Phone
                    <br></br>
                    <h4>When?
                        <input type="date" />
                    </h4>
                </div>
            ) :
                (<p></p>)}

            {/* <button type="submit">Confirm Booking!</button> */}
            <br></br>
        </form>
        </div>):<p>True FormComp</p>
    )
}






const FinalComp = () => {
    const [stat,Setstat] = useState(false);
    const Handlerfn= () =>{
        Setstat(!stat)
    };
    useEffect(()=>{console.log("inside useffect",stat)},[stat]);
    return(
        <div>
            <TitleComp stat={stat}  Handlerfn={Handlerfn}/>
            <HeadlineComp stat={stat} Handlerfn={Handlerfn}/>
            <FormComp stat={stat} Handlerfn={Handlerfn}/>
            {/* <TempFormComp stat={stat} Handlerfn={Handlerfn}/> */}
            {/* <ButtonComp stat={stat} Handlerfn={Handlerfn}/> */}
        </div>
    )
}

export default FinalComp;