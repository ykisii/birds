export class Bird {
  #app;
  #container;
  #img;
  #state;
  #bird_state = {
    "out": 1,
    "down": 2,
    "adjust": 3,
    "stay": 4,
    "leave": 5
  };
  // out, down, adjust, stay 

  constructor(app) {
    this.#state = this.#bird_state.out; 
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
    if (this.#state === this.#bird_state.out) {
      this.#state = this.#bird_state.down; 
    }

    switch (this.#state) {
      case this.#bird_state.down:
        this.#moveDown(delta);
        break;
      case this.#bird_state.adjust:
        break;
      default:
        //do nothing;
    }

  }

  #moveDown(delta) {
    if ((this.#app.screen.height / 2 - 30) < this.#container.y && this.#container.y < this.#app.screen.height / 2) {
      this.#container.x += 0.5;
      this.#container.y += 0.5;
    }
    else if (this.#container.y < this.#app.screen.height / 2) {
      this.#container.x += 1;
      this.#container.y += 1;
    }
  }

  leave() {
  }
}