var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
function Start(){
    document.getElementById("text_box").innerHTML= "";
    Recognition.start();
}
Recognition.onresult= function run(event){
    console.log(event)
    content= event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML= content;
    Speak()
}
function Speak(){
    synth= window.speechSynthesis;
    Speak_data= document.getElementById("text_box").innerHTML;
    utter_this= new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utter_this);
    Webcam.attach("#camera");
}
Webcam.set({
    Width: 400,
    Height: 250,
    image_format: "png",
    png_quality: 90
})

