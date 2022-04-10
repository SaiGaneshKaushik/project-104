Webcam.set({
width: 350,
height: 300,
image_forma: 'png',
png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
  Webcam.snap(function(data_uri)
 {
   document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
 });
                   
}

console.log("ml5 version", ml5.version);

classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/modal.json', modelLoaded);
function modelLoaded()
{
    console.log("model loaded");
}