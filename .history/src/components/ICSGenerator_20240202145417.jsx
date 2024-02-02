import ICAL from 'ical.js';

const ICSGenerator = ({ eventDetails }) => {
  const generateICSFile = () => {
    const jcalData = {
      '@context': 'http://www.w3.org/ns/icalendar',
      '@type': 'Event',
      // Use eventDetails to structure the event data
      // Refer to ical.js documentation for details
      'summary': eventDetails.title,
      'dtstart': eventDetails.startDate,
      'dtend': eventDetails.endDate,
      'location': eventDetails.location,
      // Add more properties as needed
    };

    const jcalString = JSON.stringify(jcalData);
    const blob = new Blob([jcalString], { type: 'text/calendar;charset=utf-8' });

    // Create a download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'event.ics';
    link.click();
    console.log(jcalString)
  };

  return (
    <div>
      <button onClick={generateICSFile}>Download ICS File</button>
    </div>
  );
};

export default ICSGenerator;
