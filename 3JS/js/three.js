const fontPath = 'media/font.js';


const scene = new THREE.Scene(); //Create Scene
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,.1, 1000); //Create cae
const renderer = new THREE.WebGLRenderer();
const cubeGeo = new THREE.BoxGeometry(5,5,5);
const cubeMat = new THREE.MeshLambertMaterial({color:`#FF6F61`});
const cube = new THREE.Mesh(cubeGeo, cubeMat);
const spotlight = new THREE.SpotLight(`white`);
let font = undefined;



let createText = (textDraw) => 
{
  
  textGeo = new THREE.TextGeometry( textDraw, 
  {
    font: font,
    size: 25,
    height: 10,
    curveSegments:10,
    weight: "normal",
    bevelThickness:1,
    bevelSize:0.3,
    bevelSegments:5,
    bevelEnabled:true
  });
  
  textGeo.computeBoundingBox();
  textGeo.computeVertexNormals();

  const text = new THREE.Mesh(textGeo, cubeMat);
  text.position.x = -textGeo.boundingBox.max.x/2;
  text.castShadow = true;
  scene.add(text);

}

let init = () => 
{

  renderer.setClearColor(`black`);
  renderer.setSize(window.innerWidth/2, window.innerHeight/2);
  renderer.shadowMap.enabled = true;
  renderer.shadowMapSoft = true;
  cube.castShadow = true;
  spotlight.castShadow = true;
  spotlight.position.set(30,60,60);
  scene.add(spotlight);
  camera.lookAt(scene.position);
  document.body.appendChild(renderer.domElement);

}

let loadFont = (text) => 
{

  let loader = new THREE.FontLoader();
  loader.load(fontPath, function (loadedFont) 
  {
    font = loadedFont;
    createText(text);
  });

}

let render = () => 
{
  
  requestAnimationFrame( render );
  camera.position.x = 0;
  camera.position.y = 10;
  camera.position.z = 60;
  renderer.render(scene, camera);

};

init();
loadFont('Greleis');
render();