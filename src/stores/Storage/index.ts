import { v1 } from "uuid";
import { storage } from "firebase";

class StorageStore {
  public uploadFontFile: (
    font: File | string | null
  ) => Promise<string> = font => {
    return new Promise<string>((res, rej) => {
      if (!font) {
        rej("font is required");
      } else if (typeof font === "string") {
        res(font);
      } else {
        try {
          const reader = new FileReader();
          reader.onload = async e => {
            if (e.target) {
              const uid = v1();
              const extention = font.type === "woff" ? "woff" : "woff2";
              const storageRef = storage().ref(`typefaces/${uid}.${extention}`);
              const result = await storageRef.put(
                e.target.result as ArrayBuffer
              );
              res(await result.ref.getDownloadURL());
            }
          };
          reader.onerror = () => rej("Could not read file");
          reader.onabort = () => rej("File read aborted");
          reader.readAsArrayBuffer(font);
        } catch (error) {
          rej(error);
        }
      }
    });
  };
  public uploadImage: (
    image: File | string | null
  ) => Promise<string> = image => {
    return new Promise<string>((res, rej) => {
      if (!image) {
        rej("Image is required");
      } else if (typeof image === "string") {
        res(image);
      } else {
        try {
          const reader = new FileReader();
          reader.onload = async e => {
            if (e.target) {
              const uid = v1();
              const extention = image.type === "image/png" ? "png" : "jpg";
              const storageRef = storage().ref(
                `typefacesimages/${uid}.${extention}`
              );
              const result = await storageRef.put(
                e.target.result as ArrayBuffer
              );
              res(await result.ref.getDownloadURL());
            }
          };
          reader.onerror = () => rej("Could not read file");
          reader.onabort = () => rej("File read aborted");
          reader.readAsArrayBuffer(image);
        } catch (error) {
          rej(error);
        }
      }
    });
  };
  public uploadFile: (file: File | string | null) => Promise<string> = file => {
    return new Promise<string>((res, rej) => {
      if (!file) {
        rej("File is required");
      } else if (typeof file === "string") {
        res(file);
      } else {
        try {
          const getFileExtension1 = (filename: string) => {
            return /[.]/.exec(filename)
              ? /[^.]+$/.exec(filename)[0]
              : undefined;
          };
          const reader = new FileReader();
          reader.onload = async e => {
            if (e.target) {
              const uid = v1();
              console.log(file);
              const extention =
                file.type === "application/font-woff"
                  ? "application/font-woff"
                  : "application/font-woff2";
              const storageRef = storage().ref(
                `typefacesfiles/${uid}.${extention}`
              );
              const result = await storageRef.put(
                e.target.result as ArrayBuffer
              );
              res(await result.ref.getDownloadURL());
            }
          };
          reader.onerror = () => rej("Could not read file");
          reader.onabort = () => rej("File read aborted");
          reader.readAsArrayBuffer(file);
        } catch (error) {
          rej(error);
        }
      }
    });
  };
  public uploadPdfFile: (
    file: File | string | null
  ) => Promise<string> = file => {
    return new Promise<string>((res, rej) => {
      if (!file) {
        rej("File is required");
      } else if (typeof file === "string") {
        res(file);
      } else {
        try {
          const getFileExtension1 = (filename: string) => {
            return /[.]/.exec(filename)
              ? /[^.]+$/.exec(filename)[0]
              : undefined;
          };
          const reader = new FileReader();
          reader.onload = async e => {
            if (e.target) {
              const uid = v1();
              console.log(file);
              const extention = file.type === "pdf" ? "pdf" : "pdf";
              const storageRef = storage().ref(`pdfs/${uid}.${extention}`);
              const result = await storageRef.put(
                e.target.result as ArrayBuffer
              );
              res(await result.ref.getDownloadURL());
            }
          };
          reader.onerror = () => rej("Could not read file");
          reader.onabort = () => rej("File read aborted");
          reader.readAsArrayBuffer(file);
        } catch (error) {
          rej(error);
        }
      }
    });
  };
  public uploadImagesGallery: (
    image: File | string | null
  ) => Promise<string> = image => {
    return new Promise<string>((res, rej) => {
      if (!image) {
        rej("Image is required");
      } else if (typeof image === "string") {
        res(image);
      } else {
        try {
          const reader = new FileReader();
          reader.onload = async e => {
            if (e.target) {
              const uid = v1();
              const extention = image.type === "image/png" ? "png" : "jpg";
              const storageRef = storage().ref(
                `typefacesimages/${uid}.${extention}`
              );
              const result = await storageRef.put(
                e.target.result as ArrayBuffer
              );
              res(await result.ref.getDownloadURL());
            }
          };
          reader.onerror = () => rej("Could not read file");
          reader.onabort = () => rej("File read aborted");
          reader.readAsArrayBuffer(image);
        } catch (error) {
          rej(error);
        }
      }
    });
  };
}

export default new StorageStore();
