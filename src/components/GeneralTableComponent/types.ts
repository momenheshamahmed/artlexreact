import {
  Languages,
} from "../../utils/translation";

// tslint:disable-next-line: interface-name
export interface BaseData {
  key: string;
  content: Record<Languages, Record<string, any>>;
  [k: string]: any;
}

// tslint:disable-next-line: interface-name
export interface Props<T extends BaseData = BaseData> {
  data: T[];
  tableData: Array<TableKeys<T>>;
  deleteAction: (key: string) => Promise<void>;
  route: string;
}

// tslint:disable-next-line: interface-name
export interface TableKeys<T extends Omit<BaseData, 'key'> = Omit<BaseData, 'key'>> {
  key: keyof T | keyof T['content'][Languages];
  inContent?: boolean;
  title: string;
}
