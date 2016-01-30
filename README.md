# Audio-Player-Library

Difference in the audio element across different browser and lack of extremely customizable audio player led me to create this library.

Using the Player:

You need to new pass three parameters (highlighted using different colors) to create your audio player.

var myCirclePlayer = new CirclePlayer(“#jquery_jplayer_1”,
{
m4a: “ImSnake.mp3”
},
{
image: “player1.png”,
progressBar :{
width: “70px”,
background: “blue”
}
}
);
Param 1: This is DOM id of the wrapper element which would wrap our audio element.

Param 2: This is a JSON object which takes “m4a” as a key and its value should containe the location of our audio file.

Param 3: This is a JSON object which takes image and attributes concerning the volume bar. 
“image” key should contain image of our audio player and “progressBar” contains further JSON object using which you can set width 
and background color of the volume bar.
