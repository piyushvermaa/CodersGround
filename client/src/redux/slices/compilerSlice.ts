import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType{
    fullCode:{
        html: string;
        css: string;
        javascript: string;
    }
    
    currentLanguage: "html" | "css" | "javascript";
}


const initialState:CompilerSliceStateType= {
    fullCode:{
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <h1>Welcome to Piyush's Online Web Compiler</h1>
    </header>
    <div class="container">
        <h1>Rock ✊ Paper 📄 Scissors ✌️</h1>
        <div class="choices">
            <button id="rock">Rock</button>
            <button id="paper">Paper</button>
            <button id="scissors">Scissors</button>
        </div>
        <div id="result"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
        `,
        css: `body {
    overflow:hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom, #2980b9, #3498db);
}

.header {
    text-align: center;
    padding: 20px;
    background: linear-gradient(to right, #2ecc71, #3498db);
    color: #fff;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    animation: fadeInDown 1s ease forwards;
    margin-bottom: 20px
}

@keyframes fadeInDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.container {
    text-align: center;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0.9));
    animation: fadeIn 0.5s ease;
}

h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 36px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.choices {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

button {
    padding: 15px 30px;
    margin: 0 10px;
    background-color: #2ecc71;
    color: #fff;
    border: 2px solid #27ae60;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

button:hover {
    background-color: #27ae60;
    border-color: #27ae60;
    transform: translateY(-3px);
}

button:active {
    transform: translateY(1px);
}

#result {
    font-size: 24px;
    color: #555;
    font-weight: bold;
    margin-top: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: #f1c40f;
    border-radius: 50%;
    animation: confettiAnimation 1s ease-out infinite;
}

@keyframes confettiAnimation {
    0% {
        transform: translate(0, -20vh) rotateZ(0deg);
    }
    100% {
        transform: translate(calc(100vw * var(--x)), calc(100vh * var(--y))) rotateZ(360deg);
    }
}
        `,
        javascript: `document.addEventListener("DOMContentLoaded", function() {
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices button");
const resultDiv = document.getElementById("result");
const container = document.querySelector(".container");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(playerChoice, computerChoice);
        resultDiv.textContent = \`You chose \${playerChoice}. Piyush choose \${computerChoice}. \${result}\`;
        if (result === "You win!") {
            showConfetti();
        }
    });
});

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if ((player === "rock" && computer === "scissors") ||
                (player === "paper" && computer === "rock") ||
                (player === "scissors" && computer === "paper")) {
        return "You win!";
    } else {
        return "Piyush wins!";
    }
}

function showConfetti() {
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.setProperty("--x", Math.random());
        confetti.style.setProperty("--y", Math.random());
        container.appendChild(confetti);
        setTimeout(() => {
            container.removeChild(confetti);
        }, 2000);
    }
}
});
          `,

    },
    currentLanguage: "html",
}

const compilerSlice= createSlice({
    name: 'compilerSlice',
    initialState,
    reducers: {
        updateCurrentLanguage:(state,action:PayloadAction<CompilerSliceStateType["currentLanguage"]>)=>{
            state.currentLanguage= action.payload
        },
        updateCodeValue:(state,action:PayloadAction<string>)=>{
            state.fullCode[state.currentLanguage]=action.payload
            
        },
        updateFullCode: (
            state,
            action: PayloadAction<CompilerSliceStateType["fullCode"]>
          ) => {
            state.fullCode = action.payload;
          },
        
    }
})

export default compilerSlice.reducer;

export const {updateCurrentLanguage, updateCodeValue, updateFullCode}= compilerSlice.actions;