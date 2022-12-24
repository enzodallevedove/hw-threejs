var cube = undefined;

createFloor();
createCube();
createLight();

function animate() {
    requestAnimationFrame(animate);
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
}

animate();


function createFloor() {
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            side: THREE.DoubleSide
        })
    );

    floor.rotation.x = THREE.MathUtils.degToRad(-90);
    floor.receiveShadow = true;

    scene.add(floor);
    x3.add(floor, { label: 'Chao' });
}

function createCube() {
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshLambertMaterial({
            color: 0x368ed1
        })
    );

    cube.position.x = 1;
    cube.position.y = 1;
    cube.castShadow = true;

    scene.add(cube);
    x3.add(cube, { label: 'Cubo' });
    this.cube = cube;
}

/**
function createLight()
{
    const shadowLight = new THREE.PointLight(0xFFFFFF, 2, 60);
    shadowLight.position.y = 4;
    //shadowLight.position.set( 50, 50, 50 );
    shadowLight.castShadow = true;
    scene.add(shadowLight);
    x3.add(shadowLight, {
        label: 'Luz',
        helper: {
            visible: false,
        }
    });
}
*/

/**
function createLight()
{
    const sun = new THREE.DirectionalLight(0xFFFFFF, 1);
    sun.position.y = 8;
    sun.target = cube;
    //sun.position.set( 50, 50, 50 );
    sun.castShadow = true;
    scene.add(sun);
    x3.add(sun, {
        label: 'Sol',
    });
}
*/

function createLight()
{
    const spotLight = new THREE.SpotLight(0xFFFFFF, 1, 10, 0.4);
    spotLight.position.y = 8;
    spotLight.target = cube;
    //spotLight.position.set( 50, 50, 50 );
    spotLight.castShadow = true;
    scene.add(spotLight);
    x3.add(spotLight, {
        label: 'Luz de palco',
        helper: {
            visible: false,
        }
    });
}