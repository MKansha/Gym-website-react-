import React, { useState ,useEffect} from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
  });
  const [formErrors,setFormErrors]=useState({})
  const [isSubmit,setIssubmit]=useState( false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,[name]: value
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData))
    setIssubmit(true);
    // console.log(formData);
  };
 useEffect(()=>
{
  console.log(formErrors);
  
  if(Object.keys(formErrors).length==0 && isSubmit)
  {
    console.log(formData);
    
  }
},[formErrors])
const validate = (values) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactPattern = /^\d{10}$/;
  if (!values.firstName) {
    errors.firstName = "First name is required!";
  } else if (values.firstName.length > 10) {
    errors.firstName = "First name cannot exceed more than 10 characters.";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.contact) {
    errors.contact = "Contact is required!";
  } else if (!contactPattern.test(values.contact)) {
    errors.contact = "Contact must be a valid 10-digit number.";
  }


  return errors;
};





  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
    });
  };

  return (
    <div className="body1">
      <div className='container1'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name*:</label>
          <input
            type="text"
            placeholder='Enter First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <p className="error">{formErrors.firstName}</p>
          <label htmlFor="lastName">Last Name*:</label>
          <input
            type="text"
            placeholder='Enter Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
           <p className="error">{formErrors.lastName}</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder='Enter Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
           <p className="error">{formErrors.email}</p>
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            placeholder='Enter Phone #'
            name='contact'
            value={formData.contact}
            onChange={handleChange}
          />
           <p className="error">{formErrors.contact}</p>
          <label htmlFor="gender">Gender*:</label>
          <input
            type="radio"
            name='gender'
            value='Male'
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name='gender'
            value='Female'
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          /> Female
          <input
            type="radio"
            name='gender'
            value='Other'
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          /> Other

         <div className="btn-group">
         <button className='btn1' type='button' onClick={handleReset}>Reset</button>
         <button className='btn1' type='submit'>Submit</button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
