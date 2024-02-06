import './style.css'
import * as THREE from "three";

// add scene, camera and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000); 
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("bg")});

camera.position.set(0,0,30);
renderer.pixelRatio = window.devicePixelRatio;
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);


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
    renderer.render(scene, camera);
}
animate()
