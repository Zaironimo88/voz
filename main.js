var SpeechRecognition= window.webkitSpeechRecognition;//esta api hace que transforme las palabras a letras
var recognition= new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML=""; //actualizar el texto
recognition.start();
}

recognition.onresult=function(event)
{
console.log(event);
var Content= event.result[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML="Content";
}
