"use strict";

var sceneFactory = require('./cube-scene');

var cubeScene = sceneFactory.create({
  clear: "#111111"
});

var render = function() {
  requestAnimationFrame( render );
  cubeScene.step();
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    cubeScene.resize();
}

render();