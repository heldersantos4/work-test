'use client';

import { DataTools } from '@/types/cmp.tools';
import clsx from 'clsx';

interface ToolsProps {
  tools: DataTools[];
}

/**
 * Tools
 * Tool
 * renderTool
 */

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
};

const RenderTool = ({ type, ...props }) => {
  const Component = types[type];

  return Component ? <Component {...props} /> : null;
};

export const Tools = ({ tools }: ToolsProps) => {
  return tools
    .sort((a, b) => (a.data?.y ?? 0) - (b.data?.y ?? 0))
    .map((tool, key) => {
      const { align, width, x, y } = tool.data;
      return (
        <div
          key={`${tool.tool_id}-${key}`}
          className={clsx('w-full my-1 flex hover:bg-zinc-800 bg-zinc-800', {
            'justify-start text-left': align == 'left',
            'justify-end text-right': align == 'right',
            'justify-center text-center col-span-2': align == 'center',
            'col-span-4': !x,
          })}
          style={{
            gridColumn: x,
          }}
        >
          <RenderTool
            type={tool.type}
            data={tool}
          />
        </div>
      );
    });
};
