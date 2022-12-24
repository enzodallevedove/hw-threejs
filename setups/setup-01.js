const options = {
    targetSelector: '#scene',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x34abeb
};

const renderer = new THREE.WebGLRenderer();
renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.backgroundColor = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(75, options.width / options.height, 0.1, 1000);

camera.position.z = 5;