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
  }

  appear(x, y) {
    if (this.#container == null) {
      return;
    }
    this.#container.x = x;
    this.#container.y = y;
    this.#app.ticker.add((delta) => {
      if (this.#container.y > this.#app.screen.height / 2) {
        this.#app.stage.removeChild(this.#container);
        this.#app.ticker.destroy();
      }
      this.#container.x += 1;
      this.#container.y += 1;
    })
  }

  leave() {
    this.#app.ticker.add((delta) => {
      if (this.#container.y < 0) {
        this.#app.stage.removeChild(this.#container);
        this.#app.ticker.destroy();
        return;
      }
      this.#container.y -= 1;
    })
  }
}