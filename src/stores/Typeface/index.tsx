import { OneTypefaceState } from "./types";
import { computed, observable, action, values } from "mobx";

class OneTypefaceStore {
  @observable public TypefaceState: OneTypefaceState;
  
  @action
  public momenHesham(value) {
    this.TypefaceState = value;

  };
  @action 
  getFontSize() {
    return this.TypefaceState
  };
}

export default new OneTypefaceStore();
