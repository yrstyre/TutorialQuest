//This is an object called "person" with a property called "name"
var person = {
	name: "Ellen",
	says: "Can you see me yet?"
};

function makeEllenLive () {
	//In the html p-tag with id "person-name", print out Ellens name
	document.getElementById("person-name").innerHTML = person.name;

	document.getElementById("person-says").innerHTML = person.says;

	// document.getElementById("person-sentence").className += " visible";
}
