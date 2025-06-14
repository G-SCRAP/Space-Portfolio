// Author: Gavin Ogren
// Date: 2025 - 6 - 9 
// Description: A 3D portfolio website showcase who I am and my skills using Three.js

console.log("3D Portfolio Website Loaded Successfully!");

//Initialize Three.js scene
const scene = new THREE.Scene();

// Creates the Camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;
camera.position.y = 0;
camera.position.z = 0;

// The webGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// function createRocketShip() {

//     // RocketShip Model - Kinda Looks like trash not gonna lie
// // Create a cone geometry for the rocket body
// const bodyGeometry = new THREE.ConeGeometry(0.5, 1, 32);
// const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
// bodyMesh.position.set(0, -0.75, 0);
// bodyMesh.position.y = 1.25;
// scene.add(bodyMesh);

// // Create a cylinder geometry for the engine
// const engineGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
// const engineMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
// const engineMesh = new THREE.Mesh(engineGeometry, engineMaterial);
// engineMesh.position.set(0, -0.75, 0);
// scene.add(engineMesh);

// // Custom Polygon Shape for Wings of Rocketship
// var wingOnePoints = [];
// wingOnePoints.push(new THREE.Vector2(0, 1));
// wingOnePoints.push(new THREE.Vector2(-1, 0));
// wingOnePoints.push(new THREE.Vector2(0, 0));

// // Create a shape from the points
// var wingOneShape = new THREE.Shape(wingOnePoints);
// // Create geometry from the shape
// var wingOneGeometry = new THREE.ShapeGeometry(wingOneShape);
// // Create material
// var wingOneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// // Create mesh
// var wingOnePolygon = new THREE.Mesh(wingOneGeometry, wingOneMaterial);

// wingOnePolygon.position.x = -0.3
// wingOnePolygon.position.y = -2.4
// wingOnePolygon.position.z = 0

// // Add Polygon to scene
// scene.add(wingOnePolygon)


// var wingTwoPoints = [];
// wingTwoPoints.push(new THREE.Vector2(0, 1));
// wingTwoPoints.push(new THREE.Vector2(1, 0));
// wingTwoPoints.push(new THREE.Vector2(0, 0));

// // Create a shape from the points
// var wingTwoShape = new THREE.Shape(wingTwoPoints);
// // Create geometry from the shape
// var wingTwoGeometry = new THREE.ShapeGeometry(wingTwoShape);
// // Create material
// var wingTwoMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// // Create mesh
// var wingTwoPolygon = new THREE.Mesh(wingTwoGeometry, wingTwoMaterial);

// // Add Polygon to scene
// wingTwoPolygon.position.x = 0.3
// wingTwoPolygon.position.y = -2.4
// wingTwoPolygon.position.z = 0.0

// scene.add(wingTwoPolygon)

// }
// Camera Controls


// Function controls camera position dynamically - Parameters needed are boolean values and a speed interger value
function dynamicCameraControls(moveX, moveY, moveZ, cameraSpeed, cameraMaxDistance) {
    console.log("Dynamic Camera Controls Activated");

    if (moveX == true) {
       while (camera.position.x >= cameraMaxDistance) {
            console.log("Camera X Position: " + camera.position.x);
            camera.position.x += cameraSpeed; 
        }
       return; 
    }
    if (camera.position.y >= cameraMaxDistance && moveY == true) {
        camera.position.y += cameraSpeed; 
        while (camera.position.y >= cameraMaxDistance) {
            camera.position.y += cameraSpeed;
        }
       return; 
    }
    if (moveZ == true) {
        while (camera.position.z != cameraMaxDistance) {
            console.log("Camera Z Position: " + camera.position.z);
            camera.position.z += cameraSpeed;
       }
       return; 
    }
}

function TextLocation(moveX, moveY, moveZ, textMesh) {
    if (moveX == true) {
        textMesh.position.x += 0.5;
    }
    if (moveY == true) {
        textMesh.position.y += 0.5;
    }
    if (moveZ == true) {
        textMesh.position.z += 0.5; 
    }
}


const boldText = new THREE.FontLoader();

// Load the default font
    boldText.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('Welcome!', {
        font: font,
        size: 12,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelSegments: 3
    });

    // Text Material
    const boldTextMaterial = new THREE.MeshBasicMaterial({ color: 0xffff11 });

    // Create Mesh - Need boldTextMaterial 
    const boldTextMesh = new THREE.Mesh(textGeometry, boldTextMaterial);

    // Position Text
    boldTextMesh.position.z = -150;
    boldTextMesh.position.x = -38.5;
    boldTextMesh.position.y = 0;

    // Add Text to Scene
    scene.add(boldTextMesh);
});

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



function animate() {
    requestAnimationFrame(animate);
    // Render the scene
    renderer.render(scene, camera);
    // Update camera controls 
    
    dynamicCameraControls(false, false, true, -0.5, 50);


};

// Start the animation loop
animate();