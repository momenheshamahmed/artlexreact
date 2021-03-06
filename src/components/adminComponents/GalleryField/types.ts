export interface Props {
  value: Array<string | File | null>;
  error: string | undefined;
  setValue: (value: Array<string | File>) => void;
  idInput: string;
  idButton: string;
}

export interface ImageData {
  url: string;
}
