let text = document.getElementById('text');
var encriptButton = document.querySelector('#encrypt');
var decryptButton = document.querySelector('#decrypt');
var copyButton = document.querySelector('#copy');
var result = document.getElementById('message');
var values = ['ai','enter','imes','ober','ufat'];
function handleEncrytionButton(){
    encryptText(text.value.trim());
}
function copy(){
    if(result.textContent.length>0){
        navigator.clipboard.writeText(result.textContent);
        alert('El texto ha sido copiado al portapapeles')
    }else{
        alert('Primero debe ingresar un texto para obtener un resultado valido.')
    }
  
}
function handleDecryptText(){
    decryptText(text.value.trim());
}
function showMessage(message){
    result.innerHTML = message;
    document.getElementById('no-message').classList.remove('show');
    document.getElementById('no-message').classList.add('hidden');
}
function encryptText(text){
    let message= text.split(' ');
    let messageEncrypt ='';
    for(let index=0;index<message.length;index++){
       messageEncrypt += replaceVowel(message[index])+' ';
    }  
    showMessage(messageEncrypt)
}

function decryptText(text){
    let message =text
    for (let index = 0; index < text.length; index++) {
        message  = replacePattern(message)
    }
     showMessage(message);
    return replacePattern(message);
 
}

function replacePattern(text){
    if(text.includes('ai')){
        text = text.replace('ai', 'a');
    }else if(text.includes('enter')){
        text = text.replace('enter', 'e');
    }else if(text.includes('imes')){
        text = text.replace('imes', 'i');
    }else if(text.includes('ober')){
        text = text.replace('ober', 'o');
    }else if(text.includes('ufat')){
        text = text.replace('ufat', 'u');
    }
    return text;
}

function replaceVowel(word){
    let letter = word.split('');
    for (let index = 0; index < letter.length; index++) {
        if(letter[index] == 'a'){
            letter[index]='ai';
        }else if(letter[index] == 'e'){
            letter[index]='enter';
        }else if(letter[index] == 'i'){
            letter[index]='imes';
        }else if(letter[index] == 'o'){
            letter[index]='ober';
        }else if(letter[index] == 'u'){
            letter[index]='ufat';
        }
    }
   return letter.join('');
  
}
function checkEmptyText(event){
 if(event.key == "Backspace" && text.value.length == 1){
    document.querySelector('#message').innerHTML = '';
    document.getElementById('no-message').classList.remove('hidden');
    document.getElementById('no-message').classList.add('show');
 }
}
encriptButton.addEventListener('click',handleEncrytionButton);
decryptButton.addEventListener('click',handleDecryptText);
copyButton.addEventListener('click',copy);
text.addEventListener('keydown',checkEmptyText)