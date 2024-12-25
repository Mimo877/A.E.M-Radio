const radioStations = [
    { name: "Station 1", url: "http://streams.90s90s.de/rnb/mp3-192/" },
    { name: "Station 2", url: "https://streaming.silvacast.com/RNBRADIO.mp3" },
    { name: "Station 3", url: "http://stream.rtlradio.de/rnb/mp3-192/" },
    { name: "Station 4", url: "https://s5.radio.co/sf02cf450a/listen" },
    { name: "Station 5", url: "http://wdr-1live-hiphoprnb.icecast.wdr.de/wdr/1live/hiphoprnb/mp3/128/stream.mp3" },
    { name: "Station 6", url: "http://cdn.nrjaudio.fm/adwz1/de/56248/mp3_128.mp3" } // Du kan lägga till fler stationer här
];

let currentStationIndex = 0;
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeControl = document.getElementById('volume');
const stationInfo = document.getElementById('station-info');

audio.src = radioStations[currentStationIndex].url;
stationInfo.textContent = `Now playing: ${radioStations[currentStationIndex].name}`;

playButton.addEventListener('click', () => {
    audio.play().catch(error => console.error("Playback error: ", error));
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

prevButton.addEventListener('click', () => {
    currentStationIndex = (currentStationIndex > 0) ? currentStationIndex - 1 : radioStations.length - 1;
    updateStation();
});

nextButton.addEventListener('click', () => {
    currentStationIndex = (currentStationIndex < radioStations.length - 1) ? currentStationIndex + 1 : 0;
    updateStation();
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

function updateStation() {
    audio.src = radioStations[currentStationIndex].url;
    stationInfo.textContent = `Now playing: ${radioStations[currentStationIndex].name}`;
    audio.play().catch(error => console.error("Playback error: ", error));
}