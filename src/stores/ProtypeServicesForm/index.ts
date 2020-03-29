import { ProtypeServices } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class ProtypeServicesStore {
  @observable public ProtypeServicess: ProtypeServices[] = [];

  @action
  public addProtypeServices = async (value: Omit<ProtypeServices, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/protypeservices/");
      const newItemRef = await dbRef.push();
      await newItemRef.set(value);
      return Promise.resolve();
    } catch (error) {
      alert("Sorry an error occured");
      console.log(error)
      return Promise.reject();
    }
  };

  @action
  public editProtypeServices = async (
    key: string,
    value: Omit<ProtypeServices, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`protypeservices/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteProtypeServices = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`protypeservices/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchProtypeServicess = () => {
    const dbRef = database().ref("/protypeservices");
    dbRef.on("value", snapshot => {
      const data: Record<string, ProtypeServices> = snapshot.val();
      if (data) {
        const mappedData: ProtypeServices[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.ProtypeServicess = mappedData;
      }
    });
  };
}

export default new ProtypeServicesStore();
