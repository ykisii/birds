export class Title {
  #container;
  #app;
  #img;
  #img2;

  constructor(app) {
    this.#app = app;
    this.#container = new PIXI.Container();
    this.#container.visible = false;
    this.#app.stage.addChild(this.#container);
    const title = PIXI.Texture.from('birds-title.png');
    this.#img = new PIXI.Sprite(title);
    this.#img.anchor.set(0);
    this.#img.interactive = true;
    this.#img.buttonMode = false;
    this.#container.addChild(this.#img); 

    const start = PIXI.Texture.from('birds-start.png');
    this.#img2 = new PIXI.Sprite(start);
    this.#img2.anchor.set(40);
    this.#img2.interactive = true;
    this.#img2.buttonMode = true;
    this.#container.addChild(this.#img2); 
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