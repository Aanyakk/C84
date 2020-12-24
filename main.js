canvas=document.getElementByI("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_hieght=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadbackground;
    rover_imgTag.src = rover_image;

}

function uploadbackground () {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas._hieght);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_hieght);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keycode;
    console.log(keypressed);
    if(keypressed == '38')

    {
        up();
        console.log("up");
        
    }
}

