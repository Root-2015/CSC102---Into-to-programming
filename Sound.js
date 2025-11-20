function addAudio(){
    //creates a new audio element
    let audioElem = document.createElement("audio");
    //sets the audio element
    audioElem.setAttribute("id","myAudio");
    //finds the audio to be placed within the audio element
    audioElem.setAttribute("src", "us-lab-background.mp3");
    audioElem.setAttribute("controls","controls");
    //ads the audio source to the empty div element
    document.getElementById("divAudio").appendChild(audioElem);
    
    document.getElementById("btnAddAudio").hidden = true;
    document.getElementById("btnPauseAudio").hidden = false;
    document.getElementById("btnPlayAudio").hidden = false;
}
function playAudio(){
    let audio = document.getElementById("myAudio");
    audio.play();
}
function pauseAudio(){
    let audio = document.getElementById("myAudio");
    audio.pause();
}