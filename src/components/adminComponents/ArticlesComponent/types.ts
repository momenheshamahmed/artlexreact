export interface Props {
  value: Array<string | File | null>;
  error: string | undefined;
  setValue: (value: Array<string | File>) => void;
}

export interface EditorData {
  url: string;
}
