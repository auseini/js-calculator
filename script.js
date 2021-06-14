//get reference to buttons
const buttons = document.querySelectorAll("button");
//get reference to display
const display = document.getElementById("display");
//var to holds string of digits
let numOne = "";
let numTwo = "";
let currNum = "";

//var to hold operation
let operation = "";

//add event listeners to buttons
buttons[0].addEventListener("click", makeNegative);
buttons[1].addEventListener("click", clearDisplay);
buttons[2].addEventListener("click", deleteDigit);
buttons[3].addEventListener("click", addDigit);
buttons[4].addEventListener("click", addDigit);
buttons[5].addEventListener("click", addDigit);
buttons[6].addEventListener("click", setOperation);
buttons[7].addEventListener("click", addDigit);
buttons[8].addEventListener("click", addDigit);
buttons[9].addEventListener("click", addDigit);
buttons[10].addEventListener("click", setOperation);
buttons[11].addEventListener("click", addDigit);
buttons[12].addEventListener("click", addDigit);
buttons[13].addEventListener("click", addDigit);
buttons[14].addEventListener("click", setOperation);
buttons[15].addEventListener("click", addDigit);
buttons[16].addEventListener("click", addDigit);
buttons[17].addEventListener("click", calculate);
buttons[18].addEventListener("click", setOperation);


//function to clear display
function clearDisplay(e){
	display.textContent = "0";
	currNum = "";
	numOne = "";
}
//function to delete digit
function deleteDigit(e){
	currNum = currNum.slice(0, -1);
	updateDisplay();
}
//function to add digit or decimal to number
function addDigit(e){
	if (e.target.textContent === "." && currNum.includes(".")){
		return;
	}
	currNum += e.target.textContent;
	updateDisplay();
}
//function to set operation from input
function setOperation(e){
	operation = e.target.textContent;
	currNum = display.textContent;
	if (numOne === ""){
		numOne = currNum;
	}
	currNum = "";
	
}
//function to calculate value
function calculate(){
	if(currNum === ""){
		numTwo = numOne;
	} else{
		numTwo = currNum;	
	}
	
	switch (operation){
		case "+":
			currNum = (+numOne) + (+numTwo);
			break;
		case "-":
			currNum = (+numOne) - (+numTwo);
			break;
		case "x":
			currNum = (+numOne) * (+numTwo);
			break;
		default:
			if(numTwo === "0"){
				alert("Can not divide by 0!");
				break;
			}
			currNum = (+numOne) / (+numTwo);
	}
	updateDisplay();

	//adjust values to continue with new operations
	numOne = "";
	currNum = "";
}
//function to update display
function updateDisplay(){
	if (currNum === ""){
		display.textContent = "0";
	} else{
		display.textContent = currNum;
	}
	
}
//function to make num negative
function makeNegative(){
	if(currNum === ""){
		currNum = "-";
	} else{
		alert("Can only have 1 negative sign at the beginning of the number.")
	}
	updateDisplay();
}