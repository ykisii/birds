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
title.addListnerOnClick((event) => {
  console.log("onclick!!");
  title.visible(false);
  appearBirds(app);
});