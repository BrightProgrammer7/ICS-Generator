import ICAL from 'ical.js';

const ICSGenerator = ({ eventDetails }) => {
  const generateICSFile = () => {
    const jcalData = {
      // Use eventDetails to structure the event data
      // Refer to ical.js documentation for details
    };

    const jcalString = JSON.stringify(jcalData);
    const blob = new Blob([jcalString], { type: 'text/calendar;charset=utf-8' });

    // Create a download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'event.ics';
    link.click();
  };

  return (
    <div>
      <button onClick={generateICSFile}>Download ICS File</button>
    </div>
  );
};

export default ICSGenerator;
