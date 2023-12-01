//este e um array com os caminhos dos videos de fundo

const videos = ["assets/dirtmouth.mp4", "assets/godhome.mp4", "assets/voidheart.mp4"];

// seletor de videos aleatorios
function escolhaVideoAleatorios() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideo = videos[randomIndex];
    return selectedVideo;
}
window.onload = function() {
    const videoElement = document.getElementById("video-background");
    const randomVideo = escolhaVideoAleatorios();
    videoElement.src = randomVideo;
    videoElement.load(); // Recarrega o vídeo
};
