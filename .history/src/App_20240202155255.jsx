import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import EventForm from "./components/EventForm";
import ICSGenerator from "./components/ICSGenerator";

function App() {
  // const [count, setCount] = useState(0);
  const [generatedICS, setGeneratedICS] = useState(null);

  // Set the generated ICS data using setGeneratedICS
  const generateICS = (eventDetails) => {
    // Use eventDetails to generate ICS data
    const { title, startDate, endDate, location } = eventDetails;

    // For simplicity, let's use a simple example
//     const icsData = `BEGIN:VCALENDAR
// VERSION:2.0
// BEGIN:VEVENT
// SUMMARY:${eventDetails.title}
// DTSTART:${eventDetails.startDate
//       .toISOString()
//       .replace(/[-:]/g, "")
//       .replace(/\.\d{3}/, "")}Z
// DTEND:${eventDetails.endDate
//       .toISOString()
//       .replace(/[-:]/g, "")
//       .replace(/\.\d{3}/, "")}Z
// LOCATION:${eventDetails.location}
// DESCRIPTION:Generated by React ICS Generator App
// END:VEVENT
// END:VCALENDAR`;
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${startDate
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}Z
DTEND:${endDate
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}Z
LOCATION:${location}
DESCRIPTION:Generated by React ICS Generator App
END:VEVENT
END:VCALENDAR`;
const icsExample=`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bevy Labs//Bevy//
METHOD:REQUEST
BEGIN:VEVENT
SUMMARY:Introduction au Salesforce Commerce Cloud
DTSTART;VALUE=DATE-TIME:20240217T133000Z
DTEND;VALUE=DATE-TIME:20240217T170000Z
DTSTAMP;VALUE=DATE-TIME:20240130T205651Z
UID:salesforce/44484/Event/Bevy
SEQUENCE:1706648211
ATTENDEE;CN="Abdelilah AKHMIM";PARTSTAT=ACCEPTED;ROLE=REQ-PARTICIPANT;RSVP
 =TRUE:MAILTO:akhmim.abdelilah@gmail.com
DESCRIPTION:Plongez dans l'univers de Salesforce Commerce Cloud et explore
 z ses produits essentiels tels que B2C\, B2B\, D2C et OMS. Découvrez les 
 fondamentaux\, astuces et bonnes pratiques de cette plateforme puissante p
 our optimiser les opérations e-commerce de vos clients.
LOCATION:Commons Zerktouni\, 179\, Angle des Boulevards de Londres et de l
 a Résistance\, Casablanca\, 20250
PRIORITY:5
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR"`

    setGeneratedICS(icsData);
  };
  return (
    <>
      <h1>React ICS Generator App</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
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
