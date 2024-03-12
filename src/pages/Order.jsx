import { useState } from 'react';

const Order = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errorAddress, setErrorAddress] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPriority, setIsPriority] = useState(false);

  const validateField = (value, setErrorFunction, errorMessage) => {
    if (value.trim() === '') {
      setErrorFunction(errorMessage);
      return false;
    } else {
      setErrorFunction('');
      return true;
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.trim() === '') {
      setErrorPhone('This field is required.');
      return false;
    } else {
      const phoneRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
      if (!phoneRegex.test(phoneNumber)) {
        setErrorPhone('A valid phone number is required.');
        return false;
      } else {
        setErrorPhone('');
        return true;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateField(
      name,
      setErrorName,
      'This field is required.'
    );
    const isAddressValid = validateField(
      address,
      setErrorAddress,
      'This field is required.'
    );
    const isPhoneValid = validatePhoneNumber();
    setIsFormValid(isNameValid && isPhoneValid && isAddressValid);
    if (isFormValid) {
      console.log(
        name,
        phoneNumber,
        address,
        isPriority ? 'has priority' : 'no priority'
      );
    } else {
      console.log('form is not valid :(');
    }
  };

  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() =>
              validateField(name, setErrorName, 'This field is required.')
            }
          />
          {errorName && <span className="error-text">{errorName}</span>}
        </label>
        <label>
          Phone number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={validatePhoneNumber}
          />
          {errorPhone && <span className="error-text">{errorPhone}</span>}
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={() =>
              validateField(address, setErrorAddress, 'This field is required.')
            }
          />
          {errorAddress && <span className="error-text">{errorAddress}</span>}
        </label>
        <label>
          <input
            type="checkbox"
            checked={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
          />
          Prioritize my order
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Order;
