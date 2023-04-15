let text = document.getElementById('text');
function handleEncrytionButton(event){
    encryptText(text.value.trim(),true);
}

function encryptText(text,isEncrypt){
    let message= text.split(' ');
    let messageEncrypt ='';
    for(let index=0;index<message.length;index++){
       messageEncrypt += replaceVowel(message[index])+' ';
    }  
    document.getElementById('message').innerHTML = messageEncrypt;
    document.getElementById('no-message').classList.remove('show');
    document.getElementById('no-message').classList.add('hidden');
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
var encriptButton = document.querySelector('#encrypt');


encriptButton.addEventListener('click',handleEncrytionButton);
text.addEventListener('keydown',checkEmptyText)