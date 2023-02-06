import { BlockTypes } from './types';

export const DRAG_DATA_LABEL = 'drag-data';

export const BLOCKTYPES_CLASSNAMES: Record<string, string> = {
  [BlockTypes.NEST]: 'bg-orange-200',
  [BlockTypes.SAP_RFC]: 'bg-teal-200',
  [BlockTypes.TYPE1]: 'bg-blue-200',
  [BlockTypes.TYPE2]: 'bg-violet-200',
  default: 'bg-zinc-200',
};