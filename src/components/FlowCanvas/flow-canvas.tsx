import { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  ReactFlowInstance,
  useNodesState,
  useEdgesState,
  useUpdateNodeInternals,
  Controls,
  Background,
  addEdge,
  Node,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Modal from '../../ui/Modal';
import CustomNode from '../CustomNode';
import NodeEditForm from '../NodeEditForm';
import useDragnDrop from '../shared/hooks/useDragnDrop';

const nodeTypes = { custom: CustomNode };

function FlowCanvas() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, nodeChangeHandler] = useNodesState([]);
  const [edges, setEdges, edgesChangeHandler] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
  const [editingNode, setEditingNode] = useState<Node | null>(null);
  const [deployStr, setDeployStr] = useState('Press Deploy to see flow string');
  const updateNodeInternals = useUpdateNodeInternals();

  const connectHandler = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  //open edit form
  const nodeClickHandler = useCallback(
    (e: React.MouseEvent, node: Node) => {
      setEditingNode(node);
    },
    [setEditingNode]
  );

  //close edit form
  const closeEditHandler = useCallback(() => setEditingNode(null), [setEditingNode]);

  //get dragndrop heandlers
  const [dragOverHandler, dropHandler] = useDragnDrop(reactFlowWrapper, reactFlowInstance, setNodes);

  //save edited node
  const saveNodeHandler = useCallback(
    (newNode: Node) => {
      //TODO: update edges
      setNodes((nodes) => nodes.map((node) => (node.id === newNode.id ? newNode : node)));
      updateNodeInternals(newNode.id);
      closeEditHandler();
    },
    [setNodes, updateNodeInternals, closeEditHandler]
  );

  //delete edited node
  const deleteNodeHandler = useCallback(
    (deletingNode: Node) => {
      //TODO: delete corresponding edges
      setNodes((nodes) => nodes.filter((node) => node.id !== deletingNode.id));
      closeEditHandler();
    },
    [setNodes, closeEditHandler]
  );

  return (
    <div className='reactflow-wrapper h-full w-full relative' ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={nodeChangeHandler}
        onEdgesChange={edgesChangeHandler}
        onConnect={connectHandler}
        onInit={setReactFlowInstance}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        onNodeClick={nodeClickHandler}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <Modal className='bg-green-50/80'>
        <div className='flex flex-col h-full overflow-hidden'>
          <div className='pb-4'>
            <button
              className='border rounded py-2 px-5 w-full bg-emerald-500 font-bold text-white'
              onClick={() => setDeployStr(JSON.stringify(reactFlowInstance?.toObject()))}
            >
              Deploy
            </button>
          </div>
          <div className='h-full overflow-y-auto'>{deployStr}</div>
        </div>
      </Modal>

      {editingNode && (
        <Modal className='bg-blue-50' onClose={closeEditHandler}>
          <NodeEditForm
            node={editingNode}
            key={editingNode.id}
            onNodeSave={saveNodeHandler}
            onNodeDelete={deleteNodeHandler}
          />
        </Modal>
      )}
    </div>
  );
}

export default FlowCanvas;
