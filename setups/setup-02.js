const options = {
    targetSelector: '#scene',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x34abeb
};

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.backgroundColor = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(50, options.width / options.height, 0.1, 1000);

camera.position.x = 5.6;
camera.position.y = 3.5;
camera.position.z = 7.5;

//const light = new THREE.AmbientLight(0xFF4040, 3);

const light = new THREE.HemisphereLight(0xFFFFBB, 0x080820, 2);

scene.add(light);

const x3 = new THREEx3({
    THREE, 
    OrbitControls: THREE.OrbitControls,
    camera, 
    renderer, 
    scene,
});

x3.add(light);
x3.add(camera);