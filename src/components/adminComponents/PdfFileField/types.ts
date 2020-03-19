export interface Props {
  value: string | File | null;
  error: string | undefined;
  setValue: (value: string | File) => void;
  idInput: string;
  idButton: string;

}

export interface ImageData {
  url: string;
}
