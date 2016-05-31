
// Once the user fills out the song form and clicks the add button, you
// should collect all values from the input fields, add the song to your
// array of songs, and update the song list in the DOM.
var addView = document.getElementById("add-view");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("add-link");
var listLink = document.getElementById("list-link");

var addMusicButton = document.getElementById("addButton");

listLink.addEventListener("click", function() {
	addView.classList.add("hidden");
	addView.classList.remove("visible");
	listView.classList.add("visible");
  listView.classList.remove("hidden");
});

addLink.addEventListener("click", function() {
	listView.classList.add("hidden");
	listView.classList.remove("visible");
	addView.classList.add("visible");
	addView.classList.remove("hidden");
});

addMusicButton.addEventListener("click", function() {
	var songInput = document.getElementById("newSong");
	var artistInput = document.getElementById("newArtist");
	var albumInput = document.getElementById("newAlbum");
	var songsArray = document.getElementById("song-list");
	var newMusic = '<li class="songs-array">' + songInput.value + ' - by ' + artistInput.value + ' on the album ' + albumInput.value + '</li>';
	songsArray.innerHTML += newMusic;
	songInput.value = "";
	artistInput.value = "";
	albumInput.value = "";
});



