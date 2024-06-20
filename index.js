const sendEmail = document.getElementById('sendEmail');
const comicImage = document.getElementById('comicImage');
const comicTitle = document.getElementById('forImage');
const comicDate = document.getElementById("dateOfImage");

async function getIdData() {
    const urlParams = new URLSearchParams({email: "k.zimin@innopolis.university"});
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${urlParams}`);
    const idData = await response.json();
    return idData;
}
async function getComicData(id) {
    const urlParams = new URLSearchParams({id});
    const response = await fetch(`https://fwd.innopolis.university/api/comic?${urlParams}`);
    return response.json();
}

document.addEventListener('DOMContentLoaded', async function (e) {
    const id = await getIdData();
    const comicData = await getComicData(id);
    comicImage.src = comicData.img;
    comicImage.alt = comicData.alt;
    comicTitle.textContent = comicData.safe_title;
    
    const date = new Date(Date.UTC(comicData.year, comicData.month-1, comicData.day));
    comicDate.textContent = date.toLocaleDateString();
});