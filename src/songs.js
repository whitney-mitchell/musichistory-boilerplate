// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html
// file for their Music History project. Have them download the songs.js file,
// which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Bounce - by 2 Chainz and Lil Wayne on the album ColleGrove");
songs.push("Dip - by Danny Brown on the album Old");

for (var i = 0; i < songs.length; i++) {

	var edited = songs[i].replace(/[*@(!]/g, "").replace(">", "-");
	var songsArray = document.getElementById("song-list");
	songsArray.innerHTML += '<li class="songs-array">' + edited + '</li>';


}
//.replace is a string method! b/c we're applying the method to strings, not the array.

console.log(songsArray);
