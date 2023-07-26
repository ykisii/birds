export class Title {
  #app;
  #title;
  #start;

  constructor(app) {
    this.#app = app;
    this.#title = PIXI.Sprite.from('birds-title.png');
    this.#title.visible = false;
    this.#title.anchor.set(0.5);
    this.#title.position.x = app.view.width / 2;
    this.#title.position.y = app.view.height / 2 - 20;

    this.#start = PIXI.Sprite.from('birds-start.png');
    this.#start.interactive = true;
    this.#start.buttonMode = true;
    app.stage.addChild(this.#start);
    app.stage.addChild(this.#title);
    console.log('birds on start');
  }

  visible(visible) {
    console.log("visible");
    this.#title.visible = visible;
  }

  addListnerOnClick(listner) {
    console.log(listner);
    this.#start.on('pointerdown', listner);
  }
}