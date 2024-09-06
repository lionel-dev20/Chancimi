"use client"; // Assure-toi que cette directive est en haut

import React, { useEffect } from 'react'; // Import de React et useEffect

function Calendly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Nettoyage du script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/lioneledafabrice-a/cours-auto-pratique?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '700px' }} // Utilise style avec des doubles accolades pour le JSX
    ></div>
  );
}

export default Calendly;
