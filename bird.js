export class Bird {
  #app;
  #container;
  constructor(app) {
    this.#app = app;
  }

  appear(x, y) {
    this.#container = new PIXI.Container();
    this.#app.stage.addChild(this.#container);
    const texure = PIXI.Texture.from('smallbird_1.png');
    const bird = new PIXI.Sprite(texure);
    bird.anchor.set(0.5)
    bird.scale.set(0.5);
    this.#container.addChild(bird);
    this.#container.x = x;
    this.#container.y = y;
    this.#app.ticker.add((delta) => {
      if (this.#container.y > this.#app.screen.height / 2) {
        this.#app.stage.removeChild(this.#container);
        this.#app.ticker.destroy();
        return;
      }
      this.#container.x += 1;
      this.#container.y += 1;
    })
  }
}