import React from 'react';

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653a1.5 1.5 0 012.122-1.342l11.026 6.365a1.5 1.5 0 010 2.684L6.622 19.69a1.5 1.5 0 01-2.122-1.342V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

export default PlayIcon;
