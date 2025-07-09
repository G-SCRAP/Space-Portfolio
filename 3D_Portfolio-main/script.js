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

// Light for the whole scene
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);


let rocket; // Make rocket accessible everywhere
const modelLoader = new THREE.GLTFLoader();
modelLoader.load('models/rocket.glb', function (gltf) {
  rocket = gltf.scene;
  rocket.scale.set(1, 1, 1);
  rocket.position.set(650, 0, -565);
  rocket.rotation.x = Math.PI / 2; // Rotate the rocket to face upwards
  scene.add(rocket);
});

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
fontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    
    // Welcome Text
    const welcomeTextMesh = createTextMesh('Welcome to the launch!', font, {
        position: new THREE.Vector3(-185, 150, 0),
        size : 30
    });
    scene.add(welcomeTextMesh);

    // Name
    const aboutMeTextMesh = createTextMesh('GAVIN OGREN', font, {
        position: new THREE.Vector3(-2, -5, -50),
        color: 0xff0000 // red
    });
    scene.add(aboutMeTextMesh);

    // Software Developer
    const softwareTextMesh = createTextMesh('Software Developer', font, {
        position: new THREE.Vector3(-20, -5, -250)
    });
    scene.add(softwareTextMesh);

    // It Specialist
    const itspecialistTextMesh = createTextMesh('IT specialist', font, {
        position: new THREE.Vector3(0, -5, -450), 
        color: 0x0000ff // Blue
    });
    scene.add(itspecialistTextMesh);

    // Creative Technologist
    const creativetechnologistTextMesh = createTextMesh('Creative Technologist', font, {
        position: new THREE.Vector3(-35, -5, -700), 
        color: 0x0000ff // Blue
    });
    scene.add(creativetechnologistTextMesh);

    myJourneyTextMesh = createTextMesh('My Journey', font, {
        position: new THREE.Vector3(650, 10, -480),
        size: 10,
        color: 0xff0000, // red
        
    });    
    scene.add(myJourneyTextMesh);
    myJourneyTextMesh.rotation.y = Math.PI / -2;


});

// Load the image texture
const textureLoader = new THREE.TextureLoader();
const mtaTexture = textureLoader.load('Images/mta.png');
const awsTexture = textureLoader.load('Images/aws.png');
const htmlandcssTexture = textureLoader.load('Images/htmlandcss.png');
const pythonTexture = textureLoader.load('Images/python.png');

// Create material using the texture
const mtaMaterial = new THREE.MeshBasicMaterial({ map: mtaTexture, side: THREE.DoubleSide });
const awsMaterial = new THREE.MeshBasicMaterial({ map: awsTexture, side: THREE.DoubleSide });
const htmlandcssMaterial = new THREE.MeshBasicMaterial({ map: htmlandcssTexture, side: THREE.DoubleSide });
const pythonMaterial = new THREE.MeshBasicMaterial({ map: pythonTexture, side: THREE.DoubleSide });

// Create a plane geometry (adjust size to match image aspect ratio)
const imageGeometry = new THREE.PlaneGeometry(50, 50); // Width, Height

// Create mesh and add it to the scene
const mtaMesh = new THREE.Mesh(imageGeometry, mtaMaterial);
const awsMesh = new THREE.Mesh(imageGeometry, awsMaterial);
const htmlandcssMesh = new THREE.Mesh(imageGeometry, htmlandcssMaterial);
const pythonMesh = new THREE.Mesh(imageGeometry, pythonMaterial);


mtaMesh.position.set(650, 0, -250,); // Position it where you want
awsMesh.position.set(650, 0, -300,); // Position it where you want
htmlandcssMesh.position.set(650, 0, -350,); // Position it where you want
pythonMesh.position.set(650, 0, -400,); // Position it where you want

scene.add(mtaMesh);
scene.add(awsMesh);
scene.add(htmlandcssMesh);      
scene.add(pythonMesh);


mtaMesh.rotation.y = Math.PI / -2; 
awsMesh.rotation.y = Math.PI / -2;
htmlandcssMesh.rotation.y = Math.PI / -2;
pythonMesh.rotation.y = Math.PI / -2;

// Load Earth Texture
const earthTexture = new THREE.TextureLoader().load('Images/earth-Texture.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture
});

// Create Earth Geometry and Mesh
const earthGeometry = new THREE.SphereGeometry(160, 64, 64); //Update first parameter to change its raduis 
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(40, -50, 0); // Position the Earth in the scene
scene.add(earth);

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
    {x: 50, y: 0, z: 400, speed: 0.5}, 
    {x: 50, y: 0, z: 401, speed: 0.005},
    {x: 50, y: 0, z: -150, speed: 2.5},
    {x: 50, y: 0, z: -200, speed: 3},  
    {x: 50, y: 0, z: -250, speed: 3.5}, 
    {x: 50, y: 0, z: -550, speed: 4},
    {x: 600, y: 0, z: -550, speed: 4, rotY: Math.PI / -2},
    {x: 600, y: 0, z: -100, speed: 1}

];
let currentTargetIndex = 0;
Rantest = false; 


function animate() {
    
    requestAnimationFrame(animate);
    if (currentTargetIndex < cameraTargets.length) {
        const target = cameraTargets[currentTargetIndex];
        dynamicCameraControls(target, target.speed || 2); // Use target's speed, default to 2
        if (cameraAtTarget(target)) {
            currentTargetIndex++;
        }
    }

    if (camera.position.z == -550 && camera.position.x == 600 || Rantest == true ) {
        Rantest = true; 
        rocket.rotation.y += 0.01;
        rocket.position.z += 1.0; 
        myJourneyTextMesh.position.z += 0.3;
    }
    else{earth.rotation.y += 0.0075;}

  
    renderer.render(scene, camera);
}
// Start the animation loop
animate();