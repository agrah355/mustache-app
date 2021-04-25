var uperlipsX=0;
var uperlipsY=0;
function preload(){
    image=loadImage("https://previews.123rf.com/images/stockgiu/stockgiu1811/stockgiu181111425/127388026-mexican-icon-moustache-cartoon-vector-illustration-graphic-design.jpg");
}
function setUp(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function getPoses(results){
    if(results.length>0){
        console.log(results);
        uperlipsX=results[0].pose.uperlips.x-20;
        uperlipsy=results[0].pose.uperlips.y-20;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(image,uperlipsX,uperlipsY,40,30);
}
function takeSnapshot(){
    save('my picture.png');
}