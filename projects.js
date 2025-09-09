fetch('https://ja-ne-r.github.io/games/games.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.projects;
        const main = document.querySelector('main');
        games.forEach(game => {
            const projDiv = document.createElement('div');
            projDiv.classList.add('game');
            projDiv.innerHTML = `
                <a href="${game.link}"><img src="${game.image}" class="imp" alt="${game.name}">
                <h3 class="gamename">${game.name}</h3>
                <p class="gametext">${game.description}</p></a>
            `;
            main.appendChild(gameDiv);
        });
        const img = document.getElementsByClassName("imp");

    })
    .catch(error => console.error('Error loading games:', error));
