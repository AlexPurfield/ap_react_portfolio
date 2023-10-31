import { useState } from 'react';
import '../style/Contact.css';
import { validateEmail } from '../utils/helpers'; // You only need to import validateEmail

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); // Corrected the state variable name
  const [message, setMessage] = useState(''); // Corrected the state variable name
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value); // Corrected the state variable name
    } else {
      setMessage(value); // Corrected the state variable name
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }

    if (!message) { // Corrected the check for an empty message
      setErrorMessage('Please leave a message before submitting!');
      return;
    }

    alert(`Thank you for reaching out, ${name}! I will be in contact with you soon about your message.`);

    setErrorMessage(''); // Clear the error message
    setName(''); // Clear the name input
    setMessage(''); // Clear the message input
    setEmail(''); // Clear the email input
  };

  return (
    <div className="container text-left">
      <h1 className="display-4 text-pink"> Contact Me! </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button className= "light-grey-button" type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

