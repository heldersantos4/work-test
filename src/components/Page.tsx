'use client';

import { DataTools } from '@/types/cmp.tools';
import { Tools } from './Tools';
import { useEffect, useState } from 'react';

const tools: DataTools[] = [
  {
    type: 'text',
    tool_id: '123',
    data: {
      content: 'HELLO WORLD!',
      x: 1,
      y: 0,
    },
  },
  {
    type: 'image',
    tool_id: '456',
    data: {
      content: 'https://i.pinimg.com/474x/c7/1f/81/c71f81f39045e977f617dff4806a2d3c.jpg',
      align: 'center',
      y: 1,
    },
  },
  {
    type: 'text',
    tool_id: '789',
    data: {
      content: 'I <3 U (:',
      align: 'left',
      x: 2,
      y: 0,
    },
  },
];

export const Page = () => {

  const [maxCols, setMaxCols] = useState<number>(1);

  useEffect(() => {
    let maxColumns:number = tools.reduce((max, tool) => {
      return (tool.data.x ?? 0) > max ? tool.data.x ?? 0 : max;
    }, 0);

    setMaxCols(maxColumns);
  }, [tools]);
    
  return (
    <section
      className='w-full grid gap-1 md:grid-cols-4'
      style={{
        gridTemplateColumns: `repeat(${maxCols}, minmax(0, 1fr))`,
      }}
    >
      <Tools tools={tools} />
    </section>
  );
};
