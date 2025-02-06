import React from 'react';

const Button = ({ colors }) => {
  return (
    <div className="flex items-center mt-3">
      {colors.map((color, index) => (
        <button
          key={index}
          className={`w-6 h-6 rounded-full ${color.light} dark:${color.dark} mr-2`}
        ></button>
      ))}
    </div>
  );
};

export default Button;

