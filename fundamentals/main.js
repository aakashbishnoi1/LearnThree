import './style.css'
import * as THREE from "three";

// add scene, camera and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000); 
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg")});

camera.position.set(0,0,20);
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);


// Add a cube
const cubeGeometry = new THREE.BoxGeometry(10,10,10);
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0x330587});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);
