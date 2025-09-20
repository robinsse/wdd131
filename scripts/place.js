const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

let when = document.querySelector("#when");
let lastMod = new Date(document.lastModified);
when.innerHTML = lastMod.toLocaleDateString();

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;
}
const temp = 9;
const wind = 9;

if (temp <= 10 && wind >= 4.8) {
    const chill = calculateWindChill(temp, wind).toFixed(2);
    document.querySelector('#windChill').innerHTML = chill;
}
else {
    document.querySelector('#windChill').innerHTML = "N/A";
}