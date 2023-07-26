import { Bird } from "./bird.js";
import { Title } from "./title.js";
// Create the application helper and add its render target to the app
let app = new PIXI.Application({ 
  background: '#1099bb', 
  //background: '#ffffff', 
  width:640,
  height:360
});

document.getElementById("app").appendChild(app.view);
const title = new Title(app);
title.visible(true);
title.addListnerOnClick((e) => {
  console.log(e);
})