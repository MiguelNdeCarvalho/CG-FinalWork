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

function superman_harm()
{
    this.beginPath();
    this.fillStyle= '#0483ce';
    this.fillRect(0,0,80,20);
    this.closePath();
}

function superman_hand()
{
    this.beginPath();
    this.arc(500, 500, 12.5, 0, 2.0*Math.PI, false);
    this.closePath();         
}

function superman_cape()
{
    this.beginPath();
    this.moveTo(296,500);
    this.bezierCurveTo(296,500,275,500,280,480);
    this.bezierCurveTo(278,448,250,475,242,466);
    this.bezierCurveTo(230,450,215,450,205,465);
    this.bezierCurveTo(195,470,187.5,470,180,465);
    this.bezierCurveTo(170,450,150,490,165,490);
    this.closePath();
}


function superman_head()
{
  this.beginPath();
  this.ellipse(800, 400, 30, 37, 0, 0, 2 * Math.PI);
  this.closePath();
}

function superman_hair()
{
    this.beginPath()
    this.moveTo(345,464);
    this.lineTo(318,464);
    this.lineTo(318,500);
    this.quadraticCurveTo(270, 510, 295, 448);
    this.quadraticCurveTo(318, 427, 345, 447);
    this.quadraticCurveTo(360 , 459, 345, 464);
    this.closePath();
}

function superman_eyes()
{
    this.beginPath();
    this.arc(0, 0, 12.5, 0, 2.0*Math.PI, false);
    this.closePath();
}

function superman_body()
{
    this.beginPath();
    this.fillStyle= '#0483ce';
    this.fillRect(0,0,100,40);
    this.closePath();
}

function superman_leg()
{
    this.beginPath();
    this.fillStyle= '#0483ce';
    this.fillRect(0,0,100,25);
    this.closePath();
}

function superman_boot()
{
    this.beginPath();
    this.moveTo(560,414);
    this.lineTo(530,414);
    

    this.lineJoin=`round`;
    this.lineWidth=`25`
    this.closePath();
}

function superman_bootaux()
{
    this.beginPath();
    this.moveTo(530,414);
    this.lineTo(530,430);

    this.lineJoin=`round`;
    this.lineWidth=`25`
    this.closePath();
}

function superman_xray()
{
    this.beginPath();
    this.moveTo(339,479);
    this.lineTo(882,522);
    this.lineWidth=`2.5`;
    this.closePath();
}

function superman_symbol()
{
    this.beginPath();
    this.moveTo(0.0, 132.4);
    this.lineTo(389.9, 581.4);
    this.lineTo(779.8, 132.4);
    this.lineTo(649.5, 0.0);
    this.lineTo(130.3, 0.0);
    this.lineTo(0.0, 132.4);
    this.lineTo(0.0, 132.4);

    this.moveTo(641.7, 37.5);
    this.lineTo(723.4, 121.0);
    this.lineTo(733.5, 131.3);
    this.lineTo(724.0, 142.2);
    this.lineTo(630.0, 249.1);
    this.bezierCurveTo(592.1, 162.2, 451.4, 167.7, 373.7, 169.4);
    this.bezierCurveTo(307.7, 170.9, 229.5, 162.7, 224.6, 109.3);
    this.bezierCurveTo(219.9, 57.4, 309.2, 33.5, 361.3,  33.6);
    this.bezierCurveTo(418.3, 33.7, 509.8, 43.1, 523.4,  136.5);
    this.bezierCurveTo(562.8, 136.5, 602.3, 136.5, 641.7, 136.5);
    this.lineTo(641.7, 37.5);
    this.lineTo(641.7, 37.5);

    this.moveTo(499.8, 397.1);
    this.lineTo(402.1, 508.2);
    this.lineTo(390.5, 521.4);
    this.lineTo(378.8, 508.2);
    this.lineTo(283.4, 400.0);
    this.bezierCurveTo(367.8, 415.4, 438.1, 411.9, 499.8, 397.1);
    this.lineTo(499.8, 397.1);

    this.moveTo(236.9, 347.3);
    this.lineTo(152.1, 251.2);
    this.bezierCurveTo(198.2, 273.1, 288.3, 272.7, 353.8, 275.5);
    this.bezierCurveTo(467.5, 280.3, 552.8, 283.7, 551.1, 318.5);
    this.bezierCurveTo(549.6, 348.7, 488.6, 364.8,381.3, 366.2);
    this.bezierCurveTo(343.4, 307.6, 245.9, 302.4,236.9, 347.3);
    this.lineTo(236.9, 347.3);

    this.moveTo(113.0, 206.9);
    this.lineTo(55.9, 142.2);
    this.lineTo(46.3, 131.3);
    this.lineTo(56.4, 121.0);
    this.lineTo(141.0, 34.6);
    this.lineTo(145.6, 30.0);
    this.lineTo(152.1, 30.0);
    this.lineTo(231.3, 30.0);
    this.bezierCurveTo(186.0, 46.7, 103.1, 109.5, 113.0, 206.9);
    this.lineTo(113.0, 206.9);;
    
    this.moveTo(513.5, 30.0);
    this.lineTo(583.7, 30.0);
    this.bezierCurveTo(584.8, 48.4, 578.2, 71.4, 557.8, 84.1);
    this.bezierCurveTo(551.6, 68.3, 531.2, 46.3, 513.5, 30.0);
    this.closePath();
}

function superman_symbolbg()
{
    this.beginPath();
    this.ellipse(800, 400, 37, 30, 0, 0, 2 * Math.PI);
    this.closePath();    
}

function superman_symbollight()
{
    this.beginPath();
    this.moveTo(1280,300);
    this.lineTo(815,101);
    this.bezierCurveTo(850,150,850,180,758,184)
    this.lineTo(1280,350);
    this.closePath();    
}

function superman()
{
    this.join_trs(200,500,0,0,1,1);
    this.superman_body();
    this.leave();
    
    this.join();
    this.superman_cape();
    this.leave_colors('#df2607','#df2607');

    this.join_trs(-475,85,0,0,1,1);
    this.superman_head();
    this.leave_colors('#fbad44','#fbad44');

    this.join_trs(300,510,0,0,1,1);
    this.superman_harm();
    this.leave();
    
    this.join_trs(-115,20,0,0,1,1);
    this.superman_hand();
    this.leave_colors('#fbad44','#fbad44');

    this.join();
    this.superman_hair();
    this.leave_colors('black','black')

    this.join_trs(340,480,0,0,0.4,0.4);
    this.superman_eyes();
    this.leave_colors('red','white');
    
    this.join_trs(100,500,0,0,1,1);
    this.superman_leg();
    this.leave();

    this.join_trs(-450,98.5,0,0,1,1);
    this.superman_boot();
    this.leave_colors('red','red');

    this.join_trs(-450,98.5,0,0,1,1);
    this.superman_bootaux();
    this.leave_colors('red','red');

    this.join();
    this.superman_xray();
    this.leave_colors('red','red');

    this.join_trs(280,-78,0,0,1.2,1.2);
    this.deathstar_xrayball();
    this.leave_colors('red','red');

    this.join_trs(-500,-500,0,0,1.6,1.6);
    this.superman_symbolbg();
    this.leave_colors('rgba(255, 255, 126, 1)','rgba(255, 255, 126, 1)');

    this.join();
    this.superman_symbollight();
    this.leave_colors('rgba(255, 255, 126, 0.7)','rgba(255, 255, 126, 0.7)');

    this.join_trs(740,115,0,0,0.1,0.1);
    this.superman_symbol();
    this.leave_colors('red','red');
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
        this.leave_colors(`white`, `white`);

        n++;
    }
    
    
    
    this.join_trs(270,270,0,0,-0.7,-0.7);
    this.sun();
    this.leave_colors(`yellow`, `yellow`);
    
    this.deathstar();
    
    
    this.superman();
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
    gc.superman_harm=superman_harm;
    gc.superman_hand=superman_hand;
    gc.superman_cape=superman_cape;
    gc.superman_head=superman_head;
    gc.superman_hair=superman_hair;
    gc.superman_eyes=superman_eyes;
    gc.superman_body=superman_body;
    gc.superman_leg=superman_leg;
    gc.superman_leg=superman_leg;
    gc.superman_boot=superman_boot;
    gc.superman_bootaux=superman_bootaux;
    gc.superman_xray=superman_xray;
    gc.superman_symbol=superman_symbol;
    gc.superman_symbollight=superman_symbollight;
    gc.superman_symbolbg=superman_symbolbg;
    gc.superman=superman;
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