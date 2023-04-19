
// Create the application helper and add its render target to the app
let app = new PIXI.Application({ 
  background: '#1099bb', 
  width:760,
  height:400
});

let el = document.getElementById("app");
el.appendChild(app.view);
/*
document.body.appendChild(app.view);
const container = new PIXI.Container();
app.stage.addChild(container);
const texure = PIXI.Texture.from('smallbird_1.png');
const bird = new PIXI.Sprite(texure);
bird.anchor.set(0.5)
bird.scale.set(0.5);
container.addChild(bird);
container.x = 0;
container.y = 0;
app.ticker.add((delta) => {
  if (container.y < app.screen.height /2) {
    container.x += 1;
    container.y += 1;
  }
})
*/