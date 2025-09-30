import React from 'react';

const RunnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="8" cy="4" r="2" />
    <path d="M10 18H6" />
    <path d="m14 14-3.3 1.8" />
    <path d="m7 10 4.5-2.5" />
    <path d="m11 18-2-4-3 1" />
    <path d="m17 21-3-5 2-3 4 1" />
  </svg>
);

export default RunnerIcon;
