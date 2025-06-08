// Gavin Ogren
// 5/1/2024

//Initialize Three.js scene
const scene = new THREE.Scene();

// Perspective Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z =3000;
camera.position.y = 0;

// Create a webGL renderer
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

// // TextGeometry
// Font Loader
const WelcomefontLoader = new THREE.FontLoader();

// Load the default font
WelcomefontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('Well, Hello there!', {
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
    const welcomeTextMaterial = new THREE.MeshBasicMaterial({ color: 0xffff11 });

    // Create Mesh
    const welcomeTextMesh = new THREE.Mesh(textGeometry, welcomeTextMaterial);

    // Position Text
    welcomeTextMesh.position.z = 2500;
    welcomeTextMesh.position.x = -60;
    welcomeTextMesh.position.y = -5;

    // Add Text to Scene
    scene.add(welcomeTextMesh);
});

const WelcomePT2fontLoader = new THREE.FontLoader();

// Load the default font
WelcomePT2fontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('Let Me introduce myself', {
        font: font,
        size: 15,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelSegments: 3
    });

    // Text Material
    const WelcomePT2Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create Mesh
    const WelcomePT2fontMesh = new THREE.Mesh(textGeometry, WelcomePT2Material);

    // Position Text
    WelcomePT2fontMesh.position.z = 1500;

    // Add Text to Scene
    scene.add(WelcomePT2fontMesh);
});

const WelcomePT3fontLoader = new THREE.FontLoader();
WelcomePT3fontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('My Name Is Gavin Ogren', {
        font: font,
        size: 15,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelSegments: 3
    });

    // Text Material
    const WelcomePT3Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create Mesh
    const WelcomePT3fontMesh = new THREE.Mesh(textGeometry, WelcomePT3Material);

    // Position Text
    WelcomePT3fontMesh.position.z = 750;
    WelcomePT3fontMesh.position.x = -150;
    WelcomePT3fontMesh.position.y = -5;

 


    // Add Text to Scene
    scene.add(WelcomePT3fontMesh)
});

const WelcomePT4fontLoader = new THREE.FontLoader();
let WelcomePT4fontMesh;
WelcomePT4fontLoader.load('https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('And this is my Journey!', {
        font: font,
        size: 15,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelSegments: 3
    });

    // Text Material
    const WelcomePT4Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create Mesh
    WelcomePT4fontMesh = new THREE.Mesh(textGeometry, WelcomePT4Material);

    // Position Text
    WelcomePT4fontMesh.position.z = 3000;
    WelcomePT4fontMesh.position.x = -150;
    WelcomePT4fontMesh.position.y = -5;

 


    // Add Text to Scene
    scene.add(WelcomePT4fontMesh);
});

//End of Texts Meshes


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




// Animation loop
let font4run = false 
let font4runStop = 0 // 
function animate() {
    requestAnimationFrame(animate);
    if (camera.position.z == 25){
        
        if (font4run == true){
        
            if (WelcomePT4fontMesh.position.z < 25){

                 font4runStop += 1
                 if (font4runStop == 500){
                   
                    console.log(font4runStop)
                 }
            }
            else{
                WelcomePT4fontMesh.position.z -= 5
a
            }

        }
        else{
             // runs once the else statment is finished
            WelcomePT4fontMesh.position.z = 50;
            WelcomePT4fontMesh.position.x = -100;
            WelcomePT4fontMesh.position.y = 10;
            font4run = true
        }
    }
    else{
        if (100 > camera.position.z){
            camera.position.z = camera.position.z - 0.5; 
        }
        else{
            camera.position.z = camera.position.z - 5; 
        }
    }
    
    // Render the scene
    renderer.render(scene, camera);
};

// Start the animation loop
animate();