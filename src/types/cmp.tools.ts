export type Data = {
  x?: number;
  y: number;
  width?: number;
  align?: 'left' | 'right' | 'center';
  content?: string | number;
};

export type DataTools = {
  type: string;
  tool_id: string;
  data: Data;
};
