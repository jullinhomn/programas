function carregar(){
    
let msg = document.querySelector('div#msg');
let img = document.querySelector('img#imagem');
let data = new Date();
let hora = data.getHours();






    if(hora >= 0 && hora < 12){
        //Bom dia!
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`;
        img.src = 'manha.png';
        document.body.style.background = '#64b8f6';
    } else if(hora >= 12 && hora < 18) {
        //Boa tarde!
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`;
        img.src = 'tarde.png';
        document.body.style.background = '#ceb283'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`;
        img.src = 'noite.png';
        document.body.style.background = '#002130'
        //Boa noite!
    }
}

