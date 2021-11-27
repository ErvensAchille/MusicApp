 const image = document.querySelector('img');
 const title = document.getElementById('title');
 const artist = document.getElementById('artist');
 const music = document.querySelector('audio');
 const prevBtn = document.getElementById('prev');
 const playBtn = document.getElementById('play');
 const nextBtn = document.getElementById('next');
 const progressContainer = document.getElementById('progressContainer');
 const progress = document.getElementById('progress');

// Music

const songs = [
  { name:'Woo',
    displayName:'Hip Hop Playlist',
    artist: 'Pop Smoke'},
  { name:'My Peak',
    displayName:'Hip Hop Playlist',
    artist: 'Chance the rapper ft. Future'},
  { name:'Stash It',
    displayName:'Hip Hop Playlist',
    artist: 'Allen Uchiha'},
  { name:'Jacinto-3',
    displayName:'Hip Hop Playlist',
    artist: 'Jacinto'}
]
  // check if playing
  let isPlaying = false

  // play
  function playSong(){
    isPlaying = true
    playBtn.classList.replace('fa-play','fa-pause')
    playBtn.setAttribute('Title', 'Pause')
    music.play()
  }

  // pause
  function pauseSong(){
    isPlaying = false
    playBtn.classList.replace('fa-pause','fa-play')
    playBtn.setAttribute('Title', 'Play')
    music.pause()
  }

  // play event listener

  playBtn.addEventListener('click',()=>(isPlaying ? pauseSong(): playSong()));

  // update dom
  function loadSong(song){
    title.textContent = song.displayName
    artist.textContent= song.artist
    music.src = `music/${song.name}.mp3`
    image.src = `img/${song.name}.jpg`
  }

// current song
let songIndex = 0
// previous songs
function prevSong(){
  songIndex--;
  if(songIndex < 0){
    songIndex = songs.length -1
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// nextSong

function nextSong(){
  songIndex++;
  if(songIndex > songs.length -1){
    songIndex = 0
  }
  console.log(songIndex)
  loadSong(songs[songIndex]);
  playSong();
}

  // on load select first song
  loadSong(songs[songIndex]);


// update progress bar and timeout
  function updateProgressBar(e){
    if(isPlaying){
      const {duration,currentTime} = e.srcElement;
      console.log(duration, currentTime)
    }
  }

  // event listener

   prevBtn.addEventListener('click',prevSong);
   nextBtn.addEventListener('click',nextSong);
   music.addEventListener('timeupdate', updateProgressBar);
