// calculation of expense for players

function expenseForPlayers() {
    const expenditurePerPlayer = getInputValueById('player-salary-field');
    const playerList = document.getElementById('playerslist');
    const expenditureForPlayers = expenditurePerPlayer * playerList.childNodes.length;
    return expenditureForPlayers;
}

// added eventlistener to calculation button 

document.getElementById('players-expense-btn').addEventListener('click', function () {
    const expense = expenseForPlayers();
    setTextValueById('players-expense', expense);
})

