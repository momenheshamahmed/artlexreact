import { Font } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class FontStore {
  @observable public Fonts: Font[] = [];

  @action
  public addFont = async (value: Omit<Font, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/fonts");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editFont = async (
    key: string,
    value: Omit<Font, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`fonts/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteFont = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`fonts/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFonts = () => {
    const dbRef = database().ref("/fonts");
    dbRef.on("value", snapshot => {
      const data: Record<string, Font> = snapshot.val();
      if (data) {
        const mappedData: Font[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.Fonts = mappedData;
      }
    });
  };
}

export default new FontStore();
