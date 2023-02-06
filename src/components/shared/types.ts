export enum BlockTypes {
  NEST = 'nest',
  SAP_RFC = 'sapRFC',
  TYPE1 = 'type1',
  TYPE2 = 'type2',
}

export interface IBlock {
  name: string;
  type: BlockTypes.NEST
  | BlockTypes.SAP_RFC
  | BlockTypes.TYPE1
  | BlockTypes.TYPE2;
  inputPorts: string[];
  outputPorts: string[];
}