import { action, makeObservable, observable, toJS } from "mobx";

class GetAPI {
  constructor() {
    makeObservable(this);
  }

  @observable state = [];
  @observable pending = true;

  @action getApi = async (url) => {
    this.pending = true;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.state = data.results;
      console.log(toJS(this.state));
    } catch (e) {
      throw new Error(e);
    }
    this.pending = false;
  };
}
export default new GetAPI();
