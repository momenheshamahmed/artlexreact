import { FontFeaturedGrid } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class FontFeaturedGridStore {
  @observable public FontsFeaturedGrid: FontFeaturedGrid[] = [];

  @action
  public addFontFeaturedGrid = async (value: Omit<FontFeaturedGrid, "key">): Promise<void> => {
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
  public editFontFeaturedGrid = async (
    key: string,
    value: Omit<FontFeaturedGrid, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`FontsFeaturedGrid/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteFontFeaturedGrid = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`FontsFeaturedGrid/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFontsFeaturedGrid = () => {
    const dbRef = database().ref("/FontsFeaturedGrid");
    dbRef.on("value", snapshot => {
      const data: Record<string, FontFeaturedGrid> = snapshot.val();
      if (data) {
        const mappedData: FontFeaturedGrid[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.FontsFeaturedGrid = mappedData;
      }
    });
  };
}

export default new FontFeaturedGridStore();
