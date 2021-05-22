const accessKey = 'FIcNZWoXV5EOqhwF0Bh3Ay_2pDCBzZnqMtJUN4izbmY';
const container = document.getElementById('container');
const cont = document.getElementsByClassName('cont');
const imgs = document.getElementById('imgs');
let inputBar = document.getElementById('input');

window.onload = () => {
	printBoes();
}



function printBoes() {
	fetch(`https://api.unsplash.com/photos/?client_id=FIcNZWoXV5EOqhwF0Bh3Ay_2pDCBzZnqMtJUN4izbmY`)
	.then(function (data){
		return data.json();
	}).then(function (data){
		for(var i = 0; i <9; i++){
			let img = document.createElement('img');
			img.className = 'box';
			img.setAttribute('src', data[i].urls.full);
			imgs.appendChild(img);
		}
	});
}

// function to remove old imgs 
// function removeOldBoxes() {
// 	container.innerHTML = '';
// }

function searchImgs(searchValue){
		fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&client_id=${accessKey}`)
		.then(function (data){
			return data.json();
		}).then(function (data){
			for(var i = 0; i < 9; i++){
				let img = document.createElement('img');
				img.className = 'box';
				img.setAttribute('src', data.results[i].urls.regular);
				container.appendChild(img);
			}
		});
}


// function for links
document.getElementById('all').onclick = function() {
	container.innerHTML = '';
	searchImgs('all');
}

document.getElementById('branding').onclick = function() {
	container.innerHTML = '';
	searchImgs('branding');
}

document.getElementById('web').onclick = function() {
	container.innerHTML = '';
	searchImgs('web');
}

document.getElementById('photography').onclick = function() {
	container.innerHTML = '';
	searchImgs('photography');
}

document.getElementById('app').onclick = function() {
	container.innerHTML = '';
	searchImgs('app');
}

document.getElementById('allb').onclick = function() {
	container.innerHTML = '';
	searchImgs('all');
}

document.getElementById('brandingb').onclick = function() {
	container.innerHTML = '';
	searchImgs('branding');
}

document.getElementById('webb').onclick = function() {
	container.innerHTML = '';
	searchImgs('web');
}

document.getElementById('photographyb').onclick = function() {
	container.innerHTML = '';
	searchImgs('photography');
}

document.getElementById('appb').onclick = function() {
	container.innerHTML = '';
	searchImgs('app');
}


// function to search with btn
document.getElementById('btnSearch').onclick = function() {
	hideImputBar();
	container.innerHTML = '';
	searchImgs(inputBar.value);
}

// funct to search with keyUp
let input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").onclick = function() {
		hideImputBar();
		container.innerHTML = '';
		searchImgs(inputBar.value);
	}
  }
});

	var pageNum = 1;
document.getElementById('btnshowMeMore').onclick = function(){
	pageNum = pageNum + 1;
	fetch(`https://api.unsplash.com/photos/?page=${pageNum}&client_id=${accessKey}`)
	.then(function (data){
		return data.json();
	}).then(function (data){
		for(var i = 0; i < 10 - 1; i++){
			let img = document.createElement('img');
			img.className = 'box';
			img.setAttribute('src', data[i].urls.full);
			imgs.appendChild(img);
		}
	});
}

document.getElementById('hideResponsiveMenu').onclick = function(){
	var menu = document.getElementById("myTopnav");
	if (menu.className === "topnav") {
	  menu.className += " responsive";
	} else {
	  menu.className = "topnav";
	}
  }

function hideImputBar(){
	if(inputBar.style.visibility == "hidden" || inputBar.style.visibility == ""){
		inputBar.style.visibility= "visible";
	} else {
		inputBar.style.visibility= "hidden";
	}
}

var btnSearchListener = document.getElementById('btnSearch');
btnSearchListener.addEventListener("mouseover", hideImputBar);
