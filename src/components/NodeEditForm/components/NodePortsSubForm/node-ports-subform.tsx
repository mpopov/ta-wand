import BtnAddPort from './btn-add-port';
import BtnRemovePort from './btn-remove-port';

interface NodePortsFormProps {
  ports: string[];
  onChange: (ports: string[]) => void;
}

function NodePortsSubForm({ ports, onChange }: NodePortsFormProps) {
  const addHandler = () => {
    onChange([...ports, 'New Port']);
  };
  const removeHandler = (index: number) => {
    onChange(ports.filter((port, i) => i !== index));
  };
  const changeHandler = (index: number, value: string) => {
    const newPorts = [...ports];
    newPorts[index] = value;
    onChange(newPorts);
  };

  return (
    <div className='pl-4'>
      {ports.map((port: string, i: number) => (
        <div className='mb-3' key={i}>
          <label className='mr-2 inline-block text-gray-500 w-6 text-right'>{i + 1}.</label>
          <input
            type='text'
            value={port}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(i, e.currentTarget.value)}
            className='py-1 px-2 outline-indigo-300 rounded w-3/5'
            placeholder='Port Name'
          />
          <BtnRemovePort onClick={() => removeHandler(i)} />
          {i === ports.length - 1 && <BtnAddPort onClick={addHandler} />}
        </div>
      ))}
      {ports.length === 0 && <BtnAddPort onClick={addHandler} />}
    </div>
  );
}

export default NodePortsSubForm;
