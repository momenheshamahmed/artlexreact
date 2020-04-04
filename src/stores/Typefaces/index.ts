import { Typeface } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class TypefaceStore {
  @observable public Typefaces: Typeface[] = [];
  @observable public loading: boolean = true;

  @action
  public addTypeface = async (value: Omit<Typeface, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/typefaces");
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
    value: Omit<Typeface, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`typefaces/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteTypeface = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`typefaces/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchTypefaces = () => {
    const dbRef = database().ref("/typefaces/");
    dbRef.on("value", snapshot => {
      const data: Record<string, Typeface> = snapshot.val();
      console.log("typefaces data", data);
      if (data) {
        const mappedData: Typeface[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.Typefaces = mappedData;
        this.loading = false;
      }
    });
  };
}

export default new TypefaceStore();
