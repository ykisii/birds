memo.md

## spriteのイベントハンドリングの方法
  まずはコード
    this.#img = new PIXI.Sprite(texture);
    this.#img.interactive = true;
    this.#img .buttonMode = true;
    this.#img.on('pointerdown', listner);