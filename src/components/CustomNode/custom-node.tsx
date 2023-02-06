import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { getCoordPercents } from '../shared/helpers';
import { BLOCKTYPES_CLASSNAMES } from '../shared/constants';

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
        BLOCKTYPES_CLASSNAMES[type] || BLOCKTYPES_CLASSNAMES.default
      }`}
    >
      <div className='border-none rounded p-1 text-center grow'>{name}</div>
      {inputPorts.map((portName, i) => (
        <Handle
          type='target'
          position={Position.Top}
          className='text-gray-500 w-2 h-2 m-0 border-none -rotate-45'
          style={{ left: getCoordPercents(inputPorts.length, i), fontSize: '0.5rem', lineHeight: '0.2rem' }}
          id={`${portName + i}`}
          key={i}
        >
          <span className='inline-block pl-3 h-2 leading-none max-w-100'>
            <span className='inline-block max-w-100 truncate'>{portName}</span>
          </span>
        </Handle>
      ))}
      {outputPorts.map((portName, i) => (
        <Handle
          type='source'
          position={Position.Bottom}
          className='text-gray-500 w-2 h-2 border-none rotate-135 text-right'
          style={{ left: getCoordPercents(outputPorts.length, i), fontSize: '0.5rem', lineHeight: '0.2rem' }}
          id={`${portName + i}`}
          key={i}
        >
          <span className='inline-block pr-3 h-2 leading-none rotate-180'>
            <span className='inline-block max-w-100 truncate'>{portName}</span>
          </span>
        </Handle>
      ))}
    </div>
  );
}

export default memo(CustomNode);
