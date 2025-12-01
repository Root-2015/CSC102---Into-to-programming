
    function checksecret(){
        
        //Grabs user input and gets rid of spaces at the end and begining of the value
        document.getElementById("divResult").textContent = ""
        document.getElementById("btnAddAudio").hidden = true;
        document.getElementById("MemeImage").hidden = true;
        document.getElementById("MemeImage2").hidden = true;
        document.getElementById("divAudio").hidden = true;
            document.getElementById("pal").hidden = true;
        let userInput = document.getElementById("txtInput1").value.trim();
        let userInput2 = document.getElementById("txtInput1").value.trim();
        let userInput3 = document.getElementById("txtInput1").value.trim();
        isword1(userInput);
        isword2(userInput2);
        isword3(userInput3);
        //this does not need ==true because its implied
        if (isword1(userInput)){
            document.getElementById("btnAddAudio").hidden = false;
            document.getElementById("divAudio").hidden = false;
        }
        else if (isword2(userInput2)){
            document.getElementById("MemeImage").hidden = false;
        }
        else if (isword3(userInput3)){
            document.getElementById("MemeImage2").hidden = false;
            document.getElementById("pal").hidden = false;
        }
        else {
            document.getElementById("divResult").textContent = "Nope Try again, Space Man >:)"
        }
  
    }
    
    //function to test if the word is spaceman
    function isword1(userInput){
        let secreteword1="spaceman"
        //remove any spaces inside of the textbox
        let cleanedWord = userInput.replace(/\s/g,"")
        //gets rid of upper case letters
        cleanedWord = cleanedWord.toLowerCase();
        return cleanedWord == secreteword1;
    }
//function to test if the word is meme
    function isword2(userInput2){
        let secreteword2="meme"
        //remove any spaces inside of the textbox
        let cleanedWord = userInput2.replace(/\s/g,"")
        //gets rid of upper case letters
        cleanedWord = cleanedWord.toLowerCase();
        return cleanedWord == secreteword2;
    }
    function isword3(userInput3){
        let secreteword3="palindrome"
        //remove any spaces inside of the textbox
        let cleanedWord = userInput3.replace(/\s/g,"")
        //gets rid of upper case letters
        cleanedWord = cleanedWord.toLowerCase();
        return cleanedWord == secreteword3;
    }
  
    