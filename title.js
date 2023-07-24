export class Title {
  #app;
  #title;
  #img2;

  constructor(app) {
    this.#app = app;
    this.#title = PIXI.Sprite.from('birds-title.png');
    this.#title.visible = false;
    this.#title.anchor.set(0.5);
    this.#title.position.x = app.view.width / 2;
    this.#title.position.y = app.view.height / 2 - 20;
    app.stage.addChild(this.#title);
  }

  visible(visible) {
    console.log("visible");
    this.#title.visible = visible;
  }

  addListnerOnClick(listner) {
    console.log(listner);
    this.#img2.on('pointerdown', listner);
  }
}