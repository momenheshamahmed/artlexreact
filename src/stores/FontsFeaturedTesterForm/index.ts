import { FontFeaturedTester } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class FontFeaturedTesterStore {
  @observable public FontsFeaturedTester: FontFeaturedTester[] = [];

  @action
  public addFontFeaturedTester = async (value: Omit<FontFeaturedTester, "key">): Promise<void> => {
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
  public editFontFeaturedTester = async (
    key: string,
    value: Omit<FontFeaturedTester, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`FontsFeaturedTester/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteFontFeaturedTester = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`FontsFeaturedTester/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFontsFeaturedTester = () => {
    const dbRef = database().ref("/FontsFeaturedTester");
    dbRef.on("value", snapshot => {
      const data: Record<string, FontFeaturedTester> = snapshot.val();
      if (data) {
        const mappedData: FontFeaturedTester[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.FontsFeaturedTester = mappedData;
      }
    });
  };
}

export default new FontFeaturedTesterStore();
