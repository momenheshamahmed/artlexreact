import { FontInUse } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class FontInUseStore {
  @observable public FontsInUse: FontInUse[] = [];

  @action
  public addFontInUse = async (value: Omit<FontInUse, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/typefaces/" + value.content.en.selectField + "/fontWeights");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editFontInUse = async (
    key: string,
    value: Omit<FontInUse, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`fontsinuse/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteFontInUse = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`fontsinuse/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFontsInUse = () => {
    const dbRef = database().ref("/fontsinuse");
    dbRef.on("value", snapshot => {
      const data: Record<string, FontInUse> = snapshot.val();
      if (data) {
        const mappedData: FontInUse[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.FontsInUse = mappedData;
      }
    });
  };
}

export default new FontInUseStore();
