//your JS code here. If required.
let targetElement = document.querySelector("#level");

let finalLevel = levelOfDom(level);

function levelOfDom(element){
	let level = 0;
	while (element !== document.documentElement) {
		level++;
		element = element.parentNode
	}
	return level + 1;
}

alert(finalLevel);