const list = document.querySelector(".list")

const game = [
    {
        title: "dota2",
        price: "free",
        photo: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg/400px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg?20241228131638",
    },

    {
        title: "dark souls 3",
        price: 750,
        photo: "https://upload.wikimedia.org/wikipedia/ru/b/bb/Dark_souls_3_cover_art.jpg",
    },
    {
        title: "call of dute 3",
        price: 250,
        photo: "https://upload.wikimedia.org/wikipedia/uk/f/f1/Cod3_box.jpg",

    },
    {
        title: "sekiro",
        price: 1000,
        photo: "https://upload.wikimedia.org/wikipedia/ru/a/a8/Sekiro_Shadows_Die_Twice.jpg"
    },
    {
        title: "mobile Legends",
        price: "free",
        photo: "https://imag.malavida.com/mvimgbig/download-fs/mobile-legends-bang-bang-38040-3.jpg"
    },

    {
        title: "stalker 2",
        price: 1500,
        photo: "https://upload.wikimedia.org/wikipedia/ru/5/5c/S.T.A.L.K.E.R._2_Logo.png"
    },

    {
        title: "metro 2033",
        price: 659,
        photo: "https://upload.wikimedia.org/wikipedia/ru/b/b1/Metro_2033_The_Last_Refuge_cover_xbox360.jpg"
    }

]

const gameElements = game.map(game => `
    <li class="game-item">
        <h2 class="game-title">${game.title}</h2>
        <p class="game-price">${game.price}</p>
        <img class="game-photo" src="${game.photo}" alt="${game.title}">
    </li>`).join("");


console.log(gameElements);

list.innerHTML = gameElements;