/*
* js/main.js - Azpazeta Main JavaScript
*/
window.addEventListener("DOMContentLoaded",function(){
	var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        geometry = new THREE.CubeGeometry( 400, 400, 400 );
		var azp_texture=new THREE.ImageUtils.loadTexture("images/azpazeta_svg_512.png");
		azp_texture.minFilter = THREE.LinearMipMapNearestFilter;
		azp_texture.magFilter = THREE.LinearFilter;
        material = new THREE.MeshBasicMaterial( { map: azp_texture } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
		
		if(document.createElement("canvas").getContext("webgl")!=null)
		{
			//Check WebGL
			renderer = new THREE.WebGLRenderer();
		}else if(document.createElement("canvas").getContext("experimental-webgl")!=null)
		{
			//Check Experimenal WebGL
			renderer = new THREE.WebGLRenderer();
		}else if(document.createElement("canvas").getContext("2d")!=null)
		{
			//Check canvas
			renderer=new THREE.CanvasRenderer();
		}else{
			//Put an image
			renderer={
				setSize: function(x,y){/*Do nothing, only compaibility*/},
			}
			var img=document.createElement("img");
			img.src="images/azpazeta_svg_512.png";
			img.alt="Azpazeta logo";
			renderer.prototype.domElement=img;
		}
        
        renderer.setSize( window.innerWidth/100*75, window.innerHeight/100*75 );

        document.getElementById("cube").appendChild( renderer.domElement );

    }

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );

    }


});
window.addEventListener("DOMContentLoaded",function(){
	var music=new Audio;
	music.src="music/ClassicRPGBattle.ogg";
	music.loop=true;
	music.play();

	var musicControl=document.getElementById("musiccontrol");
	musicControl.addEventListener("click",function(){
		if(!music.paused)
			music.pause();
		else
			music.play();
	
	});
	

});
window.addEventListener("DOMContentLoaded",function(){
	var list=["images/azpazeta_svg_512.png","images/azpazeta_svg_128.png"];
	var current=0;
	var img=document.getElementById("visor");
	var prev=document.getElementById("prev");
	prev.addEventListener("click",function(){
		if(current!=0)
		{
			current--;
			img.src=list[current];
		}
	});
	var next=document.getElementById("next");
	next.addEventListener("click",function(){
		if(current+1!=list.length)
		{
			current++;
			img.src=list[current];
		}
	});
});