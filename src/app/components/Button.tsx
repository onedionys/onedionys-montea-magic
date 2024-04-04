// src/app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value }) => {
  return (
    <button className="btn" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
