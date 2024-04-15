'use client';

import { DataTools } from "@/types/cmp.tools";

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
  return <img src={data.content} alt={data.content} />;
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
  return tools.map((tool, key) => {
    return (
      <div
        key={`${tool.tool_id}-${key}`}
        className='bg-yellow-300 w-full my-1'
      >
        <RenderTool
          type={tool.type}
          data={tool}
        />
      </div>
    );
  });
};
