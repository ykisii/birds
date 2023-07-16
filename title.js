export class Title {
  #container;
  #app;
  #img;

  constructor(app) {
    this.#app = app;
    this.#container = new PIXI.Container();
    this.#container.visible = false;
    this.#app.stage.addChild(this.#container);
    const texure = PIXI.Texture.from('birds-title.png');
    this.#img = new PIXI.Sprite(texure);
    this.#img.anchor.set(0);
    this.#img.interactive = true;
    this.#img.buttonMode = true;
    this.#container.addChild(this.#img); 
  }

  visible(visible) {
    console.log("visible");
    this.#container.visible = visible;
  }

  addListnerOnClick(listner) {
    console.log(listner);
    this.#img.on('pointerdown', listner);
  }
}