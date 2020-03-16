import { CustomTypeface } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class CustomTypefacestore {
  @observable public CustomTypefaces: CustomTypeface[] = [];

  @action
  public addTypeface = async (value: Omit<CustomTypeface, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/CustomTypefaces");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      return Promise.reject();
    }
  };

  @action
  public editTypeface = async (
    key: string,
    value: Omit<CustomTypeface, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`CustomTypefaces/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteTypeface = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`CustomTypefaces/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchCustomTypefaces = () => {
    const dbRef = database().ref("/CustomTypefaces");
    dbRef.on("value", snapshot => {
      const data: Record<string, CustomTypeface> = snapshot.val();
      if (data) {
        const mappedData: CustomTypeface[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.CustomTypefaces = mappedData;
      }
    });
  };
}

export default new CustomTypefacestore();
