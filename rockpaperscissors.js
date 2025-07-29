            let refresh = document.querySelector("div>#refresh");
            refresh.addEventListener("click",()=>{
                location.reload();
            });
            
            
            let userscore = 0;
            let computerscore = 0;
            
            //function getusermove(usermove){
            //    usermove = (prompt(`Rock Paper Scissors go: `)).toString().toLowerCase();
            //    if (usermove !== `rock` && usermove !== `paper` && usermove !== `scissors`){alert(`Invalid input`);usermove = (prompt(`Rock Paper Scissors go: `)).toString().toLowerCase(); }
            //   return usermove;
            //}
            let buttons = document.querySelector(".buttons")
            function getusermove(){
                buttons.addEventListener("click",(e)=>{
                    let usermove = e.target.id;
                    playRound(usermove);
                })
            }

            let moves = document.querySelector("div>#moves");
            let scores = document.querySelector("div>#scores");

            function playRound(usermove){

                
                 let computermove = getcomputermove();
                 
                    if (usermove === `rock` && computermove === `scissors`){
                        userscore++;
                        moves.textContent =`you: ${usermove} \ncomputer: ${computermove} \nYou win. Rock beats Scissors `;
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`
                        
                    } else if (usermove === `paper` && computermove === `rock`){
                        userscore++;
                        moves.textContent = `you: ${usermove} \ncomputer: ${computermove} \nYou win. Paper wraps Rock `;
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`

                    } else if (usermove === `scissors` && computermove ===`paper`){
                        userscore++;
                        moves.textContent=`you: ${usermove} \ncomputer: ${computermove} \nYou win. Scissors cut Paper `;
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`

                    } else if (computermove === `rock` && usermove === `scissors`){
                        computerscore++;
                        moves.textContent = `you: ${usermove} \ncomputer: ${computermove} \nyou lost. Rock beats Scissors `;
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`

                    } else if (computermove === `paper` && usermove === `rock`){
                        computerscore++
                        moves.textContent = `you: ${usermove} \ncomputer: ${computermove} \nyou lost. Paper wraps Rock `;
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`

                    } else if (computermove === `scissors` && usermove === `paper`){
                        computerscore++
                        moves.textContent = `you: ${usermove} \ncomputer: ${computermove} \nyou lost. Scissors cut Paper `;
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`

                    } else if (usermove === computermove){ 
                        userscore++; 
                        computerscore++;
                        moves.textContent = `You: ${usermove} \nComputer: ${computermove} \nit's a tie.`
                        scores.textContent = `your score: ${userscore} || computer score: ${computerscore}`;
                    }
                
            

            if (userscore == 5 || computerscore == 5){
                if (userscore>computerscore){scores.textContent =`YAY! You won the Game. \nYour Score: ${userscore} \nComputer Score: ${computerscore}`}
                else if (computerscore>userscore){scores.textContent =`You lost. Better luck next time.\nYour Score: ${userscore} \nComputer Score: ${computerscore}`}
                else if (computerscore===userscore){scores.textContent =`The Game is a tie.Shall we play again? \nYour Score: ${userscore} \nComputer Score: ${computerscore}`}
            }
        }

             function getcomputermove(computermove){
                let rannum = Math.random();
                if (rannum <= 0.33){
                    return `rock`;
                } else if (rannum > 0.33 && rannum < 0.66){
                    return `paper`;
                } else if (rannum >0.66){
                    return `scissors`;
                }
            }

            getusermove()