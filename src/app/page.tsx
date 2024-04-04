// src/app/page.tsx
import React, { useState } from 'react';
import { Button, Display } from './components';

const CalculatorPage: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('');

  const handleClick = (val: string) => {
    if (val === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (val === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(prevValue => prevValue + val);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((val, index) => (
          <Button key={index} value={val.toString()} onClick={() => handleClick(val.toString())} />
        ))}
      </div>
    </div>
  );
};

export default CalculatorPage;
