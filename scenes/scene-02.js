const material = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
});

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    material 
);
scene.add(cube);

const circle = new THREE.Mesh(
    new THREE.CircleGeometry(0.5, 20),
    material
);
circle.position.x = -2; 
scene.add(circle);

const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.3, 0.5),
    material
);
cone.position.x = -2; 
cone.position.y = 2; 
scene.add(cone);

const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1),
    material
);
cylinder.position.x = -4; 
scene.add(cylinder);

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1),
    material
);
plane.position.x = -4; 
plane.position.y = 2; 
plane.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(plane);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 20, 20),
    material
);
sphere.position.x = 0; 
sphere.position.y = 2; 
scene.add(sphere);

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();