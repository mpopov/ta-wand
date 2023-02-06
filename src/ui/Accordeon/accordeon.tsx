import { useEffect, useMemo, useState } from 'react';
import { groupBy as groupArray } from '../../shared/utils';

interface AccordeonProps<T> {
  items: T[];
  groupBy: keyof T;
  renderItem: (item: T) => React.ReactNode;
  renderKey: (item: T) => string;
}

const Accordeon = <T extends Object>({ items, groupBy, renderItem, renderKey }: AccordeonProps<T>) => {
  const groups = useMemo(() => groupArray<T>(items, (item) => item[groupBy]), [items, groupBy]);

  //toggle groups visibility
  const [hiddenGroups, setHiddenGroups] = useState<Record<string, boolean>>({});
  const toggleGroup = (key: string) => setHiddenGroups((groups) => ({ ...groups, [key]: !groups[key] }));
  useEffect(() => setHiddenGroups({}), [items]);

  return (
    <div className=''>
      {Object.keys(groups).map((key) => (
        <div className='border-b' key={key} data-test='blocks-group'>
          <div
            className='p-1 cursor-pointer select-none bg-amber-50 text-amber-700 font-bold'
            onClick={() => toggleGroup(key)}
          >
            <span className='inline-block w-3 text-center'>{hiddenGroups[key] ? '+' : '‒'}</span>&nbsp;{key}
          </div>
          {hiddenGroups[key] || (
            <ul className='px-5 py-2'>
              {groups[key].map((item) => (
                <li className='pb-1' key={renderKey(item)}>
                  {renderItem(item)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordeon;
