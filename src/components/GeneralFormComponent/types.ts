import {
  Languages,
} from "../../utils/translation";

export interface BaseData {
  key: string;
  content: Record<Languages, Record<string, any>>;
  [k: string]: any;
}

export interface Props<T extends BaseData = BaseData> {
  data: T[];
  formData: Array<FormKeys<T>>;
  addAction: (data: Omit<T, 'key'>) => Promise<void>;
  editAction: (key: string, data: Omit<T, 'key'>) => Promise<void>;
}

// tslint:disable-next-line: interface-name
export interface FormKeys<T extends Omit<BaseData, 'key'> = Omit<BaseData, 'key'>> {
  key: keyof Omit<T, 'key' | 'content'> | keyof T['content'][Languages];
  inContent?: boolean;
  title: string;
  type: 'text' | 'textarea' | 'image' | 'woff' | 'woff2' | 'checkbox' | 'switch' | 'gallery' | 'date' | 'items' | 'select' | 'editor';
  // tslint:disable-next-line: ban-types
  items?: MultipleitemsInterface[];
  switchValue?: boolean; 
}

// tslint:disable-next-line: interface-name
export interface MultipleitemsInterface {
  key: string;
  type: string;
  title?: string;
  items?: OneitemInterface[];
}
// tslint:disable-next-line: interface-name
export interface OneitemInterface {
  key?: string;
  type?: string;
  title?: string;
}