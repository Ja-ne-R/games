fetch('https://ja-ne-r.github.io/games/games.json')
    .then(response => response.json())
    .then(data => {
        const games = data.games;
        const gamemain = document.querySelector('#gamesmain');
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');
            gameDiv.innerHTML = `
                <a href="${game.link}"><img src="${game.image}" class="imp" alt="${game.name}">
                <h3 class="gamename">${game.name}</h3>
                <p class="gametext">${game.description}</p></a>
            `;
            gamemain.appendChild(gameDiv);
        });
        const img = document.getElementsByClassName("imp");

        const imgnum = img.length;
        for (let i = 0; i < imgnum; i++) {
            img[i].addEventListener("mouseenter", function () {
            });
            img[i].addEventListener("mouseleave", function () {
            });
        }

        const gamediv = document.getElementsByClassName("game");

        const gamedivnum = gamediv.length;
        for (let i = 0; i < gamedivnum; i++) {
            gamediv[i].addEventListener("mouseenter", function () {
                gamediv[i].style.animation = "gamehover 0.5s forwards";
                img[i].style.animation = "test 1s forwards";

            });
            gamediv[i].addEventListener("mouseleave", function () {
                gamediv[i].style.animation = "gamehoverout 0.5s forwards";
                img[i].style.animation = "out 1s forwards";

            });
        }

    })
    .catch(error => console.error('Error loading games:', error));
