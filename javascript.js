const rock = document.querySelector("#rock img");
const aside = document.getElementById("featured");



rock.addEventListener("mouseenter", function () {
    rock.style.animation = "test 1s forwards";
});

rock.addEventListener("mouseleave", function () {
    rock.style.animation = "out 1s forwards";
});


// ----------------------------
fetch('https://ja-ne-r.github.io/games/games.json')
    .then(response => response.json())
    .then(data => {
        const games = data.games;
        const gamemain = document.querySelector('#gamesmain');
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');
            gameDiv.innerHTML = `
                <img src="${game.image}" class="gameimg" alt="${game.name}">
                <h3 class="gamename">${game.name}</h3>
                <p class="gametext">${game.description}</p>
            `;
            gamemain.appendChild(gameDiv);
        });
    })
    .catch(error => console.error('Error loading games:', error));