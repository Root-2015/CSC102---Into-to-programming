 function testAibohphobia(){
    //Grabs user input and gets rid of spaces at the end and begining of the value
    let userInput = document.getElementById("txtInput").value.trim();
    
    isPalendrome(userInput);
    //this does not need ==true because its implied
    if (isPalendrome(userInput)){
        document.getElementById("divResult").textContent = userInput +", This is a Palindrom"
    }
    else{
        document.getElementById("divResult").textContent = userInput +", This is not a palindrom"
    }
}

//function to test if a work is a palendrom
function isPalendrome(wordToTest){
    //remove any spaces inside of the textbox
    let cleanedWord = wordToTest.replace(/\s/g,"")
    //gets rid of upper case letters
    cleanedWord = cleanedWord.toLowerCase();

    //convert clean sting to an array.
    let arrCleaned = cleanedWord.split("");
    //revers array content
    arrCleaned = arrCleaned.reverse();
    //turn it back to a string
    let reversedWord = arrCleaned.join("");
    //compare if cleaned and reversed word is the same
    return cleanedWord == reversedWord;
}
