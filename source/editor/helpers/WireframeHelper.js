"use strict";

function WireframeHelper(object, hex) 
{
	var material = new THREE.MeshBasicMaterial(
	{
		color: (hex !== undefined) ? hex : 0xFFFFFF,
		wireframe: true,
		transparent: false,
		opacity: 1.0
	});

	THREE.Mesh.call(this, object.geometry, material);

	this.matrix = object.matrixWorld;
	this.matrixAutoUpdate = false;
	this.object = object;

	this.update();
}

WireframeHelper.prototype = Object.create(THREE.Mesh.prototype);

WireframeHelper.prototype.update = function()
{
	if(this.object !== null)
	{
		this.matrix = this.object.matrixWorld;
		this.geometry = this.object.geometry;
	}
};