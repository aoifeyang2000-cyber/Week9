function enterMarks(){
	document.getElementById("main").innerHTML ="";
	subjectCount= Number(prompt("How many subjects did you take?"));
	total=0;
	
	for(i=1; i <= subjectCount; i++){
		mark = Number(prompt("Enter mark for the subject " + i + ":"));
		total = total + mark;
		
		document.getElementById("main").innerHTML +=
			"Subject " + i + " : " + mark + "<br>";
	}
	 average = total / subjectCount;
	 average = Math.round(average);
	 grade = "";
	 
	 if(average >= 85){
		 grade = "A";
	 }else if (average >= 75){
		 grade ="B";
	 }else if (average >= 60){
		 grade = "C";
	 }else if (average >= 40){
		 grade = "D";
	 }else{
		 grade ="Fail";
	 }
	 document.getElementById("main").innerHTML += "<br>Total Marks: " + total + "<br>";
     document.getElementById("main").innerHTML += "Average Mark: " + average + "<br>";
     document.getElementById("main").innerHTML += "Grade: " + grade;
}