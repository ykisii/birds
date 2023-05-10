export class Title {
  #container;
  #app;
  #img;

  constructor(app) {
    this.#app = app;
    this.#container = new PIXI.Container();
    this.#container.visible = false;
    this.#app.stage.addChild(this.#container);
    const texure = PIXI.Texture.from('bird.jpeg');
    this.#img = new PIXI.Sprite(texure);
    this.#img.anchor.set(0.5);
    this.#container.addChild(this.#img); 
  }
}