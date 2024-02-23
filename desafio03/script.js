var v1 = "white";
var v2 = "black";
var v3 = "gray";
var divFoto = document.querySelector("div#foto");

function clicou(n){
    let desB = document.querySelector("div#banho")
    let desC = document.querySelector("div#creche")
    if(n==1){
        desB.style.display = "block";
        desC.style.display= "none";
        setInterval(()=>floop(1), 2000);
        
    }else{
        desC.style.display = "block";
        desB.style.display= "none";
        setInterval(()=>floop(2), 3000);

    }
}
var imgAtual = 1;
function floop(n){
    
    const totalImages = 6; //baixei apenas 6 imagens
    if(n==2){
        imgAtual = (imgAtual % totalImages) +1;
        
        divFoto.style.backgroundImage = `url('imagens/creche/imagem0${imgAtual}.jpg')`;

        

    }
}
/*

let currentImage = 1;
const totalImages = 6;

function changeImage() {
    currentImage = (currentImage % totalImages) + 1;
    document.getElementById("image").src = `imagem${currentImage}.jpg`;
}

setInterval(changeImage, 2000); // Alterna a imagem a cada 2 segundos (2000 milissegundos)

*/