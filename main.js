function preload() {

}

function setup() {
 canvas = createCanvas(620, 450);
 canvas.position(110, 250);
 video = createCapture(VIDEO);
 video.hide();
}

function draw() {
  image(video, 0, 0, 620, 450)
}

function take_snapshot() {
    save('student_name.png');
}
