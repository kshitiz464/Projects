import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Tencounter from "./Ses1/M4";
// import UD from "./Ses2/UserDashboard";
// import Dogpics from './Ses3/DogPics';
// import AppointmentBooking from './Ses4/AppointmentBooking';
// import FcDebounce from './Ses7/FcDebounce';
import FCContext from "./Ses9/FCContext";


 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    { /* <Counter /> */}
    {/* <App /> */}
    {/* <Tencounter /> */}
    {/* <UD /> */}
    {/* <Dogpics/> */}
    {/* <AppointmentBooking/> */}
    {/* <FcDebounce/> */}
    <FCContext/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
