fetch('https://ja-ne-r.github.io/games/games.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.projects;
        const main = document.querySelector('main');
        projects.forEach(projects => {
            const projDiv = document.createElement('div');
            projDiv.classList.add('projects');
            projDiv.innerHTML = `
                <img src="${projects.image}" class="imp" alt="${projects.name}">
                <h3 class="projectname">${projects.name}</h3>
                <p class="projecttext">${projects.description}</p>
            `;
            main.appendChild(projDiv);
        });
        const img = document.getElementsByClassName("imp");

    })
    .catch(error => console.error('Error loading projects:', error));
