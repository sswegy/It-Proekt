//the code at the current state is just initial spaghetti ready for refactoring, which i hope will be soon
var listOfSongs = ["Static-X - The Only.mp3", "Rick Astley - Never Gonna Give You Up.mp3"]
function playAudio(){
    var audio = document.getElementById("currentAudio");
    var button = document.getElementById("playButton");
    if(button.getElementsByTagName("i")[0].getAttribute("class") == "fas fa-play"){
        button.getElementsByTagName("i")[0].setAttribute("class", "fas fa-pause");
        audio = document.getElementById("currentAudio");
        audio.play();
    }else{
        button.getElementsByTagName("i")[0].setAttribute("class", "fas fa-play");
        audio = document.getElementById("currentAudio");
        audio.pause();
    } 
    audio.volume = 0.5;
    console.log(audio.volume)
}

function playNext(mode){
    var audio = document.getElementById("currentAudio");
    var button = document.getElementById("next");
    var playButton = document.getElementById("playButton");
    var newAudio;
    audio.currentTime = 0;
    if(playButton.getElementsByTagName("i")[0].getAttribute("class") == "fas fa-pause")playButton.getElementsByTagName("i")[0].setAttribute("class", "fas fa-play");
    if(mode == 1){
        if(listOfSongs.findIndex(findAudioPlace)+1 > listOfSongs.length-1)newAudio = listOfSongs[0];
        else newAudio = listOfSongs[listOfSongs.findIndex(findAudioPlace)+1];
    }else{
        if(listOfSongs.findIndex(findAudioPlace)-1 < 0)newAudio = listOfSongs[listOfSongs.length-1];
        else newAudio = listOfSongs[listOfSongs.findIndex(findAudioPlace)-1];
    }
    audio.getElementsByTagName("source")[0].setAttribute("src", "Assets/Music/" + newAudio);
    if(newAudio.search("ogg") != -1)audio.getElementsByTagName("source")[0].setAttribute("type", "audio/ogg");
    else audio.getElementsByTagName("source")[0].setAttribute("type", "audio/mpeg");
    document.querySelector(".song-title").innerHTML = newAudio.slice((newAudio.search(" - ") + 3), newAudio.length-4);
    audio.getElementsByTagName("source")[0].setAttribute("name", newAudio.slice((newAudio.search(" - ") + 3), newAudio.length-4)); //why is nothing working without this useless line of code?!??
    document.querySelector(".song-artist").innerHTML = newAudio.slice(0,newAudio.search(" - "));
    document.querySelector(".image-container").getElementsByTagName("img")[0].setAttribute("src", "Assets/Pictures/" + newAudio.slice((newAudio.search(" - ") + 3), newAudio.length-4) + ".jpg");
    audio = document.getElementById("currentAudio");
    newAudio = document.querySelector(".audio-container").innerHTML;
    audio.remove();
    newAudio = removeEnters(newAudio);
    document.querySelector(".audio-container").innerHTML = newAudio;
    playAudio();
}

function findAudioPlace(song){
    var audio = document.getElementById("currentAudio");
    var audioName = audio.getElementsByTagName("source")[0].getAttribute("name")
    var songName = song.replace(".mp3","");
    songName = songName.slice(songName.search(" - ") + 3,songName.length);
    return songName == audioName;
}

function removeEnters(string){
    var ret = "";
    for(var i = 0;i < string.length;i++){
        if(!(string[i] == '\n' || string[i] == '\r'))ret += string[i];
    }
    return ret;
}
