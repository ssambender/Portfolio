if(window.innerHeight > window.innerWidth){
    console.log("in portrait mode.");
}

let width;
let height;

function updateWindowSize() {
    width = window.innerWidth;
    height = window.innerHeight;
}
window.addEventListener('resize', updateWindowSize);
updateWindowSize();

let mouseX = 0;
let mouseY = 0;

let displacementX;
let displacementY;

const red = document.getElementById('overlayTextR');
const redB = document.getElementById('overlayTextRB');

const green = document.getElementById('overlayTextG');
const greenB = document.getElementById('overlayTextGB');

// Set to 10, and 0 for no vertical displacement
const numX = 30;
const numY = 50;

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    displacementX = width/2 - (width - mouseX);
    displacementY = height/2 - (height - 100 - mouseY);

    // Set a max displacement lock
    /*
    if(Math.abs(displacementX) >= width/6) {
        displacementX = width/6 * (displacementX/Math.abs(displacementX));
    }
    if(Math.abs(displacementY) > height/6) {
        displacementY = height/6 * (displacementY/Math.abs(displacementY));
    }
    */

    red.style.marginLeft = displacementX/numX + 'px';
    redB.style.marginLeft = displacementX/numX + 'px';
    green.style.marginLeft = displacementX/numX * -1 + 'px';
    greenB.style.marginLeft = displacementX/numX * -1 + 'px';

    red.style.marginTop = displacementY/numY + 'px';
    redB.style.marginTop = displacementY/numY + 'px';
    green.style.marginTop = displacementY/numY * -1 + 'px';
    greenB.style.marginTop = displacementY/numY * -1 + 'px';
});



function pageTransition(page) {
    let destination = page;
    destination = destination + '.html';

    document.getElementById('transitionOverlayR').style.visibility = 'visible';
    document.getElementById('transitionOverlayR').style.marginTop = '0vh';
    setTimeout(function(){
        document.getElementById('transitionOverlayG').style.visibility = 'visible';
        document.getElementById('transitionOverlayG').style.marginTop = '0vh';
        setTimeout(function(){
            document.getElementById('transitionOverlayB').style.visibility = 'visible';
            document.getElementById('transitionOverlayB').style.marginTop = '0vh';
            setTimeout(function(){
                document.location.href = destination;
            }, 1000);
        }, 60);
    }, 60);
}

function uiuxPage() {
    document.location.href = "uiux.html";
}

function gdPage() {
    document.location.href = "graphicdesign.html";
}

function aboutPage() {
    //document.location.href = "about.html";
    pageTransition('about');
}