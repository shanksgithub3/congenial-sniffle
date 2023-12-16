setTimeout(function(){

var camera,scene,renderer,container,controls;

camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.001,800);
scene=new THREE.Scene();
renderer=new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio );
renderer.setSize( window.innerWidth*.95, window.innerHeight/2);
container=document.createElement('div'); 
document.body.appendChild(container);
container.appendChild(renderer.domElement);


controls=new THREE.OrbitControls(camera,renderer.domElement);
controls.enablePan=true;controls.minDistance=10,controls.maxDistance=10;
controls.target.set(0,1,1);
camera.fov=60;
camera.position.set(0,.5,1);



render=function(){
requestAnimationFrame(render);
controls.update();
renderer.render(scene,camera);
}
render();


renderer.setClearColor(0xaaaaff );

LAND=function(){
gm=new THREE.BoxGeometry(100,.1,100,100,100);
mt=new THREE.MeshLambertMaterial({color:0x205020});
msh=new THREE.Mesh(gm,mt);
scene.add(msh);
msh.receiveShadow=true;
}
LAND();



TREE=function(){
grp=new THREE.Group();

gm=new THREE.ConeGeometry(1,4, 12);
mt=new THREE.MeshLambertMaterial({color:0x005000});
msh=new THREE.Mesh(gm,mt);
grp.add(msh);
msh.translateY(4/2+1);
msh.castShadow=true;

gm=new THREE.CylinderGeometry(.25,.25,2);
mt=new THREE.MeshLambertMaterial({color:0x503010});
msh=new THREE.Mesh(gm,mt);
grp.add(msh);
msh.castShadow=true;

scene.add(grp);

return grp;
}

for(var i=0;i<100;i++){
msh=TREE();
msh.position.set((Math.random()-.5)*100,0,(Math.random()-.5)*100);
}

scene.add(new THREE.AmbientLight(0xffffff,1))

v=new THREE.DirectionalLight(0xffffff,1);
scene.add(v)
v.castShadow=true;
renderer.shadowMapEnabled=true;

v.translateX(20);v.translateY(20);v.translateZ(20);



},1000);
