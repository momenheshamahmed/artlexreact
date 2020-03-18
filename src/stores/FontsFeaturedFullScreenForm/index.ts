import { FontFeaturedFullScreen } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class FontFeaturedFullscreenStore {
  @observable public FontsFeaturedFullScreen: FontFeaturedFullScreen[] = [];

  @action
  public addFontFeaturedFullscreen = async (value: Omit<FontFeaturedFullScreen, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/fontsfeaturedfullscreen/");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editFontFeaturedFullscreen = async (
    key: string,
    value: Omit<FontFeaturedFullScreen, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`fontsfeaturedfullscreen/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteFontFeaturedFullscreen = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`fontsfeaturedfullscreen/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFontsFeaturedFullscreen = () => {
    const dbRef = database().ref("/fontsfeaturedfullscreen");
    dbRef.on("value", snapshot => {
      const data: Record<string, FontFeaturedFullScreen> = snapshot.val();
      if (data) {
        const mappedData: FontFeaturedFullScreen[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        // console.log(mappedData)
        this.FontsFeaturedFullScreen = mappedData;
      }
    });
  };
}

export default new FontFeaturedFullscreenStore();
