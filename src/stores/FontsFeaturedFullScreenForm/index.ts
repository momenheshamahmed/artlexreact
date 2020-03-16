import { CustomFonsFeaturedFullScreen } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class FontFeaturedFullscreenStore {
  @observable public CustomFontsFeaturedFullScreen: CustomFonsFeaturedFullScreen[] = [];

  @action
  public addFontFeaturedFullscreen = async (value: Omit<CustomFonsFeaturedFullScreen, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/typefacesfeaturedfullscreen/");
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
    value: Omit<CustomFonsFeaturedFullScreen, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`CustomFontsFeaturedFullScreen/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteFontFeaturedFullscreen = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`CustomFontsFeaturedFullScreen/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFontsFeaturedFullscreen = () => {
    const dbRef = database().ref("/CustomFontsFeaturedFullScreen");
    dbRef.on("value", snapshot => {
      const data: Record<string, CustomFonsFeaturedFullScreen> = snapshot.val();
      if (data) {
        const mappedData: CustomFonsFeaturedFullScreen[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.CustomFontsFeaturedFullScreen = mappedData;
      }
    });
  };
}

export default new FontFeaturedFullscreenStore();
