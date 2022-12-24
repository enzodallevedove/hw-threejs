const path = new THREE.Shape();

path.moveTo(1.5, 0);
path.lineTo(1.5, 0.7);

//cima
path.quadraticCurveTo(1.2, 1.0, 1.5, 3.2);
path.quadraticCurveTo(1.7, 1.0, 1.5, 0.7);

// dir 1
path.quadraticCurveTo(2.1, 1.5, 3.0, 2.2);
path.quadraticCurveTo(2.4, 1.3, 1.5, 0.7);

// dir 2
path.quadraticCurveTo(2.0, 0.8, 2.7, 0.7);
path.quadraticCurveTo(2.0, 0.6, 1.5, 0.7);

// dir 3
path.quadraticCurveTo(1.8, 0.5, 1.9, 0.3);
path.quadraticCurveTo(1.6, 0.4, 1.5, 0.7);

// esq 3
path.quadraticCurveTo(1.2, 0.5, 1.1, 0.3);
path.quadraticCurveTo(1.4, 0.4, 1.5, 0.7);

// esq 2

path.quadraticCurveTo(0.9, 0.8, 0.3, 0.7);
path.quadraticCurveTo(0.9, 0.6, 1.5, 0.7);

// esq 1
path.quadraticCurveTo(1.2, 1.5, 0.3, 2.2);
path.quadraticCurveTo(0.8, 1.3, 1.5, 0.7);

const geometry = new THREE.ExtrudeBufferGeometry(path, {
    depth: 0.05,
    bevelEnabled: true,
    bevelSize: 0.1,
    bevelThickness: 0.1
});

const material = new THREE.MeshLambertMaterial({
    color: 0x60A25A, 
    side: THREE.DoubleSide
});

const draw = new THREE.Mesh(geometry, material);

scene.add(draw);
x3.add(draw, {label: 'coracao'});

function animate() {
    requestAnimationFrame( animate );
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
}

animate();