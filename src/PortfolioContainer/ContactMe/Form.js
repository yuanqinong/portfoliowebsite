import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });
  
  
  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);
      
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

     // Display success alert
    toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" type="text" placeholder="Full Name" {...register("name", {required: true, message: "Please enter your name"})} />
      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
      <input type="text" placeholder="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="subject" {...register("subject", {required: true, maxLength: 20})} />
      <textarea rows="5" placeholder="message" {...register("message", {required: true})} />
      <input type="submit" />
    </form>
  );
};

export default ContactForm;