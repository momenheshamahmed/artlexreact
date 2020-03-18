import { CustomFontFeaturedFullScreen } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class CustomFontFeaturedFullScreenStore {
  @observable public CustomFontsFeaturedFullScreen: CustomFontFeaturedFullScreen[] = [];

  @action
  public addCustomFontFeaturedFullScreen = async (value: Omit<CustomFontFeaturedFullScreen, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/customfontsfeaturedfullscreen/");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editCustomFontFeaturedFullScreen = async (
    key: string,
    value: Omit<CustomFontFeaturedFullScreen, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`customfontsfeaturedfullscreen/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteCustomFontFeaturedFullScreen = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`customfontsfeaturedfullscreen/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchFontsFeaturedFullscreen = () => {
    const dbRef = database().ref("/customfontsfeaturedfullscreen");
    dbRef.on("value", snapshot => {
      const data: Record<string, CustomFontFeaturedFullScreen> = snapshot.val();
      if (data) {
        const mappedData: CustomFontFeaturedFullScreen[] = Object.entries(data).map(entry => {
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

export default new CustomFontFeaturedFullScreenStore();
