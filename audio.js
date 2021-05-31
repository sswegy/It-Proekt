//the code at the current state is just initial spaghetti ready for refactoring, which i hope will be soon
var listOfSongs = ["Static-X - The Only.mp3", "Rick Astley - Never Gonna Give You Up.mp3"]
function playAudio(){
    var audio = document.getElementById("currentAudio");
    if(audio.paused == true){
        audio.play();
    }else{
        audio = document.getElementById("currentAudio");
        audio.pause();
    } 
    console.log(audio.volume);
}

function playNext(mode){
    var audio = document.getElementById("currentAudio");
    var newAudio;
    var coverName;
    audio.pause();
    audio.currentTime = 0;
    if(mode == 1){
        if(listOfSongs.findIndex(findAudioPlace)+1 > listOfSongs.length-1)newAudio = listOfSongs[0];
        else newAudio = listOfSongs[listOfSongs.findIndex(findAudioPlace)+1];
    }else{
        if(listOfSongs.findIndex(findAudioPlace)-1 < 0)newAudio = listOfSongs[listOfSongs.length-1];
        else newAudio = listOfSongs[listOfSongs.findIndex(findAudioPlace)-1];
    }
    audio.getElementsByTagName("source")[0].setAttribute("src", "Assets/Music/" + newAudio);//editing innerHtml before being removed and placed again(to update audio source)
    if(newAudio.search("ogg") != -1){
        audio.getElementsByTagName("source")[0].setAttribute("type", "audio/ogg");
    }else{
        audio.getElementsByTagName("source")[0].setAttribute("type", "audio/mpeg");
    } 
    document.querySelector(".song-title").innerHTML = newAudio.slice((newAudio.search(" - ") + 3), newAudio.length-4);//editing html for song attributes
        document.querySelector(".song-artist").innerHTML = newAudio.slice(0,newAudio.search(" - "));
    coverName = newAudio.slice((newAudio.search(" - ") + 3), newAudio.length-4);//editing cover name so that it could potencially be new img source for cover image
        coverName = removeSpaces(coverName); // / /g 
        coverName = "Assets/Pictures/" + coverName + ".jpg";
    document.querySelector(".image-container").getElementsByTagName("img")[0].setAttribute("src", coverName);//setting new value for src, if it gives error it goes to default img, e.g. Assets/Pictures/default.jpg
    audio = document.getElementById("currentAudio");//Updating audio source by removing and placing it again
        newAudio = document.querySelector(".audio-container").innerHTML;
        audio.remove();
        newAudio = removeEnters(newAudio);
        document.querySelector(".audio-container").innerHTML = newAudio;
    playAudio();
}

function findAudioPlace(song){
    var audio = document.getElementById("currentAudio");
    var audioName = audio.getElementsByTagName("source")[0].getAttribute("src");
    audioName = audioName.replace("Assets/Music/","");
    return song == audioName;
}

function setPauseButton(){
    var button = document.getElementById("playButton");
    button.getElementsByTagName("i")[0].setAttribute("class", "fas fa-play");
}

function setPlayButton(){
    var button = document.getElementById("playButton");
    button.getElementsByTagName("i")[0].setAttribute("class", "fas fa-pause");
}

function removeEnters(string){
    var ret = "";
    for(var i = 0;i < string.length;i++){
        if(!(string[i] == '\n' || string[i] == '\r'))ret += string[i];
    }
    return ret;
}

function removeSpaces(string){
    var ret = "";
    for(var i = 0;i < string.length;i++){
        if(!(string[i] == ' '))ret += string[i];
    }
    return ret;
}
