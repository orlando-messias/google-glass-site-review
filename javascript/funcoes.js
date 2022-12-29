function loadFunction() {
	const value = localStorage.getItem('background-color');
	let container = document.getElementById('general');
	container.style.backgroundColor = `#${value}`;
	console.log(value);
}

function mudaFoto(foto) {
	document.getElementById("icone").src = "./imagens/" + foto + ".png";
};

function backgroundChange() {
	let container = document.getElementById('general');
	container.style.backgroundColor = '#424242';
	localStorage.setItem('background-color', '424242');
}

function backgroundChangeLight() {
	let container = document.getElementById('general');
	container.style.backgroundColor = '#ffffff';
	localStorage.setItem('background-color', 'ffffff');
}