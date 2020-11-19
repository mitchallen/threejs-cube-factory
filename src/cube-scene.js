"use strict";

var cubeFactory = require('./cube');

module.exports.create = function(spec) {

  spec = spec || {};
  var clear = spec.clear || "#000000";
  // fov — Camera frustum vertical field of view.
  var fov = spec.fov || 75;
  // aspect — Camera frustum aspect ratio.
  var aspectRatio = spec.aspectRatio || window.innerWidth / window.innerHeight;
  var near = spec.near || 0.1;  // near — Camera frustum near plane
  var far = spec.far || 1000; // far — Camera frustum far plane.

  var cubeOptions = [
    { color: "#FF0000" },
    { color: "#00FF00", width: 0.5, height:   2, depth: 0.5 },
    { color: "#0000FF", width:   2, height: 0.5, depth: 0.5 },
    { color: "#FF00FF", width: 0.5, height: 0.5, depth: 2   },
    { color: "#FFFF00", translateX:  3.0 },
    { color: "#FF6619", translateX: -3.0 },
    { color: "#AAAAAA", translateY:  2.0,  translateZ: -0.05, width: 0.5, height: 0.5, depth: 2 },
    { color: "#04D9FF", translateY: -2.0, translateZ:  0.05, width: 0.5, height: 0.5, depth: 2 },
  ];

  var renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor( clear );
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera( fov, aspectRatio, near, far); 
  camera.position.z = 5; // Set camera position

  cubeOptions.forEach( options => scene.add( cubeFactory.create( options ) ) );

  var obj = {
    resize: function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    },
    step: function() {
      scene.traverse( function(cube) {
        if( cube.name === "cube") {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.02;
        }
      });

      renderer.render( scene, camera);
    }
  };

  Object.seal(obj);

  return obj;
}