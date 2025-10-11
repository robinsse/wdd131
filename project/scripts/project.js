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

const paintings = [
    {
        paintingName: "Shadow Dealings",
        orientation: "Portrait",
        dimensions: "3 x 5'",
        imageSource: "images/painting1.webp",
        altText: "A sinister man grins braodly while holding up a large lantern"
    },

    {
        paintingName: "Prayer of Gratitude",
        orientation: "Portrait",
        dimensions: "3 x 5'",
        imageSource: "images/painting2.webp",
        altText: "A woman with a head scarf prays over her scriptures and meal"
    },

    {
        paintingName: "Laying on of Hands",
        orientation: "Portrait",
        dimensions: "3 x 5'",
        imageSource: "images/painting3.webp",
        altText: "A man receives the Gift of the Holy Ghost and it descends as a dove"
    },

    {
        paintingName: "The Healer",
        orientation: "Portrait",
        dimensions: "3 x 5'",
        imageSource: "images/painting4.webp",
        altText: "The resurrected Christ visits his apostles"
    },

    {
        paintingName: "An Helpmeet",
        orientation: "Portrait",
        dimensions: "3 x 5'",
        imageSource: "images/painting5.webp",
        altText: "Creation of worlds overseen by man and woman"
    },

    {
        paintingName: "Wading Waters",
        orientation: "Landscape",
        dimensions: "5 x 3'",
        imageSource: "images/painting6.webp",
        altText: "Oriental men navigate a boat through water"
    },

    {
        paintingName: "Curious Workmanship",
        orientation: "Landscape",
        dimensions: "5 x 3'",
        imageSource: "images/painting7.webp",
        altText: "Nephi and his brothers build a ship"
    },

    {
        paintingName: "Solar Creation",
        orientation: "Landscape",
        dimensions: "5 x 3'",
        imageSource: "images/painting8.webp",
        altText: "Christ and Michael create the sun"
    },

    {
        paintingName: "Lehi's Dream",
        orientation: "Landscape",
        dimensions: "5 x 3'",
        imageSource: "images/painting9.webp",
        altText: "A vision of the Tree of Life"
    },

    {
        paintingName: "Prophecy",
        orientation: "Landscape",
        dimensions: "5 x 3'",
        imageSource: "images/painting10.webp",
        altText: "Prophets see the Christ and angels bear witness"
    },

];

function createPaintingCard(paintings) {
    const gallery = document.querySelector(".container");
    gallery.innerHTML = "";

    paintings.forEach(painting => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let direction = document.createElement("p");
        let size = document.createElement("p");
        let figure = document.createElement("figure");
        let pic = document.createElement("img");
        let caption = document.createElement("figcaption");

        name.textContent = painting.paintingName;
        direction.innerHTML = `<strong>Orientation:</strong> ${painting.orientation}`;
        size.innerHTML = `<strong>Size:</strong> ${painting.dimensions}`;
        caption.textContent = painting.altText

        pic.src = painting.imageSource;
        pic.alt = painting.altText;
        pic.loading = "lazy";

        figure.appendChild(pic);
        figure.appendChild(caption);

        card.appendChild(name);
        card.appendChild(direction);
        card.appendChild(size);
        card.appendChild(figure);

        gallery.appendChild(card);
    })
};

createPaintingCard(paintings);

const portraits = document.querySelector("#portraitBtn");
const landscapes = document.querySelector("#landscapeBtn");
const all = document.querySelector("#allBtn");

portraits.addEventListener("click", () => {
    let portraitGallery = paintings.filter(p => p.orientation === "Portrait");
    localStorage.setItem("lastFilter", "Portrait");
    createPaintingCard(portraitGallery);
});

landscapes.addEventListener("click", () => {
    let landscapeGallery = paintings.filter(p => p.orientation === "Landscape");
    localStorage.setItem("lastFilter", "Landscape");
    createPaintingCard(landscapeGallery);
});

all.addEventListener("click", () => {
    createPaintingCard(paintings);
})

const lastFilter = localStorage.getItem("lastFilter");
if (lastFilter === "Portrait") {
    portraits.click();
}
else if (lastFilter === "Landscape") {
    landscapes.click();
}
else {
    all.click();
}