// Get DOM elements
const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const redBox = document.getElementById('redBox');
const blueBox = document.getElementById('blueBox');
const greenBox = document.getElementById('greenBox');
const yellowBox = document.getElementById('yellowBox');

// Greet button functionality
greetBtn.addEventListener('click', function() {
	const userName = nameInput.value;
	if (userName) {
		greeting.textContent = 'Hello, ' + userName;
	} else {
		greeting.textContent = 'Hello';
	}
});

// Red box click
redBox.addEventListener('click', function() {
	redBox.style.backgroundColor = 'red';
});

// Blue box click
blueBox.addEventListener('click', function() {
	blueBox.style.backgroundColor = 'blue';
});

// Green box click
greenBox.addEventListener('click', function() {
	greenBox.style.backgroundColor = 'green';
});

// Yellow box click
yellowBox.addEventListener('click', function() {
	yellowBox.style.backgroundColor = 'yellow';
});
