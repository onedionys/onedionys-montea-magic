// src/app/components/Display.tsx
import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value}</div>;
};

export default Display;
