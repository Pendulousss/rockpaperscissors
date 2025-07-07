            let userscore = 0;
            let computerputerscore = 0;
            
            function getusermove(usermove){
                usermove = (prompt("Rock Paper Scissors go: ")).toString().toLowerCase();
                if (usermove !== "rock" && usermove !== "paper" && usermove !== "scissors"){alert("Invalid input");usermove = (prompt("Rock Paper Scissors go: ")).toString().toLowerCase(); }
                return usermove;
            }

            function getcomputermove(computermove){
                let rannum = Math.random();
                if (rannum <= 0.33){
                    return "rock";
                } else if (rannum > 0.33 && rannum < 0.66){
                    return "paper";
                } else if (rannum >0.66){
                    return "scissors"
                }
            }

            function playgame(){

                for (i=0;i<5;i++){
                 let usermove = getusermove();
                 console.log(`you: `+ usermove);
                 let computermove = getcomputermove();
                 console.log(`computer: `+ computermove)

                 

                    if (usermove === "rock" && computermove === "scissors"){
                        console.log("You win");
                        userscore++;
                    } else if (usermove === "paper" && computermove === "rock"){
                        console.log("You win");
                        userscore++;
                    } else if (usermove === "scissors" && computermove ==="paper"){
                        console.log("You win");
                        userscore++;
                    } else if (computermove === "rock" && usermove === "scissors"){
                        console.log("you lost");
                        computerputerscore++;
                    } else if (computermove === "paper" && usermove === "rock"){
                        console.log("you lost");
                        computerputerscore++
                    }else if (computermove === "scissors" && usermove === "paper"){
                        console.log("you lost");
                    }else if (usermove === computermove){console.log("it's a tie."); userscore++; computeruterscore++;}
                }

                if (userscore>computerscore){console.log("YAY! You won the Game.")}
                else if (computerscore>userscore){console.log("You lost. Better luck next time.")}
                else if (computerscore===userscore){console.log("The Game is a tie.Shall we play again?")}

                console.log("Your Score: "+ userscore);
                console.log("computer Score: "+ computerscore);
            }    
