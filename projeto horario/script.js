function carregar(){
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('img')
var data= new Date()
var hora= data.getHours()
msg.innerHTML=`Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src= 'manha.JPG'
    document.body.style.background= 'linear-gradient(to right, rgb(112, 112, 222), rgb(255, 181, 193), rgb(231, 174, 70)'
}else if (hora >= 12 && hora < 18){
    img.src= 'tarde.JPG'
    document.body.style.background= 'linear-gradient(to right, rgb(112, 112, 222), rgb(255, 181, 193)'    
}else{
    img.src= 'noite.JPG'
    document.body.style.background= 'linear-gradient(to right, rgb(2, 2, 179), rgb(255, 181, 193)'
}
}

