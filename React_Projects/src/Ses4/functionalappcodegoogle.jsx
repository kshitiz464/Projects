import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Date picker library

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '', // Added email field
    doctor: '',
    appointmentType: '', // Appointment type (Google Meet or Phone)
    appointmentDate: null, // Appointment date
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // Track submission status

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    setIsSubmitted(true); // Set submitted state to true for loading message

    const { firstName, lastName, email, doctor, appointmentType, appointmentDate } = formData;

    // Prepare data for the POST request (modify as needed)
    const data = {
      title: firstName,
      doctor,
      appointmentType,
      appointmentDate: appointmentDate ? appointmentDate.toISOString() : null, // Convert date to ISO string if available
      email, // Include email in the data
    };

    // Modified API endpoint for JSONPlaceholder
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await axios.post(url, data);
      console.log('Submission successful:', response.data);

      if (response.status === 201) {
        setSubmissionStatus('success'); // Set success status
      } else {
        setSubmissionStatus('error'); // Set error status (optional)
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error'); // Set error status (optional)
    } finally {
      setIsSubmitted(false); // Reset submitted state after completion
    }
  };

  const handleChange = (event) => {
    if (event.target.type === 'date') {
      setFormData({ ...formData, appointmentDate: new Date(event.target.value) });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleCancelAppointment = () => {
    setIsSubmitted(false); // Reset submitted state to show the form again
    setSubmissionStatus(null); // Reset submission status
    setFormData({ // Reset form data
      firstName: '',
      lastName: '',
      email: '',
      doctor: '',
      appointmentType: '',
      appointmentDate: null,
    });
  };

  // ** The return function for the component is intentionally left blank. 
  // Refer to the provided separate response for the return function content. 
  // **

  
}
export default App;