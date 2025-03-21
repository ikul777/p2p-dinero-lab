
import React from 'react';

const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle Background */}
      <circle cx="50" cy="50" r="48" fill="#121212" stroke="#e53935" strokeWidth="2" />
      
      {/* D Letter */}
      <path 
        d="M28 28H47C56.941 28 65 36.059 65 46V46C65 55.941 56.941 64 47 64H28V28Z" 
        fill="#121212" 
        stroke="#e53935" 
        strokeWidth="3"
      />
      
      {/* L Letter */}
      <path 
        d="M40 40V72H72" 
        stroke="#e53935" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Currency Symbol */}
      <path 
        d="M60 35C60 32.791 61.791 31 64 31H66C68.209 31 70 32.791 70 35V38C70 40.209 68.209 42 66 42H64C61.791 42 60 43.791 60 46V49C60 51.209 61.791 53 64 53H66C68.209 53 70 51.209 70 49" 
        stroke="#e53935" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
