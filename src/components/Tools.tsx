'use client';

import { DataTools } from '@/types/cmp.tools';
import clsx from 'clsx';
import { title } from 'process';

interface ToolsProps {
  tools: DataTools[];
}

/**
 * Tools
 * Tool
 * renderTool
 */

const Title = (props) => {
  const { data } = props.data;
  return <h1 className='font-bold text-2xl'>{data.content}</h1>;
};

const Text = (props) => {
  const { data } = props.data;
  return <p>{data.content}</p>;
};

const Image = (props) => {
  const { data } = props.data;
  return (
    <img
      src={data.content}
      alt={data.content}
    />
  );
};

const types = {
  text: Text,
  image: Image,
  title: Title
};

const RenderTool = ({ type, ...props }) => {
  const Component = types[type];

  return Component ? <Component {...props} /> : null;
};

export const Tools = ({ tools }: ToolsProps) => {

  const groupedTools: DataTools[][] = [];
  tools.forEach(tool => {
    const rowIndex = tool.data.y - 1; // Ajustar para índice base 0
    if (!groupedTools[rowIndex]) {
      groupedTools[rowIndex] = [];
    }
    groupedTools[rowIndex].push(tool);
  });

  // Ordenar as ferramentas em cada linha com base na coordenada x
  groupedTools.forEach(row => {
    row.sort((a, b) => (a.data?.x ?? 0) - (b.data?.x ?? 0));
  });

  console.log(groupedTools)

  return (
    <>
      {groupedTools.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex">
          {row.map((tool, toolIndex) => (
            <div
              key={`tool-${rowIndex}-${toolIndex}`}
              className={clsx('w-full my-1 flex hover:bg-zinc-800', {
                'justify-start text-left': tool.data.align === 'left',
                'justify-end text-right': tool.data.align === 'right',
                'justify-center text-center col-span-2': tool.data.align === 'center',
              })}
            >
              <RenderTool type={tool.type} data={tool} />
            </div>
          ))}
        </div>
      ))}
    </>
  );

};
