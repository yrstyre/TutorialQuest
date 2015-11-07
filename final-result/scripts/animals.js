// This is a so called function. All the code that is written inside this functions curly brackets will not be runned before
// you call the function.
// We will call this function (named makeHorseLadySpeak) when we press the button. Then the code inside it will be runned.
// You call a function by writing the name of it followed by two parenthesis, like this: makeHorseLadySpeak()
function makeHorseLadySpeak() {
	alert("OMG, my voice is back! Thank you!");
}

function makeMrGooseSpeak() {
	var whatGooseIsGoingToSay = "hrmmfph..";
	alert(whatGooseIsGoingToSay);
}

function makeBadgerSpeak() {
	// This is going to be empty from start. User is going to insert what hen wants henself
	var whatBadgerIsGoingToSay = "Oh. My voice is back.. Alright.";
	alert(whatBadgerIsGoingToSay);
}

function makeMrsHenSpeak() {
	if (confirm("Something to confirm: ") === true) {
		alert("Hello!");
	}
}

function makeMissFoxSpeak() {
	var whatFoxSays = prompt("What does the fox say?: ");
	alert(whatFoxSays);
}
