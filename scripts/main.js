var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myphoto.jpg') {
      myImage.setAttribute ('src','images/nigga.jpg');
    } else {
      myImage.setAttribute ('src','images/myphoto.jpg');
    }
}

function setUserName() {
	var myName = prompt('please enter your username');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'vfhello, ' + myName + '!';
}

if(!localStorage.getItem ('name')) {
	setUserName();
 } else {
 	var storedName = localStorage.getItem('name');
 	myHeading.textContent = 'vfhello, ' + storedName + '!';
 }

myButton.onclick = function() {
	setUserName();
}