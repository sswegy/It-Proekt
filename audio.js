var listOfSongs = ["Static-X - The Only.mp3", "Rick Astley - Never gonna give you up.mp3"]
function playAudio(){
    var audio = document.getElementById("currentAudio");
    var button = document.getElementById("playButton");
    if(button.innerHTML.search("play") != -1){
        button.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    }else{
        button.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();
    } 
    console.log(listOfSongs.findIndex(findAudioPlace));
}

function playNext(){
    var audio = document.getElementById("currentAudio");
    var button = document.getElementById("next");
    audio.pause();
    if(button.innerHTML.search("play") == -1){
        button.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function findAudioPlace(song){
    var audio = document.getElementById("currentAudio");
    var audioName = audio.getElementsByTagName("source")[0].getAttribute("name")
    console.log(audioName)
    return song.replace(".mp3","") == audioName;
}

