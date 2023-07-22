import { Bird } from "./bird.js";
import { Title } from "./title.js";
// Create the application helper and add its render target to the app
let app = new PIXI.Application({ 
  background: '#1099bb', 
  //background: '#ffffff', 
  width:640,
  height:360
});

// let el = document.getElementById("app");
// el.appendChild(app.view);
document.getElementById("app").appendChild(app.view);
let sprite = PIXI.Sprite.from('birds-title.png');
app.stage.addChild(sprite);
/*
const title = new Title(app);
title.visible(true);
title.addListnerOnClick((event) => {
  console.log("onclick!!");
  title.visible(false);
  appearBirds(app);
});
*/