import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = ({ generateICS }) => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleStartDateChange = (date) => {
    setEventDetails({ ...eventDetails, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setEventDetails({ ...eventDetails, endDate: date });
  };

  const handleGenerateICS = () => {
    // console.log('clicked')
    console.log(eventDetails)
    generateICS(eventDetails);
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" name="title" onChange={handleInputChange} />

      <label>Start Date:</label>
      <DatePicker
        selected={eventDetails.startDate}
        onChange={handleStartDateChange}
      />

      <label>End Date:</label>
      <DatePicker
        selected={eventDetails.endDate}
        onChange={handleEndDateChange}
      />

      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={eventDetails.location}
        onChange={handleInputChange}
      />

      {/* Add more input fields for date, time, location, etc. */}

      <button onClick={handleGenerateICS}>Generate ICS</button>
    </div>
  );
};

export default EventForm;
  const [eventDetails, setEventDetails] = useState({
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleStartDateChange = (date) => {
    setEventDetails({ ...eventDetails, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setEventDetails({ ...eventDetails, endDate: date });
  };

  const handleGenerateICS = () => {
    // console.log('clicked')
    console.log(eventDetails)
    generateICS(eventDetails);
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" name="title" onChange={handleInputChange} />

      <label>Start Date:</label>
      <DatePicker
        selected={eventDetails.startDate}
        onChange={handleStartDateChange}
      />

      <label>End Date:</label>
      <DatePicker
        selected={eventDetails.endDate}
        onChange={handleEndDateChange}
      />

      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={eventDetails.location}
        onChange={handleInputChange}
      />

      {/* Add more input fields for date, time, location, etc. */}

      <button onClick={handleGenerateICS}>Generate ICS</button>
    </div>
  );
};

export default EventForm;
