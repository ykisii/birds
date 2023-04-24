export class Bird {
  #app;
  #container;
  #img;

  constructor(app) {
    this.#app = app;
    this.#container = new PIXI.Container();
    this.#app.stage.addChild(this.#container);
    const texure = PIXI.Texture.from('smallbird_1.png');
    this.#img = new PIXI.Sprite(texure);
    this.#img.anchor.set(0.5)
    this.#img.scale.set(0.5);
    this.#container.addChild(this.#img);
    this.#container.x = Math.floor(Math.random() * 150) - 150;
    this.#container.y = Math.floor(Math.random() * 150) - 149;
  }

  appear(delta) {
    if (this.#container == null) {
      return;
    }

    if (this.#container.y < this.#app.screen.height / 2) {
      this.#container.x += 1;
      this.#container.y += 1;
    }
  }

  leave() {
  }
}