/*
 * @name Preload SoundFile
 * @description Call loadSound() during preload() to ensure that the
 * sound is completely loaded before setup() is called. It's best to always
 * call loadSound() in preload(), otherwise sounds won't necessarily be loaded
 * by the time you want to play them in your sketch.
 * 
 * <br><br><em><span class="small">You will need to include the 
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * for this example to work in your own project.</em></span>
 */

var song;

function preload() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0,255,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}