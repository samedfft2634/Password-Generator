//DOM Elements
const resultEl = document.getElementById('passResult')
const lengthEl = document.getElementById('result')
const upperCase = document.getElementById('upperCase')
const lowerCase = document.getElementById('lowerCase')
const includeNumber = document.getElementById('incNumbers')
const includeSymbol = document.getElementById('incSymbols')
const generateBtn = document.getElementById('generateBtn')
const rangeValue = document.getElementById('rangeValue')
const clipboardEl = document.getElementById('clipboard')
const myRange = document.getElementById('myRange')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


//Generate event listen
generateBtn.addEventListener("click",()=>{
    const length = +myRange.value
    const hasLower = lowerCase.checked;
    const hasUpper = upperCase.checked;
    const hasNumber = includeNumber.checked;
    const hasSymbol = includeSymbol.checked;
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    )
})

//Generate password function
function generatePassword(lower,upper,number,symbol,length){
    // 1. Init pw var
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final pw to the pw var and return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol 
    console.log('typesCount',typesCount)
    const typesArr = [{lower},{upper},{number},{symbol}].filter((type)=>Object.values(type)[0])
    console.log('typesArr: ',typesArr)
}




// Random Values
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random()* symbols.length)]
}






function updateRange() {
	var range = myRange
	var value = range.value;
	rangeValue.innerText = value;
    console.log(value)
}
myRange.addEventListener("input", updateRange);
