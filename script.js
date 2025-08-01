// Author: Gavin Ogren
// Date: 2025 - 6 - 9 
// Description: A 3D portfolio website showcase who I am and my skills using Three.js

//Initialize Three.js scene
const scene = new THREE.Scene();

// Creates the Camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 250;
camera.position.y = 0;
camera.position.x = 50;

// The webGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);





let rocket; // Make rocket accessible everywhere
const modelLoader = new THREE.GLTFLoader();
modelLoader.load('models/rocket.glb', function (gltf) {
  rocket = gltf.scene;
  rocket.scale.set(1, 1, 1);
  rocket.position.set(650, 0, -565);
  rocket.rotation.x = Math.PI / 2; // Rotate the rocket to face upwards
  scene.add(rocket);
  rocket.visible = false; // Rocket is initially hidden
});

let astronaut; 
const astronautLoader = new THREE.GLTFLoader();
astronautLoader.load('models/astronaut.glb', function (gltf) {
    astronaut = gltf.scene;
    astronaut.scale.set(7, 7, 7);
    astronaut.position.set(650, 75, 125);

    astronaut.rotation.y = Math.PI / 1; 

    // Find the left upper arm bone
    let leftArmBone = null;

    astronaut.traverse(function(child) {
        if (child.isBone && child.name === 'upper_armL_034') {
            leftArmBone = child;
        }
    });
    astronaut.userData.leftArmBone = leftArmBone;

    scene.add(astronaut);
});
function astronautWave(){
    // Animate astronaut's left arm for waving
    if (astronaut && astronaut.userData.leftArmBone) {
        const time = Date.now() * 0.003;
        astronaut.userData.leftArmBone.rotation.z = -0.8 + Math.sin(time) * 0.3;
    }
}
let stargate; 
const stargateLoader = new THREE.GLTFLoader();
astronautLoader.load('models/stargate.glb', function (gltf) {
    stargate = gltf.scene;
    stargate.scale.set(0.5, 0.5, 0.5);
    stargate.position.set(650, 5, 1000);
    stargate.rotation.y = Math.PI / 1; // Rotate the stargate to face the camera
    scene.add(stargate);
});
// SUPER BRIGHT LIGHT SETUP
const keyLight = new THREE.DirectionalLight(0xffffff, 3);
keyLight.position.set(100, 100, 100);
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 2);
fillLight.position.set(-100, 50, 100);
scene.add(fillLight);

const backLight = new THREE.DirectionalLight(0xffffff, 2);
backLight.position.set(0, 100, -100);
scene.add(backLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
scene.add(hemiLight);

// Function controls camera position and rotation dynamically
function dynamicCameraControls(target, speed = 1, rotSpeed = 0.02) {
    // Moving camera XYZ dynamically
    if (typeof target.x === "number" && Math.abs(camera.position.x - target.x) > 0.01) {
        camera.position.x += Math.sign(target.x - camera.position.x) * Math.min(speed, Math.abs(target.x - camera.position.x));
    }
    if (typeof target.y === "number" && Math.abs(camera.position.y - target.y) > 0.01) {
        camera.position.y += Math.sign(target.y - camera.position.y) * Math.min(speed, Math.abs(target.y - camera.position.y));
    }
    if (typeof target.z === "number" && Math.abs(camera.position.z - target.z) > 0.01) {
        camera.position.z += Math.sign(target.z - camera.position.z) * Math.min(speed, Math.abs(target.z - camera.position.z));
    }
    // Rotate camera to target rotation
    if (target.rotX !== undefined) {
        camera.rotation.x += Math.sign(target.rotX - camera.rotation.x) * Math.min(rotSpeed, Math.abs(target.rotX - camera.rotation.x));
    }
    if (target.rotY !== undefined) {
        camera.rotation.y += Math.sign(target.rotY - camera.rotation.y) * Math.min(rotSpeed, Math.abs(target.rotY - camera.rotation.y));
    }
    if (target.rotZ !== undefined) {
        camera.rotation.z += Math.sign(target.rotZ - camera.rotation.z) * Math.min(rotSpeed, Math.abs(target.rotZ - camera.rotation.z));
    }
}
function cameraAtTarget(target, threshold = 0.1) {
    return (
        Math.abs(camera.position.x - target.x) < threshold &&
        Math.abs(camera.position.y - target.y) < threshold &&
        Math.abs(camera.position.z - target.z) < threshold
    );
}

// Utility function to create text meshes - 
// options pareemeter can include any of the paremeters
function createTextMesh(text, font, options = {}) {
    const geometry = new THREE.TextGeometry(text, {
        font: font,
        size: options.size || 12,
        height: options.height || 2,
        curveSegments: options.curveSegments || 12,
        bevelEnabled: options.bevelEnabled !== undefined ? options.bevelEnabled : true,
        bevelThickness: options.bevelThickness || 1,
        bevelSize: options.bevelSize || 0.5,
        bevelSegments: options.bevelSegments || 3
    });
    const material = options.material || new THREE.MeshBasicMaterial({ color: options.color || 0xffff11 });
    const mesh = new THREE.Mesh(geometry, material);
    if (options.position) mesh.position.copy(options.position);
    return mesh;
}
const fontLoader = new THREE.FontLoader();
let myJourneyTextMesh; 
let oneStepTextMesh; 
let welcomeTextMesh;
let aboutMeTextMesh;
let softwareTextMesh;
let itspecialistTextMesh;
let creativetechnologistTextMesh;

fontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    
    // Welcome Text
    welcomeTextMesh = createTextMesh('Welcome to the launch!', font, {
        position: new THREE.Vector3(-185, 150, 0),
        size : 30
    });
    scene.add(welcomeTextMesh);

    // Name
    aboutMeTextMesh = createTextMesh('GAVIN OGREN', font, {
        position: new THREE.Vector3(-2, -5, -50),
        color: 0xff0000 // red
    });
    scene.add(aboutMeTextMesh);

    // Software Developer
    softwareTextMesh = createTextMesh('Software Developer', font, {
        position: new THREE.Vector3(-20, -5, -250)
    });
    scene.add(softwareTextMesh);

    // It Specialist
    itspecialistTextMesh = createTextMesh('IT specialist', font, {
        position: new THREE.Vector3(0, -5, -450), 
        color: 0x0000ff // Blue
    });
    scene.add(itspecialistTextMesh);

    // Creative Technologist
    creativetechnologistTextMesh = createTextMesh('Creative Technologist', font, {
        position: new THREE.Vector3(-35, -5, -700), 
        color: 0x0000ff // Blue
    });
    scene.add(creativetechnologistTextMesh);

    myJourneyTextMesh = createTextMesh('My Journey', font, {
        position: new THREE.Vector3(650, 10, -580),
        size: 10,
        color: 0xff0000, // red
        
    });    
    scene.add(myJourneyTextMesh);
     myJourneyTextMesh.visible = false;
    myJourneyTextMesh.rotation.y = Math.PI / -2;

    // One Step at a time
    oneStepTextMesh = createTextMesh('One     Step     at     a     Time', font, {
        position: new THREE.Vector3(450, 90, 150),
        size: 20,
        color: 0xff0000, // red
    });
    scene.add(oneStepTextMesh);
    oneStepTextMesh.visible = false;
    oneStepTextMesh.rotation.y = Math.PI / -1;
});

function removeObjectsFromScene(objects) {
    // Will remove objects from the scene and free up memory
    scene.remove(objects)
    objects.geometry.dispose();
    objects.material.dispose();
}

// Load the image texture
const textureLoader = new THREE.TextureLoader();
const mtaTexture = textureLoader.load('Images/mta.png');
const awsTexture = textureLoader.load('Images/aws.png');
const htmlandcssTexture = textureLoader.load('Images/htmlandcss.png');
const pythonTexture = textureLoader.load('Images/python.png');
const comptiaTexture = textureLoader.load('Images/comptia.png'); 
const mccTexture = textureLoader.load('Images/mcc.jpg'); 
const primaveraTexture = textureLoader.load('Images/primavera.jpg');
const evitTexture = textureLoader.load('Images/evit.jpg'); // Load the EVIT logo texture

// Create material using the texture
const mtaMaterial = new THREE.MeshBasicMaterial({ map: mtaTexture, side: THREE.DoubleSide });
const awsMaterial = new THREE.MeshBasicMaterial({ map: awsTexture, side: THREE.DoubleSide });
const htmlandcssMaterial = new THREE.MeshBasicMaterial({ map: htmlandcssTexture, side: THREE.DoubleSide });
const pythonMaterial = new THREE.MeshBasicMaterial({ map: pythonTexture, side: THREE.DoubleSide });
const comptiaMaterial = new THREE.MeshBasicMaterial({ map: comptiaTexture, side: THREE.DoubleSide });
const mccMaterial = new THREE.MeshBasicMaterial({ map: mccTexture, side: THREE.DoubleSide });
const primaveraMaterial = new THREE.MeshBasicMaterial({ map: primaveraTexture, side: THREE.DoubleSide });
const evitMaterial = new THREE.MeshBasicMaterial({ map: evitTexture, side: THREE.DoubleSide });

const imageGeometry = new THREE.PlaneGeometry(50, 50); // Width, Height

// Create mesh and add it to the scene
const mtaMesh = new THREE.Mesh(imageGeometry, mtaMaterial);
const awsMesh = new THREE.Mesh(imageGeometry, awsMaterial);
const htmlandcssMesh = new THREE.Mesh(imageGeometry, htmlandcssMaterial);
const pythonMesh = new THREE.Mesh(imageGeometry, pythonMaterial);
const comptiaMesh = new THREE.Mesh(imageGeometry, comptiaMaterial); 
const mccMesh = new THREE.Mesh(imageGeometry, mccMaterial);
const primaveraMesh = new THREE.Mesh(imageGeometry, primaveraMaterial);
const evitMesh = new THREE.Mesh(imageGeometry, evitMaterial); 

mtaMesh.position.set(650, 0, -200,); // Position it where you want
awsMesh.position.set(650, 0, -250,); 
htmlandcssMesh.position.set(650, 0, -300,); 
pythonMesh.position.set(650, 0, -350,); 
comptiaMesh.position.set(650, 0, -400);

mccMesh.position.set(0, 0, 0);
primaveraMesh.position.set(0, 0, 0);
evitMesh.position.set(0, 0, 0); 

scene.add(mtaMesh);
scene.add(awsMesh);
scene.add(htmlandcssMesh);      
scene.add(pythonMesh);
scene.add(comptiaMesh);
scene.add(mccMesh);
scene.add(primaveraMesh);
scene.add(evitMesh);


mtaMesh.rotation.y = Math.PI / -2; 
awsMesh.rotation.y = Math.PI / -2;
htmlandcssMesh.rotation.y = Math.PI / -2;
pythonMesh.rotation.y = Math.PI / -2;
comptiaMesh.rotation.y = Math.PI / -2; 

// Initially hide the meshes
mtaMesh.visible = false; 
awsMesh.visible = false;
htmlandcssMesh.visible = false;
pythonMesh.visible = false;
comptiaMesh.visible = false;

// Load Earth Texture
const earthTexture = new THREE.TextureLoader().load('Images/earth-Texture.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture
});

// Create Earth Geometry and Mesh
 earthGeometry = new THREE.SphereGeometry(160, 64, 64); //Update first parameter to change its raduis 
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(40, -50, 0); // Position the Earth in the scene
scene.add(earth);


const moonTexture = new THREE.TextureLoader().load('Images/moon-Texture.png');
const moonMaterial = new THREE.MeshBasicMaterial({
    map: moonTexture
});

const moonGeomerty = new THREE.SphereGeometry(160, 64, 64); // Update first parameter to change its raduis
const moon = new THREE.Mesh(moonGeomerty, moonMaterial); 
moon.scale.set(0.5, 0.5, 0.5); // Scale down the moon
moon.position.set(650, 0, 150); // Position the Moon in the scene

scene.add(moon); // Add the moon to the scene


// Star Particles
// Particle Materials - For Two Diffrent Colors of Stars. Note: Edit size to change its star size 
var particleOneMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1 
});

var particleTwoMaterial = new THREE.PointsMaterial({
    color: 0xffff11,
    size: 0.5 
});

// Particle Count - Change this to adjust the fixed amount of stars in the scene
var totalParticleCount = 7500; // Number of particles (stars)
var areaParticle = 2500; // Area in which particles are distributed

particleOneAmount = totalParticleCount / 1.5
particleTwoAmount = totalParticleCount / 3

var positionsOne = new Float32Array(particleOneAmount * 3);
for (var i = 0; i < positionsOne.length; i += 3) {
    positionsOne[i] = (Math.random() - 0.5) * areaParticle; // Random X position
    positionsOne[i + 1] = (Math.random() - 0.5) * areaParticle; // Random Y position
    positionsOne[i + 2] = (Math.random() - 0.5) * areaParticle; // Random Z position
}

var positionsTwo = new Float32Array(particleTwoAmount * 3);
for (var i = 0; i < positionsTwo.length; i += 3) {
    positionsTwo[i] = (Math.random() - 0.5) * areaParticle; // Random X position
    positionsTwo[i + 1] = (Math.random() - 0.5) * areaParticle; // Random Y position
    positionsTwo[i + 2] = (Math.random() - 0.5) * areaParticle; // Random Z position
}

// Create particle geometry
var particleOneGeometry = new THREE.BufferGeometry();
particleOneGeometry.setAttribute('position', new THREE.BufferAttribute(positionsOne, 3));

// Create particle system
var particleOneSystem = new THREE.Points(particleOneGeometry, particleOneMaterial);
scene.add(particleOneSystem);

// Create particle geometry
var particleTwoGeometry = new THREE.BufferGeometry();
particleTwoGeometry.setAttribute('position', new THREE.BufferAttribute(positionsTwo, 3));

// Create particle system
var particleTwoSystem = new THREE.Points(particleTwoGeometry, particleTwoMaterial);
scene.add(particleTwoSystem);


// Camera targets for dynamic camera movement
const cameraTargets = [
    {x: 50, y: 0, z: 400, speed: 10.5}, // Hovering aorund the earth
    {x: 50, y: 0, z: 401, speed: 10.005},// waits about 5 seconds before moving to the next target
    {x: 50, y: 0, z: -150, speed: 22.5}, // Moving pass earth 
    {x: 50, y: 0, z: -550, speed: 13.5}, // Going past text meshs
    {x: 600, y: 0, z: -550, speed: 5, rotY: Math.PI / -2}, // takes a turn to the right and moves towards the rocket
    {x: 600, y: 0, z: -549, speed: 10.05}, // waits about 2 seconds before moving to the next target
    {x: 600, y: 0, z: -100, speed: 1}, // Rocket Moves with the camera 
    {x: 650, y: 70, z: 80, speed: 1, rotY: Math.PI / -1}, // Camera will move towards the moon and center astronaut
    {x: 650, y: 72, z: 80, speed: 0.005}, // One step at a time text will appear here
    {x: 650, y: 0, z: 550, speed: 5}, // Will match the rocket and go inside of it 
    {x: 650, y: 0, z: 1000, speed: 1}, // Camera will move towards the stargate
    {x: 0, y: 20, z: 995, speed: 10000, rotY: Math.PI / -1}, // Camera instantly to moves to new position after going though the stargate
    {x: -40, y: 20, z: 600, speed: 1, rotY: Math.PI / -2}, 
    {x: -40, y: 20, z: 100, speed: 1, rotY: Math.PI / -3},      
];
let currentTargetIndex = 0;

let Rantest = false; 
let Rantest2 = false; 
let Rantest3 = false;
let Rantest4 = false;
let Rantest5 = false; 
function animate() {
    // console.log("Camera Position:", camera.position.x, camera.position.y, camera.position.z);

    requestAnimationFrame(animate);
    if (currentTargetIndex < cameraTargets.length) {
        const target = cameraTargets[currentTargetIndex];
        dynamicCameraControls(target, target.speed || 2); // Use target's speed, default to 2
        if (cameraAtTarget(target)) {
            currentTargetIndex++;
        }
    }
    if (earth){
        //If the earth is loaded, rotate it
        earth.rotation.y += 0.0075;
    }

    if (camera.position.z == -550 && camera.position.x == 50 || Rantest == true) {
        Rantest = true; 
        // show the text on the turn
        rocket.visible = true; // Show the rocket when the camera reaches this position
    }
    if (camera.position.z == -549.95 && camera.position.x == 600){
        // My journey text will appear, I had troubles making it appeaer at 549 so i made it 549.95
        myJourneyTextMesh.visible = true;
    }
    
    if (camera.position.z == -550 && camera.position.x == 600 || Rantest2 == true ) {        
        Rantest2 = true; 
        // Certification images will appear
        mtaMesh.visible = true; 
        awsMesh.visible = true;
        htmlandcssMesh.visible = true;
        pythonMesh.visible = true;
        comptiaMesh.visible = true;

        // Rocket rotation 
        rocket.rotation.y += 0.01;
        rocket.position.z += 1; 

        // Free ram by removing the text meshens not being used
        removeObjectsFromScene(earth); 
        removeObjectsFromScene(aboutMeTextMesh); 
        removeObjectsFromScene(welcomeTextMesh);
        removeObjectsFromScene(itspecialistTextMesh);
        removeObjectsFromScene(softwareTextMesh);
        removeObjectsFromScene(creativetechnologistTextMesh);
       
    }
    
    if (camera.position.z == 80 && camera.position.x == 650 || Rantest4 == true) {
        Rantest4 = true;
        Rantest3 = false;
        astronautWave();
        
        // For the moon text that will move towards the moon behind athe stronaut
        oneStepTextMesh.visible = true;
        oneStepTextMesh.position.x += 2; 

        // Removing UNUSED objects to free up memory
        removeObjectsFromScene(mtaMesh);
        removeObjectsFromScene(awsMesh);
        removeObjectsFromScene(htmlandcssMesh);
        removeObjectsFromScene(pythonMesh);
        removeObjectsFromScene(comptiaMesh);    
        

    }
    if (camera.position.z == 1000 && camera.position.x == 650 || Rantest5 == true) {
        // This is code that will one once in Animate loop
        if (Rantest5 == false) {
            // Move the rocket to the stargate position
            rocket.position.set(0, 0, 1000);
            stargate.position.set(0, 0, 1000);
            rocket.rotation.x = Math.PI / -2; // Rotate the rocket to face upwards

        }
        Rantest = false;
        Rantest2 = false;
        Rantest3 = false;
        Rantest4 = false;

        Rantest5 = true;

        rocket.rotation.y += 0.01;
        rocket.position.z -= 1
        //Remove unused objects to free up memory
        removeObjectsFromScene(moon);
        scene.remove(astronaut);
    }
    renderer.render(scene, camera);
}
// Start the animation loop
animate();