import { ReactFlowProvider } from 'reactflow';
import FlowCanvas from '../../components/FlowCanvas';
import BlocksPanel from '../../components/BlocksPanel';
import Header from '../../ui/Header';
import { blocksList } from '../../mock-data';

export default function MainPage() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <Header />
      <div className='flex divide-x grow overflow-hidden'>
        <ReactFlowProvider>
          <aside className='shrink-0 w-52'>
            <BlocksPanel blocks={blocksList}/>
          </aside>
          <div className='grow'>
            <FlowCanvas />
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
}
