const rock = document.querySelector("#rock img");
const aside = document.getElementById("featured");



rock.addEventListener("mouseenter", function () {
    rock.style.animation = "test 1s forwards";
});

rock.addEventListener("mouseleave", function () {
    rock.style.animation = "out 1s forwards";
});


// ----------------------------
fetch('games.json')
    .then(response => response.json())
    .then(data => {
        const games = data.games;
        const main = document.querySelector('main');
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');
            gameDiv.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
            `;
            main.appendChild(gameDiv);
        });
    })
    .catch(error => console.error('Error loading games:', error));