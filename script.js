import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/loaders/GLTFLoader.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "https://unpkg.com/three@0.125.2/examples/jsm/renderers/CSS2DRenderer.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
 25,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);



camera.position.set(4, 0.4, 0);

if(window.outerWidth <= 375 || window.outerWidth <= 800){
  camera.position.set(4,5,0);
} else{
 camera.position.set(4, 0.4, 0);
}
 


// create scene
// const canvas = document.querySelector('#graphic')

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.className = "graphic";
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setClearColor(0x000000, 0);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//light
const spotLight = new THREE.SpotLight();
spotLight.position.set(20, 150, 180);
scene.add(spotLight);

const color = 0xffffff;
const intensity = 0.5;
const ambiLight = new THREE.AmbientLight(color, intensity);
scene.add(ambiLight);

const gltfLoader = new GLTFLoader();
const url =
  "./assets/tollb.glb";

gltfLoader.load(url, (gltf) => {
  const haus = gltf.scene;
  scene.add(haus);

})


window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  if(window.outerWidth <= 375 || window.outerWidth <= 800){
    camera.position.set(4,5,0);
  } else{
   camera.position.set(4, 0.4, 0);
  }

}



function animate() {
  requestAnimationFrame(animate);

  controls.update();

   scene.rotation.y -= 0.001;
  renderer.render(scene, camera);

}

animate();

// const aboutText = document.querySelector(".text")
// const aboutDiv = document.querySelector(".about")
// const button = document.querySelector("#button")
// const header = document.querySelector("header")
// const model = document.querySelector("canvas")




// button.addEventListener("click", function(){
//     aboutDiv.classList.toggle("open")
//     aboutText.classList.toggle("open")
//     // model.classList.toggle("blur")

    
//     console.log("clicked")
// })