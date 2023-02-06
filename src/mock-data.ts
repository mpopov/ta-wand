import { BlockTypes, IBlock } from './components/shared/types';

export const blocksList: IBlock[] = [
  {
    type: BlockTypes.NEST,
    name: 'nest request',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.NEST,
    name: 'nest status',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.SAP_RFC,
    name: 'call',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.SAP_RFC,
    name: 'read table',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.TYPE1,
    name: 'Type 1 Example 1',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.TYPE1,
    name: 'Type 1 Example 2',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.TYPE1,
    name: 'Type 1 Example 3',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.TYPE2,
    name: 'Type 2 Example 1',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
  {
    type: BlockTypes.TYPE2,
    name: 'Type 2 Example 2',
    inputPorts: ['input1'],
    outputPorts: ['output1'],
  },
];