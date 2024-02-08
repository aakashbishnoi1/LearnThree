import './style.css'
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// set up the camera, scene and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg")});
camera.position.set(0,0,30);

// renderer resize according to screen  
function resizeRendererToScreenSize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = Math.floor(canvas.clientWidth * pixelRatio);
    const height = Math.floor(canvas.clientHeight * pixelRatio);
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width,height,false);
}
    return needResize;
}

// Add a bed using a box
const bedGeometry = new THREE.BoxGeometry(10,2,6.6);
const bedMaterial = new THREE.MeshBasicMaterial({color: 0x00dd00});
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
scene.add(bed);
bed.position.set(0,0,0);
bed.rotateX(60);
bed.rotateY(55);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


function animate() {
    requestAnimationFrame(animate);
    resizeRendererToScreenSize(renderer);
    renderer.render(scene, camera);
}
animate();
