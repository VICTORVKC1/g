const SpeechRecognition = webkitSpeechRecognition;

const recFala = new SpeechRecognition();
const txtFala = document.getElementById("voiceOut");
const camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function startVoice() {
    txtFala.innerHTML = "";
    recFala.start();
}

recFala.onresult = function(e) {
    console.log(e);
    
    const fala = e.results[0][0].transcript
    
    //console.log(fala);
    txtFala.value = fala;
    if (fala==="tire minha selfie"){
    Webcam.attach(camera);
     txtFala.blur();
      speak();
    console.log ("tire minha selfie")




setTimeout(takeSelfie,5000);
    
}
}
function speak() {
    const synth = speechSynthesis;
    const dadosVoz = "tirando sua selfie em 5 segundos";
    const utterThis = new SpeechSynthesisUtterance(dadosVoz);

synth.speak(utterThis);
}

function takeSelfie(){
Webcam.snap(function(dataURI){
const result = document.getElementById("resul");
result.innerHTML="";
const imagem=document.createElement("img");
imagem.setAttribute("id","selfie");
imagem.setAttribute("src",dataURI);
result.appendChild(imagem);
console.log(result.children);

})
save()

}
function save(){
const link=document.getElementById("link");
const imagem=document.getElementById("imagemSelfie").src;
link.href=imagem;
link.click();

}