'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from './Input';

interface TodoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleAdd: () => void;
  handleSave: (newTitle: string) => void;
  handleDelete: () => void;
}

export const TodoInput = ({
  value,
  handleAdd,
  handleDelete,
  handleSave,
  ...props
}: TodoInputProps) => {
  const [inputValue, setInputValue] = useState<TodoInputProps['value']>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleBlur = () => handleSave(inputValue);

  return (
    <Input
      classnames='w-[calc(100%-15%)] ring-0 focus:ring-none outline-none !border-none'
      value={inputValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.target.value);
      }}
      onBlur={handleBlur}
      onKeyDown={(e) => {
        switch (e.key) {
          case 'Backspace':
            if (!inputValue)
              handleDelete()
            break;
          case 'Enter':
            handleAdd()
            break;
        
          default:
            break;
        }
      }}
    autoFocus
      {...props}
    />
  );
};
