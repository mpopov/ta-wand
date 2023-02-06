import { useCallback } from 'react';
import { ReactFlowInstance, Node } from 'reactflow';
import { DRAG_DATA_LABEL } from '../constants';
import { generateId } from '../helpers';

function useDragnDrop(
  reactFlowWrapper: React.MutableRefObject<null>,
  reactFlowInstance: ReactFlowInstance | null,
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>,
) {

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const wrapper: HTMLElement = reactFlowWrapper.current;
      const reactFlowBounds: DOMRect = wrapper.getBoundingClientRect();
      const data = JSON.parse(e.dataTransfer.getData(DRAG_DATA_LABEL));

      const position = reactFlowInstance.project({
        x: e.clientX - reactFlowBounds.left,
        y: e.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: generateId(),
        type: 'custom',
        position,
        data,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, reactFlowWrapper, setNodes]
  );

  return [onDragOver, onDrop];
}

export default useDragnDrop;
