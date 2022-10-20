function DiceGame(){

    // Game-Play Values
    const player_1 = document.querySelector('.player_1');
    const player_2 = document.querySelector('.player_2');
    const Player1_Score = document.querySelector('.Player1_Score');
    const  Player2_Score = document.querySelector('.Player2_Score');
    const Dice_icon = document.querySelector('.Dice_icon');
    const player1_current_score = document.querySelector('.player1_current_score');
    const player2_current_score = document.querySelector('.player2_current_score');

    // Buttons
    const reload_btn = document.querySelector('.reload_btn');
    const roll_dice_btn = document.querySelector('.roll_dice_btn');
    const hold_score_btn = document.querySelector('.hold_score_btn');

    // Starting Conditions
    Player1_Score.textContent = 0;
    Player2_Score.textContent = 0;

    // Current Score Variables
    let PlayerScore = [0, 0];
    let currentScore = 0;
    let activePlayer = 0;
    let random_dice_roll = 0;
    let players_still_playing = true;

    // Switch Player
    function switchPlayer (){
        document.getElementById(`Current--${activePlayer}`).innerHTML = 0;
        currentScore = 0;
        activePlayer = (activePlayer === 0 ? 1 : 0);
        player_1.classList.toggle('Player-active');
        player_2.classList.toggle('Player-active');
    }

    // Reload Game
    function reload(){
        PlayerScore = [0, 0];
        activePlayer = 0;
        players_still_playing = true;
        currentScore = 0;
        document.getElementById(`Current--0`).innerHTML = 0;
        document.getElementById(`Current--1`).innerHTML = 0;
        Player1_Score.innerHTML = 0;
        Player2_Score.innerHTML = 0;
        Dice_icon.classList.add('hidden');
        player_1.classList.add('Player-active');
        player_2.classList.remove('Player-active');
        player_1.classList.remove('Player-Winner');
        player_2.classList.remove('Player-Winner');
    }
    reload();

    // Dice Roll Functionality
    roll_dice_btn.addEventListener('click', () => {
        if(players_still_playing){
                // Generating random number for dice roll
            random_dice_roll = Math.floor((Math.random() * 6) + 1);

            // Display Dice according to the dice number
            Dice_icon.classList.remove('hidden');

            // Showing random dice images according to the random dice number 
            Dice_icon.src = `./Images/dice_img_of_value_${random_dice_roll}.png`;

            // Check for the random rolled dice number
            if(random_dice_roll !== 1){
                // Add random value to current score of player 1
                currentScore += random_dice_roll;
                document.getElementById(`Current--${activePlayer}`).innerHTML = currentScore;
            }
            else{
                // Add random value to current score of player 2
                switchPlayer();
            }
        }
    });

    // Button Hold Function
    hold_score_btn.addEventListener('click', () => {
        if(players_still_playing){
             // Add current score to active player's score
            PlayerScore[activePlayer] += currentScore;
            document.getElementById(`Score--${activePlayer}`).textContent = PlayerScore[activePlayer];
            
            // Player that Wins
            if(PlayerScore[activePlayer] >= 100){
                players_still_playing = false;
                Dice_icon.classList.add('hidden');
                document.getElementById(`player--${activePlayer}`).classList.add('Player-Winner');
                document.getElementById(`player--${activePlayer}`).classList.remove('Player-active');
            }
            else{
                //  Switching Players
                switchPlayer();
            }
        }
    });

    // New Game Button - Reset
    reload_btn.addEventListener('click', reload);
}

DiceGame();