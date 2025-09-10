fetch('https://ja-ne-r.github.io/games/games.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.projects;
        const main = document.querySelector('#projects');
        projects.forEach(project => {
            const projDiv = document.createElement('div');
            projDiv.classList.add('projects');

            const img = document.createElement('img');
            img.src = project.image;
            img.className = 'proimp';
            img.alt = project.name;

            projDiv.addEventListener('mouseenter', function() {

                img.style.borderRadius = '0px';
            });
            projDiv.addEventListener('mouseleave', function() {
                img.style.borderRadius = '24px';
            });
            img.addEventListener('click', function() {
                console.log('Image clicked!');
                const modal = document.getElementById("modal");
                const modalImg = modal.querySelector(".modal-content");
                const caption = modal.querySelector("#caption");
                caption.innerHTML = "<b>" + project.name + "</b>" + "<br>" + project.description;
                modal.style.display = "block";
                modalImg.src = img.src;

                const span = modal.querySelector(".close");
                span.onclick = function() { 
                    modal.style.display = "none";
                }

            });
            
            const h3 = document.createElement('h3');
            h3.className = 'projectname';
            h3.textContent = project.name;

            const p = document.createElement('p');
            p.className = 'projecttext';
            p.textContent = project.description;

            projDiv.appendChild(img);
            projDiv.appendChild(h3);
            projDiv.appendChild(p);

            main.appendChild(projDiv);
        });

    })
    .catch(error => console.error('Error loading projects:', error));


    // -------------------------
    

    