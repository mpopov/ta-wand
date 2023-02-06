import { useMemo, useState } from 'react';
import { Node } from 'reactflow';
import { BlockTypes, IBlock } from '../shared/types';
import NodePortsSubForm from './components/NodePortsSubForm';

interface NodeEditFormProps {
  node: Node;
  onNodeSave: (newNode: Node) => void;
  onNodeDelete: (node: Node) => void;
}

function NodeEditForm({ node, onNodeSave, onNodeDelete }: NodeEditFormProps) {
  const [data, setData] = useState<IBlock>(node.data);
  const { name, type, inputPorts = [], outputPorts = [] } = data;
  const types = useMemo(() => Object.keys(BlockTypes) as Array<keyof typeof BlockTypes>, []);

  const getChangeHandler = (key: any) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setData({ ...data, [key]: e.target.value });
  const getChangePortsHandler = (key: any) => (ports: string[]) => {
    setData({ ...data, [key]: ports });
  };
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onNodeSave({ ...node, data });
  };
  const deleteHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onNodeDelete(node);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <input
            type='button'
            onClick={deleteHandler}
            value='Delete'
            className='border border-gray-300 rounded py-1 px-5 cursor-pointer'
          />
        </div>
        <div className='mb-3'>
          <label className='block mb-1 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            className='w-full py-1 px-2 outline-indigo-300 rounded'
            placeholder='Name'
            onChange={getChangeHandler('name')}
          />
        </div>
        <div className='mb-3'>
          <label className='block mb-1 text-gray-500'>Type</label>
          <select
            value={type}
            title='type'
            className='w-full py-1 px-2 pr-5 outline-indigo-300 rounded'
            placeholder='Type'
            onChange={getChangeHandler('type')}
          >
            {types.map((key) => (
              <option className='block p-2' value={BlockTypes[key]} key={key}>
                {BlockTypes[key]}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-2'>
          <label className='block mb-1 text-gray-500'>Inputs</label>
          <NodePortsSubForm ports={inputPorts} onChange={getChangePortsHandler('inputPorts')} />
        </div>
        <div className='mb-2'>
          <label className='block mb-1 text-gray-500'>Outputs</label>
          <NodePortsSubForm ports={outputPorts} onChange={getChangePortsHandler('outputPorts')} />
        </div>
        <div className='mb-2 pt-4'>
          <button className='border rounded py-2 px-5 w-full bg-indigo-400 font-bold text-white'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default NodeEditForm;
