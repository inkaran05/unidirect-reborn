// src/components/Icon.jsx
import React from 'react';

// A simple component to render different SVG icons based on a name prop
const Icon = ({ name, className }) => {
  const icons = {
    search: <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />,
    mousePointer: <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-1.5m18 0v-1.5m0-15V3M12 3v1.5m0 16.5V21m-9-9h1.5m16.5 0H21m-12-9v18" />,
    checkCircle: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {icons[name]}
    </svg>
  );
};

export default Icon;
