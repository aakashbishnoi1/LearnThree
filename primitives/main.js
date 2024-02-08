import './style.css'

import * as THREE from "three";

// set up the camera, scene and renderer

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg")});

renderer.render(scene, camera);
