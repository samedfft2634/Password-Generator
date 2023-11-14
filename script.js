//DOM Elements
const resultEl = document.getElementById("passResult");
const lengthEl = document.getElementById("result");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const includeNumber = document.getElementById("incNumbers");
const includeSymbol = document.getElementById("incSymbols");
const generateBtn = document.getElementById("generateBtn");
const rangeValue = document.getElementById("rangeValue");
const clipboardEl = document.getElementById("clipboard");
const myRange = document.getElementById("myRange");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

function getRandomCharacter(types) {
    const randomIndex = Math.floor(Math.random() * types.length);
    const funcName = types[randomIndex];
    return randomFunc[funcName]();
}

// Random Values
function getRandomLower() {return String.fromCharCode(Math.floor(Math.random() * 26) + 97);}

function getRandomUpper() {return String.fromCharCode(Math.floor(Math.random() * 26) + 65);}

function getRandomNumber() {return String.fromCharCode(Math.floor(Math.random() * 10) + 48);}

function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//Generate event listen
generateBtn.addEventListener("click", () => {
	clipboardEl.style.display = "block"
	const length = +myRange.value;
	const hasLower = lowerCase.checked;
	const hasUpper = upperCase.checked;
	const hasNumber = includeNumber.checked;
	const hasSymbol = includeSymbol.checked;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,	length);
});

//Copy Password to clipboard
clipboardEl.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = resultEl.innerText;
	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	notfy()
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";

    const typesArr = [];
    if (lower) typesArr.push('lower');
    if (upper) typesArr.push('upper');
    if (number) typesArr.push('number');
    if (symbol) typesArr.push('symbol');

    if (typesArr.length === 0) {
        clipboardEl.style.display = "none";
        resultEl.innerText = "Verify a condition!";
        resultEl.style.color = "red";
        setTimeout(() => {
            resultEl.innerText = "P4$5W0rD!";
            resultEl.style.color = "orange";
        }, 1000);

        return resultEl.textContent;
    }

    for (let i = 0; i < length; i++) {
        generatedPassword += getRandomCharacter(typesArr);
    }

    const finalPass = generatedPassword.slice(0, length);
    return finalPass ? finalPass : "Please choose password length.";
}

function updateRange() {
	var range = myRange;
	var value = range.value;
	rangeValue.innerText = value;

	const liFirst = document.getElementById("liFirst");
    const liSecond = document.getElementById("liSecond");
    const liThird = document.getElementById("liThird");
    const liFourth = document.getElementById("liFourth");
    const difText = document.getElementById("difText");

	if (value <= 5) {
        liFirst.style.backgroundColor = "lightgreen";
        liSecond.style.backgroundColor = "";
        liThird.style.backgroundColor = "";
        liFourth.style.backgroundColor = "";
        difText.textContent = "Too Weak!";
        difText.style.color = "lightgreen";
    } else if (5 < value && value <= 10) {
        liFirst.style.backgroundColor = "lightgreen";
        liSecond.style.backgroundColor = "green";
        liThird.style.backgroundColor = "";
        liFourth.style.backgroundColor = "";
        difText.textContent = "EASY";
        difText.style.color = "green";
    } else if (10 < value && value <= 15) {
        liFirst.style.backgroundColor = "lightgreen";
        liSecond.style.backgroundColor = "green";
        liThird.style.backgroundColor = "tomato";
        liFourth.style.backgroundColor = "";
        difText.textContent = "MEDIUM";
        difText.style.color = "tomato";
    } else if (15 < value && value <= 20) {
        liFirst.style.backgroundColor = "lightgreen";
        liSecond.style.backgroundColor = "green";
        liThird.style.backgroundColor = "tomato";
        liFourth.style.backgroundColor = "red";
        difText.textContent = "HARD!";
        difText.style.color = "red";
        
    }
}
myRange.addEventListener("input", ()=>{
    updateRange();
    generateBtn.click()   
});

window.addEventListener("load", () => {
	updateRange();
});

//notfy alert
function notfy() {
	const notyf = new Notyf();
	notyf.success({
		message: "Copied!",
		duration: 1000,	
		position: {
			x: "center",
			y: "top",
		},
	});
}

