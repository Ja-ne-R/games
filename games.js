const gamemain = document.querySelector('#gamesmain');
x = 0;
const closeButton = document.getElementById("close");
fetch('https://ja-ne-r.github.io/games/games.json')
    .then(response => response.json())
    .then(data => {
        const games = data.games;

        games.forEach(game => {
            const gameDiv = document.createElement('div');

            makename = "game" + x;
            gameDiv.setAttribute("id", makename);
            x++;

            gameDiv.classList.add('game');
            gameDiv.innerHTML = `
                <img src="${game.image}" class="imp" alt="${game.name}">
                <h3 class="gamename">${game.name}</h3>
                <p class="gametext">${game.description}</p>
            `;
            gameDiv.addEventListener("click", function () {
                inBrowser(game);
            });

            gamemain.appendChild(gameDiv);
        });
        const img = document.getElementsByClassName("imp");

        // const imgnum = img.length;
        // for (let i = 0; i < imgnum; i++) {
        //     img[i].addEventListener("mouseenter", function () {
        //     });
        //     img[i].addEventListener("mouseleave", function () {
        //     });
        // }

        const gamediv = document.getElementsByClassName("game");

        const gamedivnum = gamediv.length;
        for (let i = 0; i < gamedivnum; i++) {
            gamediv[i].addEventListener("mouseenter", function () {
                img[i].style.scale = '1.05';
                img[i].style.borderRadius = '0px';
                gamediv[i].style.zIndex = '101';

            });
            gamediv[i].addEventListener("mouseleave", function () {
                img[i].style.scale = '1';
                img[i].style.borderRadius = '24px';
                gamediv[i].style.zIndex = '10';
            });



        }




    })
    .catch(error => console.error('Error loading games:', error));

function inBrowser(game) {
    console.log("it activates");
    let link = `${game.link}`;
    console.log(link);
    // let setAt = this.getAttribute("id");
    gamemain.style.display = "none";
    console.log(link + " hi");
    createIframe = document.createElement("iframe");
    createIframe.setAttribute("src", link);
    createIframe.style.zIndex = "100";
    createIframe.style.width = "840px";
    createIframe.style.height = "680px";
    document.getElementById("iframe").appendChild(createIframe);
    closeButton.style.display = "block";
}
function unhide() {
    gamemain.style.display = "grid";
    document.querySelector("iframe").remove();
    closeButton.style.display = "none";
}
closeButton.addEventListener("click", unhide)


// const content = document.getElementById("content");
// const clearItAllButton = document.getElementById("clear");
// clearItAllButton.addEventListener("click", clearIt);

// function clearIt(){
//     content.innerHTML = null;
// }