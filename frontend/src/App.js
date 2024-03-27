import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/submit', { name, email });
      alert('Data submitted successfully');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error submitting data');
    }
  };

  return (
    <div>
      <h1>User Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;