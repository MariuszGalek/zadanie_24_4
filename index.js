const formatDate = time => {
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time % 3600) / 60);
	var seconds = Math.floor(time % 60);
	var result = "";

	if (!time) {
		return "0s";
	}

	if (hours) {
		result += hours + "h ";
	}

	if (minutes) {
		result += minutes + "m ";
	}

	if (seconds) {
		result += seconds + "s ";
	}

	return result.slice(0, -1);
};

module.exports = formatDate;