export class MainStage {
  #app;

  constructor(app) {
    this.#app = app;
    console.log('main stage start');
  }

  visible(visible) {
    console.log("visible");
  }

  addListnerOnClick(listner) {
    console.log(listner);
  }
}