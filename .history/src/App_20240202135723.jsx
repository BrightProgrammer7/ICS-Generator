import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import EventForm from "./components/EventForm";
import ICSGenerator from "./components/ICSGenerator";

function App() {
  const [count, setCount] = useState(0);
  const [generatedICS, setGeneratedICS] = useState(null);

  // Set the generated ICS data using setGeneratedICS
  const generateICS = (eventDetails) => {
    // Use eventDetails to generate ICS data
    // For simplicity, let's use a simple example
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
DTSTART:${eventDetails.startDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")}Z
DTEND:${eventDetails.endDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")}Z
LOCATION:${eventDetails.location}
DESCRIPTION:Generated by React ICS Generator App
END:VEVENT
END:VCALENDAR`;

    setGeneratedICS(icsData);
  };
  return (
    <>
      <h1>React ICS Generator App</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <EventForm generateICS={generateICS} />
        {generatedICS && <ICSGenerator eventDetails={generatedICS} />}
      </div>
    </>
  );
}

export default App;
