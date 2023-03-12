// Create a for loop that will list all of the albums in albums.js
// If there are less than 10 albums, an <h4> message should be populated in the header that says "You need more albums!"
// Otherwise, an <h4> message should be populated in the header that says "Let's start playing music!"

// You already have the variable "html" that can be used to create the album listings for the DOM, 
// as well as the code to produce whatever content the variable "html" has

//The message variables have also been included

// let moreAlbumsMessage = "You need more albums!";
// let playMusicMessage = "Let's start playing music!";

// ## *albumListing.js*
// - "for loop" to list *albums in albums.js*
// - If there are less than 10 albums: show *<h4>* message to say "You need more albums!"
// - Otherwise, show message to say *<h4>*"Let's start playing music!"

let limit = albums.length;


if ( 10 >  limit ) {
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


let html = '';

for (let i = 0; i < albums.length; i++) {

     if (i === 1 || i === 7 || i === 8) {
 
 html += `
 
      <h2>${albums[i].name}</h2>
      <h3>${albums[i].artist}</h3>
      <p>Genre: ${albums[i].genre}</p>
      <img src="${albums[i].artwork}" alt="${albums[i].artist}">
      <p>Top 3 Favorite!</p>

 `;

     } else {
           
 html += `
 
 <h2>${albums[i].name}</h2>
 <h3>${albums[i].artist}</h3>
 <p>Genre: ${albums[i].genre}</p>
 <img src="${albums[i].artwork}" alt="${albums[i].artist}">

`;

     }

};

document.querySelector('main').insertAdjacentHTML('beforeend', html);  

for ( i = 0; i < document.querySelectorAll('h2').length; i++) {
     
     if (i === 1 || i === 7 || i === 8) {
     document.querySelectorAll('h2')[i].style.color = '#FFD700';
     } else {
          document.querySelectorAll('h2')[i].style.color = '#d634ff';
          document.querySelectorAll('h2')[i].style.fontFamily = '"Times New Roman", Times, serif';
     }
}

for ( i = 0; i < document.querySelectorAll('h3').length; i++) {
     if (i === 1 || i === 7 || i === 8) {
     document.querySelectorAll('h3')[i].style.color = '#FFD700';
     } else {
          document.querySelectorAll('h3')[i].style.color = '#4ff465f1';
          document.querySelectorAll('h3')[i].style.fontFamily = '"Times New Roman", Times, serif';
     }
}

for ( i = 0; i < document.getElementsByTagName('p').length; i++) {
     
     if (i === 1 || i === 2 || i === 8 || i === 9 || i === 10 || i ===11) {
     document.getElementsByTagName('p')[i].style.color = '#FFD700';
     } else {
          document.querySelectorAll('p')[i].style.color = '#FF9B00';
          document.querySelectorAll('p')[i].style.fontFamily = '"Times New Roman", Times, serif';
     }
}
