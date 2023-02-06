import CustomNode from '../CustomNode';
import { IBlock } from '../shared/types';
import { DRAG_DATA_LABEL } from '../shared/constants';

interface BlockProps {
  block: IBlock;
}

function Block({ block }: BlockProps) {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData(DRAG_DATA_LABEL, JSON.stringify(block));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div onDragStart={onDragStart} draggable>
      <CustomNode data={{...block, inputPorts: [], outputPorts: []}} />
    </div>
  );
}

export default Block;
