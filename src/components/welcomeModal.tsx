import React, { useState, useEffect } from 'react';

const WelcomeModal: React.FC<{ onSubmitted: (firstName: string, lastName: string) => void }> = ({ onSubmitted }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedFirstName = localStorage.getItem('firstName');
    const savedLastName = localStorage.getItem('lastName');
    if (savedFirstName && savedLastName) {
      setFirstName(savedFirstName);
      setLastName(savedLastName);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z]{2,12}$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      setError('First name and surname must be between 2 and 12 characters long. Only characters from a-z and A-Z are accepted.');
      return;
    }

    onSubmitted(firstName, lastName);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    setError('');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl mb-4">Welcome!</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="text-sm font-semibold">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="text-sm font-semibold">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeModal;
