const GENERAL_HELPER = {
    stage_floor_height: 0.5
};

/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 20),
    new THREE.MeshPhongMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
    })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = false;
scene.add(floor);
x3.add(floor, { label: 'Chão' });

/**
 * Stage
 */
const stage = new THREE.Mesh(
    new THREE.BoxGeometry(16, 1, 10),
    new THREE.MeshPhongMaterial({
        color: 0x592C18
    })
);
stage.position.x = 0;
stage.position.y = GENERAL_HELPER.stage_floor_height;
stage.position.z = 5;
stage.receiveShadow = true;
scene.add(stage);
x3.add(stage, { label: 'Palco' });

/**
 * First Actor
 */
const firstActor = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({
        color: 0xFF0000
    })
);
firstActor.position.x = 5;
firstActor.position.y = 1.5;
firstActor.position.z = 3;
firstActor.castShadow = true;
firstActor.receiveShadow = true;
scene.add(firstActor);
x3.add(firstActor, { label: 'Ator 1' });

/**
 * Second Actor
 */
const secondActor = new THREE.Mesh(
    new THREE.SphereGeometry(2 / 3, 20, 16),
    new THREE.MeshPhongMaterial({
        color: 0x00FF00
    })
);
secondActor.position.x = 3;
secondActor.position.y = 1.7;
secondActor.position.z = 7;
secondActor.castShadow = true;
secondActor.receiveShadow = true;
scene.add(secondActor);
x3.add(secondActor, { label: 'Ator 2' });

/**
 * Third Actor
 */
const thirdActor = new THREE.Mesh(
    new THREE.ConeGeometry(1, 1.5, 4),
    new THREE.MeshPhongMaterial({
        color: 0x0000FF
    })
);
thirdActor.position.x = -3;
thirdActor.position.y = 1.76;
thirdActor.position.z = 7;
thirdActor.castShadow = true;
thirdActor.receiveShadow = true;
scene.add(thirdActor);
x3.add(thirdActor, { label: 'Ator 3' });

/**
 * Fourth Actor
 */
const fourthActor = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.1, 12, 48),
    new THREE.MeshPhongMaterial({
        color: 0xFF00FF
    })
);
fourthActor.position.x = -5;
fourthActor.position.y = 1.63;
fourthActor.position.z = 3;
fourthActor.castShadow = true;
fourthActor.receiveShadow = true;
scene.add(fourthActor);
x3.add(fourthActor, { label: 'Ator 4' });

/**
 * Begin Main lights --------------------------------------------------------------------------------
 */

const MAIN_SPOTLIGHT_PROPERTIES = {
    enabled: true,
    height: 15,
    color: 0x4B84A6,
    intensity: 5,
    distance: 100,
    angle: 0.16,
    penumbra: 0.15,
    frontLineVerticalAxis: 0,
    backLineVerticalAxis: 1,
    helper: {
        visibility: false
    }
};

/**
 * First Main Light
 */
const firstSpotLight = new THREE.SpotLight(
    MAIN_SPOTLIGHT_PROPERTIES.color,
    MAIN_SPOTLIGHT_PROPERTIES.intensity,
    MAIN_SPOTLIGHT_PROPERTIES.distance,
    MAIN_SPOTLIGHT_PROPERTIES.angle,
    MAIN_SPOTLIGHT_PROPERTIES.penumbra,
);
firstSpotLight.position.x = 2;
firstSpotLight.position.y = 8;
firstSpotLight.position.z = 1;
firstSpotLight.target = firstActor;
firstSpotLight.castShadow = true;
if (MAIN_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(firstSpotLight);
}
x3.add(firstSpotLight, {
    label: 'Luz P. 1',
    helper: {
        visible: MAIN_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Second Main Light
 */
const secondSpotLight = new THREE.SpotLight(
    MAIN_SPOTLIGHT_PROPERTIES.color,
    MAIN_SPOTLIGHT_PROPERTIES.intensity,
    MAIN_SPOTLIGHT_PROPERTIES.distance,
    MAIN_SPOTLIGHT_PROPERTIES.angle,
    MAIN_SPOTLIGHT_PROPERTIES.penumbra,
);
secondSpotLight.position.x = 2;
secondSpotLight.position.y = 8;
secondSpotLight.position.z = 2.5;
secondSpotLight.target = secondActor;
secondSpotLight.castShadow = true;
if (MAIN_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(secondSpotLight);
}
x3.add(secondSpotLight, {
    label: 'Luz P. 2',
    helper: {
        visible: MAIN_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Third Main Light
 */
const thirdSpotLight = new THREE.SpotLight(
    MAIN_SPOTLIGHT_PROPERTIES.color,
    MAIN_SPOTLIGHT_PROPERTIES.intensity,
    MAIN_SPOTLIGHT_PROPERTIES.distance,
    MAIN_SPOTLIGHT_PROPERTIES.angle,
    MAIN_SPOTLIGHT_PROPERTIES.penumbra,
);
thirdSpotLight.position.x = -2;
thirdSpotLight.position.y = 8;
thirdSpotLight.position.z = 2.5;
thirdSpotLight.target = thirdActor;
thirdSpotLight.castShadow = true;
if (MAIN_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(thirdSpotLight);
}
x3.add(thirdSpotLight, {
    label: 'Luz P. 3',
    helper: {
        visible: MAIN_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Fourth Main Light
 */
const fourthSpotLight = new THREE.SpotLight(
    MAIN_SPOTLIGHT_PROPERTIES.color,
    MAIN_SPOTLIGHT_PROPERTIES.intensity,
    MAIN_SPOTLIGHT_PROPERTIES.distance,
    MAIN_SPOTLIGHT_PROPERTIES.angle,
    MAIN_SPOTLIGHT_PROPERTIES.penumbra,
);
fourthSpotLight.position.x = -2;
fourthSpotLight.position.y = 8;
fourthSpotLight.position.z = 1;
fourthSpotLight.target = fourthActor;
fourthSpotLight.castShadow = true;
if (MAIN_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(fourthSpotLight);
}
x3.add(fourthSpotLight, {
    label: 'Luz P. 4',
    helper: {
        visible: MAIN_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Begin Purple lights --------------------------------------------------------------------------------
 */

const SEC_SPOTLIGHT_PROPERTIES = {
    enabled: true,
    height: 15,
    color: 0x2110D2,
    intensity: 4,
    distance: 200,
    angle: 0.5,
    penumbra: 1,
    visibility: false,
    frontLineHorizontalAxis: 3,
    frontLineVerticalAxis: 2,
    backLineHorizontalAxis: 3,
    backLineVerticalAxis: 8,
    helper: {
        visibility: false
    },
    targets: {
        frontLineHorizontalAxis: 4,
        frontLineVerticalAxis: 5,
        backLineHorizontalAxis: 5,
        backLineVerticalAxis: 8,
        getFirstAreaHorizontalIndex: function () {
            return this.frontLineHorizontalAxis;
        },
        getFirstAreaVerticalIndex: function () {
            return this.frontLineVerticalAxis;
        },
        getSecondAreaHorizontalIndex: function () {
            return this.backLineHorizontalAxis;
        },
        getSecondAreaVerticalIndex: function () {
            return this.backLineVerticalAxis;
        },
        getThirdAreaHorizontalIndex: function () {
            return -this.backLineHorizontalAxis;
        },
        getThirdAreaVerticalIndex: function () {
            return this.backLineVerticalAxis;
        },
        getFourthAreaHorizontalIndex: function () {
            return -this.frontLineHorizontalAxis;
        },
        getFourthAreaVerticalIndex: function () {
            return this.frontLineVerticalAxis;
        }
    }
};

/**
 * First Purple Light
 */
const firstPurpleSpotLight = new THREE.SpotLight(
    SEC_SPOTLIGHT_PROPERTIES.color,
    SEC_SPOTLIGHT_PROPERTIES.intensity,
    SEC_SPOTLIGHT_PROPERTIES.distance,
    SEC_SPOTLIGHT_PROPERTIES.angle,
    SEC_SPOTLIGHT_PROPERTIES.penumbra,
);
firstPurpleSpotLight.position.x = SEC_SPOTLIGHT_PROPERTIES.frontLineHorizontalAxis;
firstPurpleSpotLight.position.y = SEC_SPOTLIGHT_PROPERTIES.height;
firstPurpleSpotLight.position.z = SEC_SPOTLIGHT_PROPERTIES.frontLineVerticalAxis;

firstPurpleSpotLight.target.position.x = SEC_SPOTLIGHT_PROPERTIES.targets.getFirstAreaHorizontalIndex();
firstPurpleSpotLight.target.position.y = GENERAL_HELPER.stage_floor_height;
firstPurpleSpotLight.target.position.z = SEC_SPOTLIGHT_PROPERTIES.targets.getFirstAreaVerticalIndex();
firstPurpleSpotLight.castShadow = true;

if (SEC_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(firstPurpleSpotLight);
    scene.add(firstPurpleSpotLight.target);
}
x3.add(firstPurpleSpotLight, {
    label: 'Luz Roxa 1',
    helper: {
        visible: SEC_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Second Purple Light
 */
const secondPurpleSpotLight = new THREE.SpotLight(
    SEC_SPOTLIGHT_PROPERTIES.color,
    SEC_SPOTLIGHT_PROPERTIES.intensity,
    SEC_SPOTLIGHT_PROPERTIES.distance,
    SEC_SPOTLIGHT_PROPERTIES.angle,
    SEC_SPOTLIGHT_PROPERTIES.penumbra
);
secondPurpleSpotLight.position.x = SEC_SPOTLIGHT_PROPERTIES.backLineHorizontalAxis;
secondPurpleSpotLight.position.y = SEC_SPOTLIGHT_PROPERTIES.height;
secondPurpleSpotLight.position.z = SEC_SPOTLIGHT_PROPERTIES.backLineVerticalAxis;
secondPurpleSpotLight.castShadow = true;

secondPurpleSpotLight.target.position.x = SEC_SPOTLIGHT_PROPERTIES.targets.getSecondAreaHorizontalIndex();
secondPurpleSpotLight.target.position.y = GENERAL_HELPER.stage_floor_height;
secondPurpleSpotLight.target.position.z = SEC_SPOTLIGHT_PROPERTIES.targets.getSecondAreaVerticalIndex();
if (SEC_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(secondPurpleSpotLight);
    scene.add(secondPurpleSpotLight.target);
}
x3.add(secondPurpleSpotLight, {
    label: 'Luz Roxa 2',
    helper: {
        visible: SEC_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Third Purple Light
 */
const thirdPurpleSpotLight = new THREE.SpotLight(
    SEC_SPOTLIGHT_PROPERTIES.color,
    SEC_SPOTLIGHT_PROPERTIES.intensity,
    SEC_SPOTLIGHT_PROPERTIES.distance,
    SEC_SPOTLIGHT_PROPERTIES.angle,
    SEC_SPOTLIGHT_PROPERTIES.penumbra
);
thirdPurpleSpotLight.position.x = -SEC_SPOTLIGHT_PROPERTIES.backLineHorizontalAxis;;
thirdPurpleSpotLight.position.y = SEC_SPOTLIGHT_PROPERTIES.height;
thirdPurpleSpotLight.position.z = SEC_SPOTLIGHT_PROPERTIES.backLineVerticalAxis;
thirdPurpleSpotLight.castShadow = true;

thirdPurpleSpotLight.target.position.x = SEC_SPOTLIGHT_PROPERTIES.targets.getThirdAreaHorizontalIndex();
thirdPurpleSpotLight.target.position.y = GENERAL_HELPER.stage_floor_height;
thirdPurpleSpotLight.target.position.z = SEC_SPOTLIGHT_PROPERTIES.targets.getThirdAreaVerticalIndex();
if (SEC_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(thirdPurpleSpotLight);
    scene.add(thirdPurpleSpotLight.target);
}
x3.add(thirdPurpleSpotLight, {
    label: 'Luz Roxa 3',
    helper: {
        visible: SEC_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});

/**
 * Fourth Purple Light
 */
const fourthPurpleSpotLight = new THREE.SpotLight(
    SEC_SPOTLIGHT_PROPERTIES.color,
    SEC_SPOTLIGHT_PROPERTIES.intensity,
    SEC_SPOTLIGHT_PROPERTIES.distance,
    SEC_SPOTLIGHT_PROPERTIES.angle,
    SEC_SPOTLIGHT_PROPERTIES.penumbra
);
fourthPurpleSpotLight.position.x = -SEC_SPOTLIGHT_PROPERTIES.frontLineHorizontalAxis;
fourthPurpleSpotLight.position.y = SEC_SPOTLIGHT_PROPERTIES.height;
fourthPurpleSpotLight.position.z = SEC_SPOTLIGHT_PROPERTIES.frontLineVerticalAxis;
fourthPurpleSpotLight.castShadow = true;

fourthPurpleSpotLight.target.position.x = SEC_SPOTLIGHT_PROPERTIES.targets.getFourthAreaHorizontalIndex();
fourthPurpleSpotLight.target.position.y = GENERAL_HELPER.stage_floor_height;
fourthPurpleSpotLight.target.position.z = SEC_SPOTLIGHT_PROPERTIES.targets.getFourthAreaVerticalIndex();
if (SEC_SPOTLIGHT_PROPERTIES.enabled) {
    scene.add(fourthPurpleSpotLight);
    scene.add(fourthPurpleSpotLight.target);
}
x3.add(fourthPurpleSpotLight, {
    label: 'Luz Roxa 4',
    helper: {
        visible: SEC_SPOTLIGHT_PROPERTIES.helper.visibility,
    }
});



function animate() {
    requestAnimationFrame(animate);
    x3.tick();

    firstActor.rotation.y += 0.015;
    secondActor.rotation.y += 0.015;
    thirdActor.rotation.y += 0.015;
    fourthActor.rotation.y += 0.015;

    x3.fps(() => {
        renderer.render(scene, camera);
    });
}

animate();