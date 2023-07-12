console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songplay=Array.from(document.getElementsByClassName('songplay'));
let songs = [
    {songName:"Warriyo-Mortals(feat. Laura Brehm)",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Cielo- Huma Huma",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"DEAF KEV-Invisible [NCS Release]",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Different Heaven & EHIDE -My Heart [NCS Release]",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Janji-Heroes-feat-Johnning-NCS-Release",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"pop",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"pop",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"pop",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"pop",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"pop",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

// audioelement.play();

// handle play/pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else
    {
     audioElement.pause();
     masterPlay.classList.add('fa-circle-play');
     masterPlay.classList.remove('fa-circle-pause');
     gif.style.opacity=0;
    }
}) 

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
}
)

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
   songplay.forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
   })
}
songplay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex=0;
    }
    
    else
    {
     songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    
    else
    {
     songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})


