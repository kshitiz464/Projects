import react from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { enableRipple } from '@syncfusion/ej2-base';
// import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';

const AppointmentBooking = () => {
    const [IsdoctorSelected, SetDoctorSelect] = useState(false);
    const [ConfirmBookingPg, SetConfirmBookingPg] = useState(false);
    const [appointmentPg, Setappointmentpg] = useState(true);
    // let IsSelected = false;
    const drList = ["Dr A", "Dr B", "Dr C", "Dr D"];
    const settBool = (e) => {
        if (e) {
            SetDoctorSelect(!IsdoctorSelected)
        }

    }

    const AppointmentDone = (stat) => {
        console.log("stat::",stat)
        Setappointmentpg(false);
        if (stat===true){
        
        return(<div>
            <h1>Appointment Booking Successful!</h1>
            <button onClick={stat==false }>Cancel Appointment</button>
        </div>)
        }
        else return <p></p>
    }
    const AppointmentForm=(e) =>{
        if (e===true){
            return (
                <div>
                <h1>Book a session</h1>
                <p>Fill in the form below to book a virtual session with your doctor</p>
                <form onSubmit={(event) => { handleSubmit(event) }}>
                    <h4>Basic info</h4>
                    <br></br>
                    <label>First Name <input></input></label><br></br>
                    <label>Last Name <input></input></label><br></br>
                    <label>Email <input></input></label><br></br>
                    <h4>Doctor</h4><br></br>
                    <label>
                        <select onChange={(event) => settBool(event)}>
                            <option value={false}>Select your doctor</option>
                            {drList.map(name => <option key={name} value={true}  > {name}</option>)}
                        </select>
                    </label>
                    <br></br>
                    {console.log("41")}
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
    
                    <button type="submit">Confirm Booking!</button>
                    <br></br>
                </form>
                </div>
            )
        }
    }

    const bookingsuccessPage=  AppointmentDone(ConfirmBookingPg);
    // const appointmentPage= AppointmentForm(appointmentPg);

    useEffect(() => { 
        
        console.log("inside useffect", IsdoctorSelected,ConfirmBookingPg) }, [IsdoctorSelected])


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", event.data).then(res => {

            if (res.status === 201) {
                console.log(res.status)
                SetConfirmBookingPg(true)
            }
        }).catch(function (error) {
            console.log(error);
            SetConfirmBookingPg(false)
            return alert("failed");

        })

    }

    
    return (
        <div>
            {/* <div>{bookingsuccessPage}</div> */}
          
           <div>{appointmentPage}</div>

        </div >
    )

}

export default AppointmentBooking;