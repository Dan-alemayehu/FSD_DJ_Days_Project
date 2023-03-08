// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included

// let moreAlbumsMessage = "You need more albums!";
// let playMusicMessage = "Let's start playing music!";

let limit = albums.length;

if ( 9 >  limit ) {
     let moreAlbumsMessage = "You need more albums!";
     let header = document.querySelector("header");
     header.innerHTML =
     `<h4>${moreAlbumsMessage}</h4>`;
} else {
     let playMusicMessage = "Let's start playing music!";
     let header = document.querySelector("header");
     header.innerHTML =
     `<h4>${playMusicMessage}</h4>`;
};

// let situation = ablums.length;



let html = '';

for (let i = 0; i < albums.length; i++) {
 
 html += `
 
      <h2>${albums[i].name}</h2>
      <h3>${albums[i].artist}</h3>
      <p>Genre: ${albums[i].genre}</p>
      <img src="${albums[i].photo}" alt="${albums[i].artist}">
 
 `;
  
};

document.querySelector('main').insertAdjacentHTML('beforeend', html);       