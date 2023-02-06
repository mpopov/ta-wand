import { useMemo, useState } from 'react';
import Accordeon from '../../ui/Accordeon';
import Filters from '../../ui/Filters';
import Block from '../Block';
import { IBlock } from '../shared/types';

interface BlocksPanelProps {
  blocks: IBlock[];
}

function BlocksPanel({ blocks }: BlocksPanelProps) {
  const [search, setSearch] = useState('');

  const displayed = useMemo(
    () => blocks.filter((block) => block.name.toLocaleLowerCase().indexOf(search) >= 0),
    [blocks, search]
  );

  return (
    <div className='flex flex-col overflow-hidden h-full'>
      <Filters onSearchChange={setSearch} />
      <div className='grow h-full overflow-y-auto'>
        <Accordeon
          items={displayed}
          groupBy={'type'}
          renderItem={(item) => <Block block={item} />}
          renderKey={(item) => item.name}
        />
      </div>
    </div>
  );
}

export default BlocksPanel;
