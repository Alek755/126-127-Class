song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("fmttm.mp3");
    song2 = loadSound("wh.mp3");
}

function setup() {
    canvas = createCanvas(650, 495);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 650, 495);
}