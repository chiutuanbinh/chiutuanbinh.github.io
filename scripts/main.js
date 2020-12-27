let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/tree.jpeg') {
        myImage.setAttribute('src', 'images/water.jpeg');
    } else {
        myImage.setAttribute('src', 'images/tree.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
    setUserName()
}
if (!localStorage.getItem('naem')) {
    setUserName();           
} else {
    let storeName = localStorage.getItem('naem');
    myHeading.textContent = 'ZL is not cool ' + storeName
}
function setUserName(){
    let userName = prompt('Please enter your name');
    if (!userName){
        setUserName();
    } else {
        localStorage.setItem('naem', userName)
        myHeading.textContent = `ZL is not cool, ${userName}`
    }
    
}
