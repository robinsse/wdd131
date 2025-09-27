const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

let when = document.querySelector("#when");
let lastMod = new Date(document.lastModified);
when.innerHTML = lastMod.toLocaleDateString();

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/bcff33b8702e7490b7fb8d097a70859b4d6d14d0/full/3840%2C/0/default"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/75a25fc00384f7067f485315607cc760381f35d2/full/3840%2C/0/default"
    },
    {
        templeName: "The Hague Netherlands Temple",
        location: "Zoetermeer, Netherlands",
        dedicated: "2002, September, 8",
        area: 14477,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/675a15db019ee07ee8cef82de80b2c1d5fd3f862/full/3840%2C/0/default"
    },
];

function createTempleCard(filteredTemples) {
    const gallery = document.querySelector(".container");
    gallery.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let where = document.createElement("p");
        let dedication = document.createElement("p");
        let size = document.createElement("p");
        let pic = document.createElement("img");

        name.textContent = temple.templeName;
        where.innerHTML = `Location: ${temple.location}`;
        dedication.textContent = `Dedicated: ${temple.dedicated}`;
        size.textContent = `Size: ${temple.area} sqft`;

        pic.src = temple.imageUrl;
        pic.alt = temple.templeName
        pic.width = 400;
        pic.height = 250;
        pic.loading = "lazy";

        card.appendChild(name);
        card.appendChild(where);
        card.appendChild(dedication);
        card.appendChild(size);
        card.appendChild(pic);

        gallery.appendChild(card);
    })
};

createTempleCard(temples);

const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");
const homeTemples = document.querySelector("#home");

oldTemples.addEventListener("click", () => {
    let oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    createTempleCard(oldTemples);
});

newTemples.addEventListener("click", () => {
    let newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    createTempleCard(newTemples);
});

largeTemples.addEventListener("click", () => {
    let largeTemples = temples.filter(temple => parseInt(temple.area) > 90000);
    createTempleCard(largeTemples);
});

smallTemples.addEventListener("click", () => {
    let smallTemples = temples.filter(temple => parseInt(temple.area) < 10000);
    createTempleCard(smallTemples);
});

homeTemples.addEventListener("click", () => {
    createTempleCard(temples);
});