import { Bird } from "./bird.js";
import { Title } from "./title.js";
// Create the application helper and add its render target to the app
let app = new PIXI.Application({ 
  background: '#1099bb', 
  //background: '#ffffff', 
  width:760,
  height:400
});

let el = document.getElementById("app");
el.appendChild(app.view);
const title = new Title(app);
title.visible(true);
/*
const birds = [];
for (let i = 0; i < 2; i++) {
  birds[i] = new Bird(app);
}
app.ticker.add((delta) => {
  birds.forEach((bird) => {
    bird.appear(delta);
  })
});
*/