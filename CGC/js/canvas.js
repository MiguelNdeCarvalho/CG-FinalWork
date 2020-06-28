/*---------------------------------------------------------------------
|  Functions needed for draw functions
*-------------------------------------------------------------------*/

function join()
{
    this.save();    
}

function join_trs(t_x,t_y,r_x,r_y,s_x,s_y) //Translate, Rotate, Scale
{
    this.save();
    this.translate(t_x,t_y);
    this.rotate(r_x,r_y);
    this.scale(s_x,s_y);
}

function leave()
{
    this.restore();
}

function leave_colors(fill_color, stroke_color)
{
    this.fillStyle = fill_color;
	this.strokeStyle = stroke_color;
	this.fill();
	this.stroke();
	this.restore();
}

/*---------------------------------------------------------------------
|  Draw functions
*-------------------------------------------------------------------*/

function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stars()
{
    this.beginPath();
    this.arc(getRandomIntInclusive(0, innerWidth),getRandomIntInclusive(0,innerHeight),getRandomIntInclusive(0,2), 0, Math.PI * 2, false);
    this.closePath();
}

function sun()
{
    this.beginPath();
    this.arc(200, 200, 300, 0, 2.0*Math.PI, false);
    this.closePath();
}

function deathstar_ball()
{
    this.beginPath();
    this.arc(500, 500, 150, 0, 2.0*Math.PI, false);
    this.closePath();    
}

function deathstar_line()
{
    this.beginPath();
    this.moveTo(850,550)
    this.lineTo(1150,550);
    this.lineWidth = 10;
    this.closePath();    
}

function deathstar_smallballup()
{
    this.beginPath();
    this.arc(500, 500, 125, 0, 1.0*Math.PI, true);
    this.closePath();    
}

function deathstar_smallballdown()
{
    this.beginPath();
    this.arc(500, 500, 125, 0, 1.0*Math.PI, false);
    this.closePath();    
}

function deathstar_eye()
{
    this.beginPath();
    this.arc(500, 500, 40, 0, 2.0*Math.PI, false);
    this.closePath();     
}

function deathstar_smalleye()
{
    this.beginPath();
    this.arc(500, 500, 10, 0, 2.0*Math.PI, false);
    this.closePath();     
}

function deathstar_xray()
{
    this.beginPath();

    this.lineWidth = 2;

    this.moveTo(949,434)
    this.lineTo(928,461);

    this.moveTo(989,474)
    this.lineTo(928,461);

    this.moveTo(949,515)
    this.lineTo(928,461);

    this.moveTo(910,474)
    this.lineTo(928,461);
    
    this.closePath();
}

function deathstar_xrayplus()
{
    this.beginPath()

    this.lineWidth = 10;

    this.moveTo(928,461)
    this.lineTo(368,236);

    this.closePath();
}

function deathstar_xrayball()
{
    this.beginPath();
    this.arc(500, 500, 5, 0, 2.0*Math.PI, false);
    this.closePath();    
}


function deathstar()
{
    this.join_trs(500,50,0,0,1,1);
    this.deathstar_ball();
    this.leave_colors(`#9a9b9f`, `#9a9b9f`);
    
    this.join();
    this.deathstar_line();
    this.leave_colors(`black`, `black`);

    this.join_trs(500,35,0,0,1,1);
    this.deathstar_smallballup();
    this.leave_colors(`grey`, `grey`);

    this.join_trs(500,65,0,0,1,1);
    this.deathstar_smallballdown();
    this.leave_colors(`grey`, `grey`);

    this.join_trs(450,-25,0,0,1,1);
    this.deathstar_eye();
    this.leave_colors(`#404145`, `black`);

    this.join_trs(450,-25,0,0,1,1);
    this.deathstar_smalleye();
    this.leave_colors(`black`, `black`);

    this.join();
    this.deathstar_xray();
    this.leave_colors(`green`, `green`);

    this.join();
    this.deathstar_xrayplus();
    this.leave_colors(`green`, `green`);

    this.join_trs(429,-39,0,0,1,1);
    this.deathstar_xrayball();
    this.leave_colors(`green`,`green`);

    this.join_trs(-380,-513,0,0,1.5,1.5);
    this.deathstar_xrayball();
    this.leave_colors(`green`,`green`);
}

function superman_leftharm()
{

}

function superman_cape()
{

}

function superman_neck()
{

}

function superman_head()
{

}

function superman_hair()
{

}

function superman_eyes()
{

}

function superman_lips()
{

}

function superman_body()
{

}

function superman_leg()
{

}

function superman_hip()
{

}

function superman_rightharm()
{

}

function superman()
{
    this.superman_leftharm();
    this.superman_cape();
    this.superman_neck();
    this.superman_head();
    this.superman_hair();
    this.superman_eyes();
    this.superman_lips();
    this.superman_body();
    this.superman_leg();
    this.superman_hip();
    this.superman_rightharm();
    this.superman_leg();
}

/*---------------------------------------------------------------------
|  Functions that make it work
*-------------------------------------------------------------------*/

function draw()
{
    
    let n = 0;
    
    while(n < 2000)
    {
        this.join();
        this.stars();
        this.leave_colors(`white`, `black`);

        n++;
    }
    
    
    
    this.join_trs(270,270,0,0,-0.7,-0.7);
    this.sun();
    this.leave_colors(`yellow`, `yellow`);
    
    this.deathstar();
    
    
    /* this.superman(); */
}

function functions(gc)
{
    gc.join = join;
    gc.join_trs  = join_trs;
    gc.leave = leave;
    gc.leave_colors = leave_colors;
    gc.draw = draw;
    gc.stars = stars;
    gc.sun = sun;
    gc.deathstar = deathstar;
    gc.deathstar_ball = deathstar_ball;
    gc.deathstar_line = deathstar_line;
    gc.deathstar_smallballup=deathstar_smallballup;
    gc.deathstar_smallballdown=deathstar_smallballdown;
    gc.deathstar_eye=deathstar_eye;
    gc.deathstar_smalleye=deathstar_smalleye;
    gc.deathstar_xray=deathstar_xray;
    gc.deathstar_xrayplus=deathstar_xrayplus;
    gc.deathstar_xrayball=deathstar_xrayball;
    this.superman_leftharm=superman_leftharm;
    this.superman_cape=superman_cape;
    this.superman_neck=superman_neck;
    this.superman_head=superman_head;
    this.superman_hair=superman_hair;
    this.superman_eyes=superman_eyes;
    this.superman_lips=superman_lips;
    this.superman_body=superman_body;
    this.superman_leg=superman_leg;
    this.superman_hip=superman_hip;
    this.superman_rightharm=superman_rightharm;
    this.superman_leg=superman_leg;
}

function main()
{
    var canvas = document.getElementById('canvas');
    canvas.width= '1280';
    canvas.height= '720';
    var c = canvas.getContext('2d');

    functions(c);
    
    c.join();
    c.draw();
    c.leave();
}