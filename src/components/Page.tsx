'use client';

import { DataTools } from '@/types/cmp.tools';
import { Tools } from './Tools';
import { useEffect, useState } from 'react';

const tools: DataTools[] = [
  {
    type: 'title',
    tool_id: '123',
    data: {
      content: 'Dragon Ball Z',
      y: 1,
    },
  },
  {
    type: 'image',
    tool_id: '456',
    data: {
      content: 'https://i.pinimg.com/474x/c7/1f/81/c71f81f39045e977f617dff4806a2d3c.jpg',
      align: 'left',
      y: 3,
    },
  },
  {
    type: 'text',
    tool_id: '789',
    data: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro quidem commodi eligendi facilis nemo consequuntur, optio unde numquam molestias nam voluptate eveniet? Non fugit iure reprehenderit velit. Architecto, adipisci!',
      align: 'left',
      y: 2,
    },
  },
  {
    type: 'text',
    tool_id: '789',
    data: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro quidem commodi eligendi facilis nemo consequuntur, optio unde numquam molestias nam voluptate eveniet? Non fugit iure reprehenderit velit. Architecto, adipisci!',
      align: 'left',
      x: 1,
      y: 4,
    },
  },
  {
    type: 'text',
    tool_id: '789',
    data: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro quidem commodi eligendi facilis nemo consequuntur, optio unde numquam molestias nam voluptate eveniet? Non fugit iure reprehenderit velit. Architecto, adipisci!',
      align: 'left',
      x: 2,
      y: 4,
    },
  },
];

export const Page = () => {

  return (
    <section className="w-full">
      <Tools tools={tools} />
    </section>
  );
};
