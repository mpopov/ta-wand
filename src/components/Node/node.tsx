import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { BlockTypes } from '../shared/types';

const CLASSNAMES: Record<string, string> = {
  [BlockTypes.NEST]: 'bg-orange-200',
  [BlockTypes.SAP_RFC]: 'bg-teal-200',
  default: 'bg-zinc-200',
};

interface CustomNodeProps {
  data: {
    name: string;
    type: string;
    inputPorts: string[];
    outputPorts: string[];
  };
}

function CustomNode({ data: { name, type, inputPorts, outputPorts } }: CustomNodeProps) {
  return (
    <div
      className={`cursor-grab w-40 border border-gray-400 p-0 rounded flex whitespace-nowrap overflow-clip text-md ${
        CLASSNAMES[type] || CLASSNAMES.default
      }`}
    >
      <div className='border-none rounded p-1 text-center grow'>{name}</div>
      {inputPorts.map((portName) => (
        <Handle type='target' position={Position.Top} />
      ))}
      {outputPorts.map((portName) => (
        <Handle type='source' position={Position.Bottom} />
      ))}
    </div>
  );
}

export default memo(CustomNode);
