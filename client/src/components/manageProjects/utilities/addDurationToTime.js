export const addDurationToTime = (startTimeDate, duration) => { 
	let date = startTimeDate;
	let endTime;
	// Create the endTime by adding seconds based on the selected duration to the timestamp and converting it back to date
	if(duration){
		return endTime = new Date(date.getTime() + (Number(duration)*3600000))
	} else {
		throw new Error('Error: Cannot calculate endTime.')
	}
};
