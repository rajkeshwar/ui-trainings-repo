
var button = document.createElement('button');
	button.innerHTML = 'Click Me';
	document.body.appendChild(button);

	button.addEventListener('click', function(){
		alert('Hey you have clicked on the button');
	});