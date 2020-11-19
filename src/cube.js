"use strict";

module.exports.create = function(spec) {
  
  spec = spec || {};
  var name = spec.name = "cube";  //
  var color = spec.color || "#FF00FF";
  var width = spec.width || 1;
  var height = spec.height || 1;
  var depth = spec.depth || 1;
  var translateX = spec.translateX || 0.0;
  var translateY = spec.translateY || 0.0;
  var translateZ = spec.translateZ || 0.0;
  
  var geometry = new THREE.BoxGeometry(width, height, depth);
  var material = new THREE.MeshBasicMaterial({color: color});

  var cube = new THREE.Mesh(geometry, material);
  cube.name = name; 
  cube.translateX( translateX );
  cube.translateY( translateY );
  cube.translateZ( translateZ );

  return cube;
}