var paragraph = document.getElementById('paragraph');

/*Font family*/
function myFunction(){
var font = document.getElementById('select').value;

switch(font){
    case "arial":
        paragraph.style.fontFamily = "arial";
        break;
    case "cambria":
        paragraph.style.fontFamily = "cambria";
        break;
    case "monospace":
        paragraph.style.fontFamily = "monospace";
        break;
    case "georgia":
        paragraph.style.fontFamily = "georgia";
        break;
    case "default":
        paragraph.style.fontFamily = "";
        break;
    }
}

/*Font Size*/

var slider = document.getElementById('range-slider');
var output = document.getElementById('size');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    var num = this.value;
    var string = num.toString();
    document.getElementById('paragraph').style.fontSize = num + "px"; 
}

/*font color*/
var black = document.getElementById('black');
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');

black.addEventListener('click', function() {
    paragraph.style.color = "black";
})
red.addEventListener('click', function() {
    paragraph.style.color = "red";
})
blue.addEventListener('click', function() {
    paragraph.style.color = "blue";
})
green.addEventListener('click', function() {
    paragraph.style.color = "green";
})

/*font style*/
var light = document.getElementById('light');
var bold = document.getElementById('bold');

light.addEventListener('click', function() {
    paragraph.style.fontWeight = "lighter";
})
bold.addEventListener('click', function() {
    paragraph.style.fontWeight = "bold";
})