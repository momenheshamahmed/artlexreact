import { Ticker } from "./types";
import { observable, action } from "mobx";
import { database } from "firebase";

class TickerStore {
  @observable public Tickers: Ticker[] = [];

  @action
  public addTicker = async (value: Omit<Ticker, "key">): Promise<void> => {
    try {
      const dbRef = database().ref("/ticker/");
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
  public editTicker = async (
    key: string,
    value: Omit<Ticker, "key">
  ): Promise<void> => {
    try {
      const dbRef = database().ref(`ticker/${key}`);
      await dbRef.set(value);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  @action
  public deleteTicker = async (key: string): Promise<void> => {
    try {
      const dbRef = database().ref(`ticker/${key}`);
      await dbRef.remove();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  @action
  public watchTickers = () => {
    const dbRef = database().ref("/ticker");
    dbRef.on("value", snapshot => {
      const data: Record<string, Ticker> = snapshot.val();
      if (data) {
        const mappedData: Ticker[] = Object.entries(data).map(entry => {
          return {
            ...entry[1],
            key: entry[0]
          };
        });
        this.Tickers = mappedData;
      }
    });
  };
}

export default new TickerStore();
