
var divFoto = document.querySelector("div#foto");
var imgAtual = 1;
var controle; 

function clicou(n){
    let desB = document.querySelector("div#banho")
    let desC = document.querySelector("div#creche")
    if(n==1 ){
        desB.style.display = "block";
        desC.style.display= "none";
        clearInterval(controle)
        controle=  setInterval(()=>floop(1), 3000);
        
        
    }else{
        desC.style.display = "block";
        desB.style.display= "none";
        clearInterval(controle)
        controle = setInterval(()=>floop(2), 3000);
        

    }
}

function floop(n,c2){
    
    const totalImages = 6; //baixei apenas 6 imagens
    if(n==2 ){
        imgAtual = (imgAtual % totalImages) +1; //quando a divisão resultar em zero, volta pra 1
        
        divFoto.style.backgroundImage = `url('imagens/creche/imagem0${imgAtual}.jpg')`;
    }else{
        imgAtual = (imgAtual % totalImages) +1; //quando a divisão resultar em zero, volta pra 1
        
        divFoto.style.backgroundImage = `url('imagens/banho/banho0${imgAtual}.jpg')`;
    }
}
