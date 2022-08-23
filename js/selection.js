const playersArray = [];

function addPlayerList(element) {
    const playerName = element.parentNode.children[0].innerHTML;

    const playerObject = {
        playerName: playerName,
    };

    const playerList = document.getElementById('playerslist');
    playerList.textContent = '';
    playersArray.push(playerObject);


    for (let i = 0; i < playersArray.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = playersArray[i].playerName;
        playerList.appendChild(li);
        if (playerList.childNodes.length > 5) {
            alert('!!! STOP !!! You have already added five players.');
            element.removeAttribute('disabled');
            playerList.removeChild(playerList.lastChild);
            return;

        }
        element.setAttribute('disabled', true);
    }

    document.getElementById('seclection-no').innerText = playersArray.length;

}
