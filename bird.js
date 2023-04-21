export class Bird {
  #app;
  constructor(app) {
    this.#app = app;
  }

  appear(x, y) {
    const container = new PIXI.Container();
    this.#app.stage.addChild(container);
    const texure = PIXI.Texture.from('smallbird_1.png');
    const bird = new PIXI.Sprite(texure);
    bird.anchor.set(0.5)
    bird.scale.set(0.5);
    container.addChild(bird);
    container.x = x;
    container.y = y;
    this.#app.ticker.add((delta) => {
      if (container.y < this.#app.screen.height / 2) {
        container.x += 1;
        container.y += 1;
      }
    })
  }
}