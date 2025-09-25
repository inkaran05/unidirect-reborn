// src/components/Icon.jsx
import React from 'react';

const Icon = ({ name, className }) => {
  const icons = {
    search: <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />,
    mousePointer: <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.223-2.926-5.223 2.926-3.335-1.855A2.25 2.25 0 0 0 6 6.666l.955 5.728-4.267 3.018a2.25 2.25 0 0 0-1.121 2.042l.636 5.891a2.25 2.25 0 0 0 2.224 2.013l5.89-1.121a2.25 2.25 0 0 0 2.042-1.121Z" />,
    checkCircle: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  };
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>{icons[name]}</svg>;
};

export default Icon;
