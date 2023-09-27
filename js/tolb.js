import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { scroller } from "./dom.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  12,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(4, 0.4, 0);

if (window.outerWidth <= 375 || window.outerWidth <= 800) {
  camera.position.set(4, 5, 0);
} else {
  camera.position.set(4, 0.4, 0);
}

// create scene

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Get the "tolb" div element by its id
const tolbDiv = document.getElementById("tolb");

// Append the renderer's DOM element to the "tolb" div
tolbDiv.appendChild(renderer.domElement);

renderer.setClearColor(0x000000, 0);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener( 'change', animate );
controls.enableZoom = false;
controls.update();

//light
const intensity = 0.3;
const ambientLight = new THREE.AmbientLight(0x404040, intensity);
const directLight = new THREE.DirectionalLight(0x404040, 2.5);
scene.add(ambientLight);
scene.add(directLight);

// enviroment texture
const rgbeLoader = new RGBELoader();
const hdr = "images/phone_shop_1k.hdr";
rgbeLoader.load(hdr, (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
});

//model
const gltfLoader = new GLTFLoader();
const url = "tolb2.0.glb";


gltfLoader.load(url, (gltf) => {
  const tolb = gltf.scene;
  tolb.rotation.set(Math.PI / -8, 0, 0);
  scene.add(tolb);
});

// resize the model on window resize
window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  // if (camera.aspect > 1){

  // }

  if (window.outerWidth <= 375 || window.outerWidth <= 800) {
    camera.position.set(10, 0.5, 0);
  } else {
    camera.position.set(4, 0.4, 0);
  }
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  // scene.rotation.x += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

animate();

// scroller
let prevPos = 0;

let maxZRotation = Math.PI/2;

scroller.on("scroll", (args) => {
  const scrollPos = args.scroll.y;


  if (scrollPos > prevPos){
    scene.rotation.x += 0.01;
    scene.rotation.z -= 0.005;
  } else{
    scene.rotation.x -= 0.01;
    scene.rotation.z += 0.005;
  }
  // write a line of code that gets the zrotation and limits the rotation once it reaches a certain angle

  // if(scene.rotation.z > maxZRotation){
  //  scene.rotation.z = maxZRotation;
  // } else if (scene.rotation.z < -maxZRotation){
  //   scene.rotation.z = -maxZRotation;
  // }
  // console.log(args)
  // console.log(rotZ)
  console.log(scene.rotation.z)
  // console.log(Math.PI/2)
  prevPos = scrollPos;
});
