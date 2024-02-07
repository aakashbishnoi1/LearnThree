import './style.css'
import * as THREE from "three";

// add scene, camera and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000); 
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg")});

camera.position.set(0,0,30);

renderer.render(scene, camera);

// resize renderer for responsive design

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = Math.floor( canvas.clientWidth * pixelRatio);
    const height = Math.floor( canvas.clientHeight * pixelRatio);
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width,height,false);
    }
    return needResize;
}

// Add a cube
const cubeGeometry = new THREE.BoxGeometry(4,4,4);
const cubeMaterial = new THREE.MeshPhongMaterial({color: 0x330587});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Add light 
const light = new THREE.DirectionalLight(0xffffff, 20);
light.position.set(6,6,14);
scene.add(light);

// add multiple cubes
function cubeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube)
    cube.position.setX(x);
    return cube;
}

const cubes = [
    cubeInstance(cubeGeometry, 0xffd34a, -7),
    cubeInstance(cubeGeometry, 0x53ffed, 7),
]

// animate
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    cubes.map((c) => {
        c.rotation.x += 0.01;
        c.rotation.y += 0.01;
    });
    resizeRendererToDisplaySize(renderer);
    renderer.render(scene, camera);
}
animate()
