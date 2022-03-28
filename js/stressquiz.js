function calculate() {
	//undefined varibale
	var level1;
	var level2;
	var level3;


	//user input is parsed to be an integer
	var q1 = parseInt(document.getElementById('input_q1').value);
	var q2 = parseInt(document.getElementById('input_q2').value);
	var q3 = parseInt(document.getElementById('input_q3').value);
	var q4 = parseInt(document.getElementById('input_q4').value);
	var q5 = parseInt(document.getElementById('input_q5').value);
	var calc = q1 + q2 + q3 + q4 + q5;


	//if score is less than/equal to 17
	if (calc <= 17) {
		var level1 = "According to your results your stress level is: Level 1";
		var tip1 = "Although your stress levels are not extremely high, it is important to incorporate some stress relieving activities into your daily routine in order to prevent your stress levels from increasing. Take a break: Give yourself one 30 min break out of every day, use this break to do whatever you enjoy, stay away from tasks or environments that cause stress (during this time you can read, write, paint/draw/ meditate)";

		//document.getElementById('display').innerHTML = calc;
		document.getElementById('message').innerHTML = level1;
		document.getElementById('tips').innerHTML = tip1;
	}

	//if score is between 18 and 34
	if (calc >= 18 && calc <= 34) {
		var level2 = "According to your results your stress level is: Level 2";
		var tip2 = "Your stress levels are moderately high, and it is important that you take the necessary steps to reduce your stress.  Read the tips below and choose at least one to try out. Write down your thoughts (Grab a pen and journal.  Throughout the day use this journal to write your thoughts and feelings.  Whenever you feel overwhelmed, reflect on why you feel this way and write about it.) Identify the problem (stress triggers) and come up with ways to make this situation less stressful. Sometimes it is important to take a step back and look at your life, and analyze your situation.";

		//document.getElementById('display').innerHTML = calc;
		document.getElementById('message').innerHTML = level2;
		document.getElementById('tips').innerHTML = tip2;

	}

	//if score is between 35 and 50
	if (calc >= 35 && calc <= 50) {
		var level3 = "According to your results your stress level is: Level 3";
		var tip3 = "Your stress levels are extremely high and you need to find ways to reduce your stress levels.  There are many factors that can cause stress, and although some of these factors may be out of your control it is important to make an attempt to reduce your stress and improve your overall mental health. Take a break (Give yourself one 30 min break out of every day, use this break to do whatever you enjoy, stay away from tasks or environments that cause stress. During this time you can read, write, paint/draw/ meditate). Write down your thoughts (Grab a pen and journal.  Throughout the day use this journal to write your thoughts and feelings.  Whenever you feel overwhelmed, reflect on why you feel this way and write about it.) Identify the problem (stress triggers) and come up with ways to make this situation less stressful. Sometimes its important to take a step back and look at your life, analyze your situation). Say positive affirmations (repeat a positive phrase to yourself daily) eventually you will believe the words you say.";



		document.getElementById('message').innerHTML = level3;
		document.getElementById('tips').innerHTML = tip3;

	}
}
