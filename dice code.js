    // Functions alow use to organize our cod and make it reusable. want it as descriptive as possible.
    function playDice(){
        console.log("playDice was called");
        //roll die1
        let roll1 = rollDie();
        //roll die2
        let roll2 = rollDie();
        let sum = roll1 + roll2;
        let result = "";
        // Lose if they roll less than 41.
        //this means it has to be within 30- 90 to get a tie
        if (sum >=41 && sum < 90){
            console.log("Tie")
            result = "you tied";
        }
        else if (sum < 41){
            console.log("you lose");
            result = "you lose";
        }
        else if( sum >= 90){
            console.log("you Win!")
            result = "you win";
        }

        // sets this id to the Sum variable
        document.getElementById("divSum").textContent = "Sum = " + sum;
        document.getElementById("divRoll1").textContent = "Roll1 = " + roll1;
        document.getElementById("divRoll2").textContent = "Roll2 = " + roll2;
        document.getElementById("divResult").textContent = "Result = " + result;
    }
       //Function for the random die
    function rollDie(){
         //this generates a random number then times it by fifty to make a 50 sided die.
        let die = Math.random()*50 // *= multiply by
        //round the rumber to whole number
        return Math.ceil(die)
        
    }  
    function validateForm()
    {
        let FullName = ""
        let FirstName = document.getElementById("txtFirstName").value.trim();
        let LastName = document.getElementById("txtLastName").value.trim();
        let Zipcode = document.getElementById("txtZipcode").value.trim();
        console.log(FirstName)
        console.log(LastName)
        console.log(Zipcode)
        message = ""
        // Valadation - we need to make sure that first name + " " + last name is less than 20 charectors.
        // Zip needs to be 5 digits
        FullName = FirstName + " " + LastName
        console.log(FullName)
        if (FullName.length > 20 || FullName.length == 1){
            //invaled name
            message = "Name was spelt incorectly or done wrong."
        }
        else {
            code = true
        }
        if (Zipcode.length != 5){
            message = message + " Your zip code is 5 charectors"
        }
        else (code = true)
        {
        //Secrete message if players do it right
        message = "You did it "+ FirstName}
        console.log(message) 
        document.getElementById("divMessage").textContent = message;
    }
            //Index code to move images
            //keeps track of speed and who fast the image moves
            let intervalID=0;
            //this function starts the picture movement
            function startImage(){
                //create shortcut to the image in Index
                let image = document.getElementById("MemeImage");
               
                intervalID = setInterval(function(){
                    let xCord = getRandNum();
                    let yCord = getRandNum();

                    image.style.left = xCord + "px"
                    image.style.top = yCord + "px"
            },1000); //Ever second
            //swap the butions off/on
            document.getElementById("startImage").disabled = true;
            document.getElementById("endImage").disabled = false;
            }
            //Random number generator
            function getRandNum(){
                //number between 0-799
                return Math.floor(Math.random()*900)
            }
            //stopes the image from moving
            function stopImage(){
                clearInterval(intervalID)
            //activate the on/off
            document.getElementById("startImage").disabled = false;
            document.getElementById("endImage").disabled = true;
            }