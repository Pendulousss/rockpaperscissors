            let userscore = 0;
            let computerscore = 0;
            
            function getusermove(usermove){
                usermove = (prompt(`Rock Paper Scissors go: `)).toString().toLowerCase();
                if (usermove !== `rock` && usermove !== `paper` && usermove !== `scissors`){alert(`Invalid input`);usermove = (prompt(`Rock Paper Scissors go: `)).toString().toLowerCase(); }
                return usermove;
            }

            function getcomputermove(computermove){
                let rannum = Math.random();
                if (rannum <= 0.33){
                    return `rock`;
                } else if (rannum > 0.33 && rannum < 0.66){
                    return `paper`;
                } else if (rannum >0.66){
                    return `scissors`
                }
            }

            function playgame(){

                for (i=1;i<6;i++){
                 let usermove = getusermove();
                 let computermove = getcomputermove();
                 
                    if (usermove === `rock` && computermove === `scissors`){
                        userscore++;
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nYou win. Rock beats Scissors \nyou: ${userscore}| computer: ${computerscore}`);
                    } else if (usermove === `paper` && computermove === `rock`){
                        userscore++;
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nYou win. Paper wraps Rock \nyou: ${userscore}| computer: ${computerscore}`);
                    } else if (usermove === `scissors` && computermove ===`paper`){
                        userscore++;
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nYou win. Scissors cut Paper \nyou: ${userscore}| computer: ${computerscore}`);
                    } else if (computermove === `rock` && usermove === `scissors`){
                        computerscore++;
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nyou lost. Rock beats Scissors \nyou: ${userscore}| computer: ${computerscore}`);
                    } else if (computermove === `paper` && usermove === `rock`){
                        computerscore++
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nyou lost. Paper wraps Rock \nyou: ${userscore}| computer: ${computerscore}`);
                    } else if (computermove === `scissors` && usermove === `paper`){
                        computerscore++
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nyou lost. Scissors cut Paper \nyou: ${userscore}| computer: ${computerscore}`);
                    } else if (usermove === computermove){ userscore++; computerscore++;alert(`You: ${usermove} \nComputer: ${computermove} \nit's a tie. \nyou: ${userscore}| computer: ${computerscore}`);}
                }

                if (userscore>computerscore){alert(`YAY! You won the Game. \nYour Score: ${userscore} \nComputer Score: ${computerscore}`)}
                else if (computerscore>userscore){alert(`You lost. Better luck next time.\nYour Score: ${userscore} \nComputer Score: ${computerscore}`)}
                else if (computerscore===userscore){alert(`The Game is computermovea tie.Shall we play again? \nYour Score: ${userscore} \nComputer Score: ${computerscore}`)}
            }    

            window.onload = playgame();
