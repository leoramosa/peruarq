import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
const useForm = (callback, validate) => {

  const frmContact = { username:'', email:'', dni:'', celular:'', asunto:'', message:'' };
  const [values, setValues] = useState(frmContact);


  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };


  const handleSubmit = e =>{
    e.preventDefault();
   
  emailjs.send('service_02qojlj','template_fdtao0w', values, 'user_aTS1qTMZtfPMABT0DsDFw')
  .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setErrors(validate(values));
    setIsSubmitting(true);
  }, (err) => {
         console.log('FAILED...', err);
  });
  e.target.reset()
 }


  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        
      }
    },
    [errors, callback, isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors};
};

export default useForm;