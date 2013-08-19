/*
* unity.js : Support for Ubuntu Unity WebApps
*/
function goPage(url)
{
	location.href=url;

}
function setupAZP(){
	Unity.addAction("/Links/Promotional site",goPage("http://adrianarroyocalle.github.io/azpazeta-promotional-sebsite"));
	Unity.addAction("/Links/Source code",goPage("http://launchpad.net/azpazeta"));
	Unity.addAction("/Links/Spanish fans",goPage("http://sites.google.com/site/divelmedia"));
	
	Unity.Launcher.addAction("Promotional site",goPage("http://adrianarroyocalle.github.io/azpazeta-promotional-sebsite"));
	Unity.Launcher.addAction("Source code",goPage("http://launchpad.net/azpazeta"));



}
window.addEventListener("DOMContentLoaded",function(){
	if(external.getUnityObject != undefined)
	{
		window.Unity=external.getUnityObject(1.0);
		Unity.init({
			name: "Azpazeta",
			icon: "images/azpazeta_svg_128.png",
			onInit: setupAZP,
		});



	}
},false);
