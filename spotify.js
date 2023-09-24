const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");

// Sample list of songs
const songs = [
    { title: "Dil mere", source: "song1.mp3" },
    { title: "Aaftab", source: "song2.mp3" },
    {title:"choo loo",source: "song3.mp3"},
    // Add more songs here
];

// Populate the playlist
songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${song.title}`;
    listItem.addEventListener("click", () => {
        audio.src = song.source;
        audio.play();
    });
    playlist.appendChild(listItem);
});