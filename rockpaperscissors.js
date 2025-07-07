let userscore = 0;
            let compscore = 0;
            
            function getusermove(usermove){
                usermove = (prompt("Rock Paper Scissors go: ")).toString().toLowerCase();
                if (usermove !== "rock" && usermove !== "paper" && usermove !== "scissors"){alert("Invalid input");usermove = (prompt("Rock Paper Scissors go: ")).toString().toLowerCase(); }
                return usermove;
            }

            function getcompmove(compmove){
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
                 let compmove = getcompmove();
                 console.log(`com: `+ compmove)

                 

                    if (usermove === "rock" && compmove === "scissors"){
                        console.log("You win");
                        userscore++;
                    } else if (usermove === "paper" && compmove === "rock"){
                        console.log("You win");
                        userscore++;
                    } else if (usermove === "scissors" && compmove ==="paper"){
                        console.log("You win");
                        userscore++;
                    } else if (compmove === "rock" && usermove === "scissors"){
                        console.log("you lost");
                        compscore++;
                    } else if (compmove === "paper" && usermove === "rock"){
                        console.log("you lost");
                        compscore++
                    }else if (compmove === "scissors" && usermove === "paper"){
                        console.log("you lost");
                    }else if (usermove === compmove){console.log("it's a tie."); userscore++; compscore++;}
                }

                if (userscore>compscore){console.log("YAY! You won the Game.")}
                else if (compscore>userscore){console.log("You lost. Better luck next time.")}
                else if (compscore===userscore){console.log("The Game is a tie.Shall we play again?")}

                console.log("Your Score: "+ userscore);
                console.log("Comp Score: "+ compscore);
            }    
