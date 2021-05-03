const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
};

// selectors for html elements

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

// score evaluators
let winningScore = 3;
let isGameOver = false;

// functions

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}

function playerOne(e) {
    updateScores(p1, p2);
}
function playerTwo(e) {
    updateScores(p2, p1);
}

function reset(e) {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}

function winGame(e) {
    // alert("CHANGE");
    winningScore = parseInt(this.value);
    reset();
}

// event listeners
p1.button.addEventListener("click", playerOne);
p2.button.addEventListener("click", playerTwo);
resetButton.addEventListener("click", reset);
winningScoreSelect.addEventListener("change", winGame);
