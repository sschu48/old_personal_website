// Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(75,
  window.innerWidth / window.innerHeight, 0.1, 1000);

// Create Renderer
const renderer = new THREE.WebGLRenderer( {canvas: threejs-canvas});

renderer.setSize(window.innerWidth, window.innerheight);

// Create Geometry
const geometry = new THREE.BoxGeometry();

// Create Material
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

// Create Object
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create scene
camera.position.z = 5;

// Render the scene
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
