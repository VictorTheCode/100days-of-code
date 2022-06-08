let myImage = document.querySelector('img');

myImage.onclick = function(){
let mySrc=myImage.getAttribute('src');
if(mySrc=== 'images/firefox.webp'){
myImage.setAttribute('src','images/pexel.jpg');
}
else
{
myImage.setAttribute('src','images/firefox.webp');
}
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
setUserName();
}

