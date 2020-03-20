import { CustomFontInUse } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class CustomFontInUseStore {
  @observable public CustomFontsInUse: CustomFontInUse[] = [];

  @action
  public addCustomFontInUse = async (value: Omit<CustomFontInUse, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/fontinuse" + value.content.en.selectTypeface.content.en);
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editCustomFontInUse = async (
    key: string,
    value: Omit<CustomFontInUse, "key">
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
  public deleteCustomFontInUse = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`fontsinuse/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchCustomFontsInUse = () => {
    const dbRef = database().ref("/fontsinuse");
    dbRef.on("value", snapshot => {
      const data: Record<string, CustomFontInUse> = snapshot.val();
      if (data) {
        const mappedData: CustomFontInUse[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.CustomFontsInUse = mappedData;
      }
    });
  };
}

export default new CustomFontInUseStore();
