// tslint:disable-next-line: interface-name
export interface Props {
  value: Array<string | object | null>;
  error: string | undefined;
  setValue: (value: Array<string | File>) => void;
}

// tslint:disable-next-line: interface-name
export interface EditorData {
  url: string;
}
