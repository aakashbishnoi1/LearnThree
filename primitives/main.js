import './style.css'

import * as THREE from "three";

// set up the camera, scene and renderer

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg")});

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

