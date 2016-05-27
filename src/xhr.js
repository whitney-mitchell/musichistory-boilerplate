function pullInSongsOnLoad() {
	console.log(this.responseText);
}

function executeThisCodeIfXHRFails() {
	throw "Something went wrong. Try Again.";
	console.log("error");
}

var loadJson = new XMLHttpRequest();
loadJson.addEventListener("load", pullInSongsOnLoad);
loadJson.addEventListener("error", executeThisCodeIfXHRFails);
loadJson.open("GET", "songs.json");
loadJson.send();
