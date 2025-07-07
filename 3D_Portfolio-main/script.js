// Author: Gavin Ogren
// Date: 2025 - 6 - 9 
// Description: A 3D portfolio website showcase who I am and my skills using Three.js

console.log("3D Portfolio Website Loaded Successfully!");

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



    // RocketShip Model - Kinda Looks like trash not gonna lie
// Create a cone geometry for the rocket body
const bodyGeometry = new THREE.ConeGeometry(0.5, 1, 32);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
bodyMesh.position.set(0, -0.75, 0);
bodyMesh.position.y = 1.25;
scene.add(bodyMesh);

// Create a cylinder geometry for the engine
const engineGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
const engineMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const engineMesh = new THREE.Mesh(engineGeometry, engineMaterial);
engineMesh.position.set(0, -0.75, 0);
scene.add(engineMesh);

// Custom Polygon Shape for Wings of Rocketship
var wingOnePoints = [];
wingOnePoints.push(new THREE.Vector2(0, 1));
wingOnePoints.push(new THREE.Vector2(-1, 0));
wingOnePoints.push(new THREE.Vector2(0, 0));

// Create a shape from the points
var wingOneShape = new THREE.Shape(wingOnePoints);
// Create geometry from the shape
var wingOneGeometry = new THREE.ShapeGeometry(wingOneShape);
// Create material
var wingOneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// Create mesh
var wingOnePolygon = new THREE.Mesh(wingOneGeometry, wingOneMaterial);

wingOnePolygon.position.x = -0.3
wingOnePolygon.position.y = -2.4
wingOnePolygon.position.z = 0

// Add Polygon to scene
scene.add(wingOnePolygon)


var wingTwoPoints = [];
wingTwoPoints.push(new THREE.Vector2(0, 1));
wingTwoPoints.push(new THREE.Vector2(1, 0));
wingTwoPoints.push(new THREE.Vector2(0, 0));

// Create a shape from the points
var wingTwoShape = new THREE.Shape(wingTwoPoints);
// Create geometry from the shape
var wingTwoGeometry = new THREE.ShapeGeometry(wingTwoShape);
// Create material
var wingTwoMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// Create mesh
var wingTwoPolygon = new THREE.Mesh(wingTwoGeometry, wingTwoMaterial);

// Add Polygon to scene
wingTwoPolygon.position.x = 0.3
wingTwoPolygon.position.y = -2.4
wingTwoPolygon.position.z = 0.0

scene.add(wingTwoPolygon)

// }
// Camera Controls


// Function controls camera position dynamically - Parameters needed are boolean values and a speed interger value
function dynamicCameraControls(target, speed = 1) {
    // Move X
    if (typeof target.x === "number" && Math.abs(camera.position.x - target.x) > 0.01) {
        camera.position.x += Math.sign(target.x - camera.position.x) * Math.min(speed, Math.abs(target.x - camera.position.x));
    }
    // Move Y
    if (typeof target.y === "number" && Math.abs(camera.position.y - target.y) > 0.01) {
        camera.position.y += Math.sign(target.y - camera.position.y) * Math.min(speed, Math.abs(target.y - camera.position.y));
    }
    // Move Z
    if (typeof target.z === "number" && Math.abs(camera.position.z - target.z) > 0.01) {
        camera.position.z += Math.sign(target.z - camera.position.z) * Math.min(speed, Math.abs(target.z - camera.position.z));
    }
}

function TextLocation(moveX, moveY, moveZ, textMesh) {
    if (moveX == true) {
        textMesh.position.x = moveX;
    }
    if (moveY == true) {
        textMesh.position.y = moveY;
    }
    if (moveZ == true) {
        textMesh.position.z = moveZ; 
    }
}



// --- TEXT SETUP RESTARTED ---
// Load font and create a visible text mesh


// Welcome Text
const fontLoader = new THREE.FontLoader();

// Utility function to create text meshes
function createTextMesh(text, font, options = {}) {
    const geometry = new THREE.TextGeometry(text, {
        font: font,
        size: options.size || 12,
        height: options.height || 5,
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

fontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    // Welcome Text
    const welcomeTextMesh = createTextMesh('Welcome to the launch!', font, {
        position: new THREE.Vector3(-185, 150, 0),
        size : 30
    });
    scene.add(welcomeTextMesh);

    // About Me Text
    const aboutMeTextMesh = createTextMesh('GAVIN OGREN', font, {
        position: new THREE.Vector3(-2, -5, -50),
        color: 0xff0000 // red
    });
    scene.add(aboutMeTextMesh);
    

    // And this is my world
    const softwareTextMesh = createTextMesh('Software Developer', font, {
        position: new THREE.Vector3(-20, -5, -250)
    });
    scene.add(softwareTextMesh);

    // World 

    const itspecialistTextMesh = createTextMesh('IT specialist', font, {
        position: new THREE.Vector3(0, -5, -450), 
        color: 0x0000ff // Blue
    });
    scene.add(itspecialistTextMesh);

    const creativetechnologistTextMesh = createTextMesh('Creative Technologist', font, {
        position: new THREE.Vector3(-35, -5, -700), 
        color: 0x0000ff // Blue
    });
    scene.add(creativetechnologistTextMesh);


});

// Load Earth Texture
const earthTexture = new THREE.TextureLoader().load('Images/earth-Texture.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture
});

const earthGeometry = new THREE.SphereGeometry(160, 64, 64); //Update first parameter to change its raduis 

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(40, -50, 0); // Position the Earth in the scene
scene.add(earth);





// Star Particles
// Particle Materials - For Two Diffrent Colors of Stars 
var particleOneMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1 // Adjust size as needed
});

var particleTwoMaterial = new THREE.PointsMaterial({
    color: 0xffff11,
    size: 0.5 // Adjust size as needed
});

// Particle Count - Change this to adjust the fixed amount of stars in the scene
var totalParticleCount = 5000; // Number of particles (stars)
particleOneAmount = totalParticleCount / 1.5
particleTwoAmount = totalParticleCount / 3

var positionsOne = new Float32Array(particleOneAmount * 3);
for (var i = 0; i < positionsOne.length; i += 3) {
    positionsOne[i] = (Math.random() - 0.5) * 2000; // Random X position
    positionsOne[i + 1] = (Math.random() - 0.5) * 2000; // Random Y position
    positionsOne[i + 2] = (Math.random() - 0.5) * 2000; // Random Z position
}

var positionsTwo = new Float32Array(particleTwoAmount * 3);
for (var i = 0; i < positionsTwo.length; i += 3) {
    positionsTwo[i] = (Math.random() - 0.5) * 2000; // Random X position
    positionsTwo[i + 1] = (Math.random() - 0.5) * 2000; // Random Y position
    positionsTwo[i + 2] = (Math.random() - 0.5) * 2000; // Random Z position
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


const cameraTargets = [
    // {x: 50, y: 0, z: 400, speed: 0.5},
    // {x: 50, y: 0, z: 401, speed: 0.005},
    {x: 50, y: 0, z: -150, speed: 2.5},
    {x: 50, y: 0, z: -200, speed: 3},  
    {x: 50, y: 0, z: -250, speed: 3.5}, 
    {x: 50, y: 0, z: -550, speed: 4}, 
    // {x: 50, y: 400, z: -500, speed: 3}
];
let currentTargetIndex = 0;

function cameraAtTarget(target, threshold = 0.1) {
    return (
        Math.abs(camera.position.x - target.x) < threshold &&
        Math.abs(camera.position.y - target.y) < threshold &&
        Math.abs(camera.position.z - target.z) < threshold
    );
}

function animate() {
    earth.rotation.y += 0.0025;
    requestAnimationFrame(animate);
    if (currentTargetIndex < cameraTargets.length) {
        const target = cameraTargets[currentTargetIndex];
        dynamicCameraControls(target, target.speed || 2); // Use target's speed, default to 2
        if (cameraAtTarget(target)) {
            currentTargetIndex++;
        }
    }
    renderer.render(scene, camera);
}
// Start the animation loop
animate();