var sec;
var done;

//timer
function timer() {
	sec = document.getElementById('timer').innerHTML;
	sec = parseInt(sec, 10);

	//when timer is 0 seconds it stops
	//while loop
	while (sec == 0) {
		return;

	}
	//sec is subtracted by one every second
	sec--;
	//timer is displayed
	done = document.getElementById('timer');
	done.innerHTML = sec;
	start = setTimeout(timer, 1000);
}


//Sample Affirmations
//blank variable
var display_val = " ";

function affirmation() {
	//parse user input
	var affir = parseInt(document.getElementById("affir_amount").value);

	var display_job = document.getElementById("display");

	//array of duties
	var array_affir = ["'My ability to overcome challenges is limitless; my potential to succeed is infinite.'", "'I am at peace with all that has happened, is happening, and will happen.'", "'Although I am not perfect, I am everything I need to be and more.'", "'I give myself the time and space to learn and grow.'", "'Everything I need to succeed is within me, and I will do what is necessary to heal and grow.'"];
	//while loop

	if (affir > 5) {
        //Extra alert message
		//lets user know if they enter a number out of range
		alert("Please Enter a Number From 1-5");
		//prevents the affirmations from printing
		return;
	}
	//user input must be more than zero
	while (affir > 0) {
		//inputted variable minus one
		affir--;

		//the index is subtracts from itself
		if (array_affir[affir] !== 0) {
			display_val = display_val + array_affir[affir] + " ";

		} else {
			display_val = display_val + " ";
		}
		display.innerHTML = display_val;
	}

}

