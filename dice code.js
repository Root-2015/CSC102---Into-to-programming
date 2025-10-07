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
        if (sum < 41){
            console.log("you lose");
            result = "you lose";
        }
        else if( sum >= 90){
            console.log("you Win!")
            result = "you win";
        }
        //this means it has to be within 30- 90 to get a tie
        else if (sum >=41 && sum < 90){
            console.log("Tie")
            result = "you tied";
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