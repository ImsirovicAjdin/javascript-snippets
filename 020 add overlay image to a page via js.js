/*
020: Add overlay image to a page via JS
*/
var img = document.createElement('img');

function addImage(src){
    img.src = src;
    document.body.appendChild(img);
    img.style = `
        width: 1900px;
        height: 1080px;
        margin: 0;
        padding: 0;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        opacity: 0.5;
        `
}

function imageOn(){
	img.style = `
        width: 1900px;
        height: 1080px;
        margin: 0;
        padding: 0;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        opacity: 0.5;
	`
}

function imageOff() {
	img.style = `
		opacity: 0
	`
}