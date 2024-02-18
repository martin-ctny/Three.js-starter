import * as lil from "lil-gui";

export default class Debug {
  constructor() {
    this.active = window.location.hash === "#debug";

    if (this.active) {
      console.log("dazdaz");
      this.ui = new lil.GUI();
    }
  }
}
