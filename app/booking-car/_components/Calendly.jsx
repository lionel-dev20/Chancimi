import React from "react";

function Calendly() {
  return (
    <div className="max-w-7xl flex items-center justify-center h-screen mx-auto">
      <iframe className="bg-white shadow-md rounded px-4 pb-6 mb-2 sm:px-9 pt-6 sm:pb-8 sm:mb-4"
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kuv-AWWwWHmvyMPbWHxJ9R675S3RTFX4KBl_4W4lm1fte8uXdrVe5LLexPwC-RzJmAPFKSFiN?gv=true"
        width="100%"
        height="720"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Calendly;
