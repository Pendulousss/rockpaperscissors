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
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nYou win. Rock beats Scissors`);
                        userscore++;
                    } else if (usermove === `paper` && computermove === `rock`){
                        alert(`you: ${usermov} \ncomputer: ${computermove} \nYou win. Paper wraps Rock`);
                        userscore++;
                    } else if (usermove === `scissors` && computermove ===`paper`){
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nYou win. Scissors cut Paper`);
                        userscore++;
                    } else if (computermove === `rock` && usermove === `scissors`){
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nyou lost. Rock beats Scissors`);
                        computerscore++;
                    } else if (computermove === `paper` && usermove === `rock`){
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nyou lost. Paper wraps Rock`);
                        computerscore++
                    }else if (computermove === `scissors` && usermove === `paper`){
                        alert(`you: ${usermove} \ncomputer: ${computermove} \nyou lost. Scissors cut Paper`);
                    }else if (usermove === computermove){alert(`You: ${usermove} \nComputer: ${computermove} \nit's a tie.`); userscore++; computerscore++;}
                }

                if (userscore>computerscore){alert(`YAY! You won the Game. \nYour Score: ${userscore} \nComputer Score: ${computerscore}`)}
                else if (computerscore>userscore){alert(`You lost. Better luck next time.\nYour Score: ${userscore} \nComputer Score: ${computerscore}`)}
                else if (computerscore===userscore){alert(`The Game is computermovea tie.Shall we play again? \nYour Score: ${userscore} \nComputer Score: ${computerscore}`)}
            }    
