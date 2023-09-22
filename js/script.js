import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/loaders/GLTFLoader.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "https://unpkg.com/three@0.125.2/examples/jsm/renderers/CSS2DRenderer.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  18,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 0);

if (window.outerWidth <= 375 || window.outerWidth <= 800) {
  camera.position.set(4, 5, 0);
} else {
  camera.position.set(4, 0.4, 0);
}

// create scene
// const canvas = document.querySelector('#graphic')

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.className = "graphic";
renderer.setSize(window.innerWidth, window.innerHeight);

// Get the "tolb" div element by its id
const tolbDiv = document.getElementById("tolb");

// Append the renderer's DOM element to the "tolb" div
tolbDiv.appendChild(renderer.domElement);

renderer.setClearColor(0x000000, 0);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.update();

//light
const intensity = 0.3;
const ambiLight = new THREE.AmbientLight(0x404040, intensity);
const directLight = new THREE.DirectionalLight(0x404040, 2.5);
scene.add(ambiLight);
scene.add(directLight);

//model
const gltfLoader = new GLTFLoader();
const url =
  "./assets/tolb2.0.glb";

gltfLoader.load(url, (gltf) => {
  const tolb = gltf.scene;

  scene.add(tolb);


})


window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  if (window.outerWidth <= 375 || window.outerWidth <= 800) {
    camera.position.set(0, 0, 0);
  } else {
    camera.position.set(4, 0.4, 0);
  }

}

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  //  scene.rotation.y += 0.001;
  renderer.render(scene, camera);

}

animate();