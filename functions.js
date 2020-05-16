function redist() {
	let request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);
	request.onload = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Convert JSON data to an object
			let regions = JSON.parse(this.response);
			let output = '';
			for (
				var i = 0; i < regions.length; i++) {
				var size = regions[i].confirmed.length;
				output += '<li>' + regions[i].region + ' has a ' + regions[i].confirmed[size - 1].value + ' infected.';
				'</li>'
			}
			document.getElementById('regions').innerHTML = output;
		}
	}
	request.send();
}