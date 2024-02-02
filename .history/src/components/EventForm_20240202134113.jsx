import React, { useState } from 'react';

const EventForm = ({ generateICS }) => {
  const [eventDetails, setEventDetails] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleGenerateICS = () => {
    generateICS(eventDetails);
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" name="title" onChange={handleInputChange} />

      {/* Add more input fields for date, time, location, etc. */}

      <button onClick={handleGenerateICS}>Generate ICS</button>
    </div>
  );
};

export default EventForm;
