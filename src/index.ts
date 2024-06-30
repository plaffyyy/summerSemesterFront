import moment from 'moment';


export interface ComicData {
    alt:string;
    day:string;
    img:string;
    link:string;
    month:string;
    news:string;
    num:number;
    safe_title:string;
    title:string;
    transcript:string;
    year:string;
}


const comicImage = document.getElementById('comicImage') as HTMLImageElement;
const comicTitle = document.getElementById('forImage') as HTMLTitleElement;
const comicDate = document.getElementById("dateOfImage") as HTMLParagraphElement;




async function getIdData(){
    const urlParams = new URLSearchParams({email: "k.zimin@innopolis.university"});
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${urlParams}`);
    const idData = await response.json();
    return idData;
}
async function getComicData(id: number): Promise<ComicData> {
    const urlParams = new URLSearchParams({id:id.toString()});
    const response = await fetch(`https://fwd.innopolis.university/api/comic?${urlParams}`);
    const comicData: ComicData = await response.json();
    return comicData;
}

document.addEventListener('DOMContentLoaded',async function (e) {
    const idData = await getIdData();
    const comicData = await getComicData(idData);
    comicImage.src = comicData.img;
    comicImage.alt = comicData.alt;
    comicTitle.textContent = comicData.safe_title;
    
    const date = new Date(Date.UTC(Number(comicData.year), Number(comicData.month)-1, Number(comicData.day)));
    const fromMoment = moment(date).fromNow();
    comicDate.textContent = fromMoment.toString();
});