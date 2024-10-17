console.log("Welcome to Pulseplay Music Player");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "https://soundcloud.com/prince-raj-592251973/1a1"},
    {songName: "Cielo - Huma-Huma", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/4.jpg"},
    {songName: "Janji - Heroes Tonight feat. Johnning [NCS Release]", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/5.jpg"},
    {songName: "Akhiyaan Gulaab (SlowedReverb) - Mitraz", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/6.jpg"},
    {songName: "Dandelions X Kaise Hua 🍭🕊️", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/7.jpg"},
    {songName: "Duur Na Karin (Slowed Reverb) - Vishal Mishra", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/8.jpg"},
    {songName: "Faasle", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/9.jpg"},
    {songName: "Hua Main (Slowed Reverb) - Raghav Chaitanya", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/10.jpg"},
    {songName: "Husn (Slowed Reverb) - Anuv Jain", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/11.jpg"},
    {songName: "Kabira (Slowed Reverb) - Yeh Jawaani Hai Deewani", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/12.jpg"},
    {songName: "Labon Ko (Slowed Reverb) - KK", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/13.jpg"},
    {songName: "Le Aaunga (Slowed Reverb) - Arijit Singh", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/14.jpg"},
    {songName: "Main Hoon Sath Tere - Arijit Singh (SLOWED REVERB)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/15.jpg"},
    {songName: "MAINE KHUD KO (SLOWED REVERB) - Mustafa Zahid", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/16.jpg"},
    {songName: "MAKHNA - Drive (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/17.jpg"},
    {songName: "Malang Sajna (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd3", coverPath: "covers/18.jpg"},
    {songName: "Mann Mera (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/19.jpg"},
    {songName: "Mere Liye - Broken But Beautiful 3", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/20.jpg"},
    {songName: "Meri banogi kya (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/21.jpg"},
    {songName: "MITRAZ - Nadiyon Sa", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/22.jpg"},
    {songName: "MITRAZ - Sajda Karaan", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/23.jpg"},
    {songName: "OONCHI OONCHI DEEWAREIN - Yaariyan 2", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/24.jpg"},
    {songName: "Pehli Dafa (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/25.jpg"},
    {songName: "Saajan Ve (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/26.jpg"},
    {songName: "Saanware - Akhil Sachdeva", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/27.jpg"},
    {songName: "Sang Rahiyo - Jasleen Royal", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/28.jpg"},
    {songName: "Sapna Jahan - Sonu Nigam", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/29.jpg"},
    {songName: "Sun Saathiya Lofi Mix", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/30.jpg"},
    {songName: "Tainu Khabar Nahi (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/31.jpg"},
    {songName: "Tere Bin Nahi Laage - Uzair Jaswal", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/32.jpg"},
    {songName: "Teri Hogaiyaan - Broken But Beautiful", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/33.jpg"},
    {songName: "Tu Hai - Darshan Raval", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/34.jpg"},
    {songName: "Tu Hain Toh - Neeti Mohan", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd3", coverPath: "covers/35.jpg"},
    {songName: "Tu Jaana Na Piya", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/36.jpg"},
    {songName: "Tum Jo Aaye (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/37.jpg"},
    {songName: "Tum Se (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/38.jpg"},
    {songName: "Tum Se Hi (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/39.jpg"},
    {songName: "Tum Tak [slowed reverb]", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/40.jpg"},
    {songName: "Ve Haaniyaan (Slowed Reverb)", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/41.jpg"},
    {songName: "Ve Kamleya - Rocky Aur Rani Kii Prem Kahaani", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/42.jpg"},
    {songName: "Without You Mashup", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/43.jpg"},
    {songName: "YODHA - Zindagi Tere Naam", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/44.jpg"},
    {songName: "Zaroor X Ishq Di Baajiyaan [Full Mashup]", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/45.jpg"},
    {songName: "𝘿𝙞𝙡 𝙎𝙚 𝘿𝙞𝙡 𝙏𝙖𝙠 ( 𝙎𝙡𝙤𝙬𝙚𝙙 + 𝙍𝙚𝙫𝙚𝙧𝙗 ) 𝘽𝙖𝙬𝙖𝙖𝙡", filePath: "https://soundcloud.com/prince-raj-592251973/1a1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=82bb0eb662b444edad7e6b17c4cad3cd", coverPath: "covers/46.jpg"},
];

// Update song items in the UI
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});

function loadSongs() {
    const songItemContainer = document.getElementById('songItemContainer');

songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'songItem';
        songItem.innerHTML = `
            <h3>${song.songName}</h3>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.trackId}&color=%23ff5500&auto_play=false&hide_related=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
        `;
        songItemContainer.appendChild(songItem);
    });
}

document.addEventListener('DOMContentLoaded', loadSongs);

// Automatically play the first song when the page loads
document.addEventListener('DOMContentLoaded', () => {
    playSong(songIndex); // Play the first song
});

// Function to play the song
function playSong(index) {
    audioElement.src = songs[index].filePath; // Set the source to the current song
    masterSongName.innerText = songs[index].songName; // Update song name
    audioElement.play(); // Play the song
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1; // Show the GIF
}

// Handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Function to reset all play buttons to play state
const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Play selected song
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i)=> {
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

// Handle Next button
document.getElementById('next').addEventListener('click', ()=> {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Handle Previous button
document.getElementById('previous').addEventListener('click', ()=> {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
