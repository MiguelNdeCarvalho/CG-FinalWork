var canvas = document.getElementById('canvas');

//Make Canvas use all the screen region
canvas.width= innerWidth;
canvas.height= innerHeight;

var c = canvas.getContext('2d');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function stars()
{
    let n = 0;
    while(n < 1000)
    {
        c.beginPath();
        c.arc(getRandomIntInclusive(0, innerWidth),getRandomIntInclusive(0,innerHeight),getRandomIntInclusive(0,2), 0, Math.PI * 2, false);
        c.strokeStyle = `white`;
        c.fillStyle = `White`; //Fill the arc
        c.fill();
        c.stroke();
        n++;
    } 
}

function sun()
{
  c.beginPath();
  c.arc(200, 200, 300, 0, 2.0*Math.PI, false);
  c.fillStyle = `yellow`;
  c.fill();
  c.closePath();
}

function planets()
{
  sun();
}

function head()
{
  //Draw Shape   
  c.beginPath();
  c.ellipse(800, 400, 37, 30, 0, 0, 2 * Math.PI);
  c.strokeStyle = `#fac119`;
  c.fillStyle = `#f5b003`;
  c.fill();
  c.stroke();
  c.closePath();
}

function arms()
{
  //Draw First Arm
  c.beginPath();
  c.fillStyle = `#f5b003`;
  c.fillRect(750, 352, 100, 15);
  c.closePath();

  //Draw Second Arm
  c.beginPath();
  c.fillStyle = `#f5b003`;
  c.fillRect(750, 433, 100, 15);
  c.closePath();

}

function logo(x,y)
{
  c.save();

  c.rotate(90 * Math.PI / 180)
  c.beginPath();
  c.scale(0.1,0.1);

  c.moveTo(x+0.0, y+132.4);
  c.lineTo(x+389.9, y+581.4);
  c.lineTo(x+779.8, y+132.4);
  c.lineTo(x+649.5, y+0.0);
  c.lineTo(x+130.3, y+0.0);
  c.lineTo(x+0.0, y+132.4);
  c.lineTo(x+0.0, y+132.4);
  c.closePath();

  c.moveTo(x+641.7, y+37.5);
  c.lineTo(x+723.4, y+121.0);
  c.lineTo(x+733.5, y+131.3);
  c.lineTo(x+724.0, y+142.2);
  c.lineTo(x+630.0, y+249.1);
  c.bezierCurveTo(x+592.1, y+162.2, x+451.4,y+ 167.7, x+373.7,y+ 169.4);
  c.bezierCurveTo(x+307.7, y+170.9, x+229.5,y+ 162.7, x+224.6,y+ 109.3);
  c.bezierCurveTo(x+219.9, y+57.4, x+309.2, y+33.5, x+361.3,  y+33.6);
  c.bezierCurveTo(x+418.3, y+33.7, x+509.8, y+43.1, x+523.4,  y+136.5);
  c.bezierCurveTo(x+562.8, y+136.5, x+602.3,y+ 136.5, x+641.7,y+ 136.5);
  c.lineTo(x+641.7, y+37.5);
  c.lineTo(x+641.7, y+37.5);
  c.closePath();

  c.moveTo(x+499.8, y+397.1);
  c.lineTo(x+402.1, y+508.2);
  c.lineTo(x+390.5, y+521.4);
  c.lineTo(x+378.8, y+508.2);
  c.lineTo(x+283.4, y+400.0);
  c.bezierCurveTo(x+367.8, y+415.4, x+438.1, y+411.9, x+499.8, y+397.1);
  c.lineTo(x+499.8, y+397.1);
  c.closePath();

  c.moveTo(x+236.9, y+347.3);
  c.lineTo(x+152.1, y+251.2);
  c.bezierCurveTo(x+198.2, y+273.1, x+288.3, y+272.7, x+353.8,y+ 275.5);
  c.bezierCurveTo(x+467.5, y+280.3, x+552.8, y+283.7, x+551.1,y+ 318.5);
  c.bezierCurveTo(x+549.6, y+348.7, x+488.6, y+364.8,x+381.3, y+366.2);
  c.bezierCurveTo(x+343.4, y+307.6, x+245.9, y+302.4,x+236.9, y+347.3);
  c.lineTo(x+236.9, y+347.3);
  c.closePath();

  c.moveTo(x+113.0,y+ 206.9);
  c.lineTo(x+55.9, y+142.2);
  c.lineTo(x+46.3, y+131.3);
  c.lineTo(x+56.4, y+121.0);
  c.lineTo(x+141.0,y+ 34.6);
  c.lineTo(x+145.6,y+ 30.0);
  c.lineTo(x+152.1,y+ 30.0);
  c.lineTo(x+231.3,y+ 30.0);
  c.bezierCurveTo(x+186.0, y+46.7, x+103.1, y+109.5, x+113.0, y+206.9);
  c.lineTo(x+113.0, y+206.9);
  c.closePath();

  c.moveTo(x+513.5, y+30.0);
  c.lineTo(x+583.7, y+30.0);
  c.bezierCurveTo(x+584.8, y+48.4, x+578.2, y+71.4, x+557.8, y+84.1);
  c.bezierCurveTo(x+551.6, y+68.3, x+531.2, y+46.3, x+513.5, y+30.0);
  c.closePath();
  c.fillStyle = "rgb(237, 41, 63)";
  c.fill();
  c.restore();
}

function body()
{
  c.beginPath();
  c.moveTo(750,350); //752,358
  c.lineTo(750,388);
  /* c.lineTo(766,388); */ //
  c.moveTo(750,409);
  /* c.lineTo() */
  c.lineTo(750,450); //752,441
  c.lineTo(630,450);
  c.lineTo(630,440);
  c.lineTo(530,440);
  c.lineTo(530,415);
  c.lineTo(630,415);
  c.lineTo(630,385);
  c.lineTo(530,385);
  c.lineTo(530,360);
  c.lineTo(630,360);
  c.lineTo(630,350);
  c.lineTo(750,350);
  c.strokeStyle = `#5698ca`;
  c.fillStyle = `#3fa4f4`;
  c.stroke();
  c.fill();
  c.closePath();

  logo(3600,-7250);
}

function neck()
{
  c.beginPath();
  /* c.moveTo(750,388); //752,358
  c.lineTo(765,388);
  c.moveTo(765,409);
  c.lineTo(750,409);
  c.lineTo(750,388); */
  c.moveTo(765,388);
  c.lineTo(750,388);
  c.lineTo(750,409);
  c.lineTo(765,409);
  c.strokeStyle = `#d85f1c`;
  c.fillStyle = `#f5b003`;
  c.stroke();
  c.fill();
  c.closePath();
}


function boots()
{
  c.beginPath();
  c.moveTo(530,414);
  c.lineTo(530,451);//530,441 + 10
  c.lineTo(510,451);
  c.lineTo(510,414);
  c.lineTo(530,414);
  c.moveTo(530,451);
  c.quadraticCurveTo(520, 468, 510, 451);
  c.strokeStyle = `#d85f1c`;
  c.fillStyle = `#f5b003`;
  c.stroke();
  c.fill();
  c.closePath();

  c.beginPath();
  c.moveTo(530,395);
  c.lineTo(530,360);//530,441 + 10
  c.lineTo(510,360);
  c.lineTo(510,395);
  c.lineTo(530,395);
  c.moveTo(530,395);
  c.quadraticCurveTo(520, 411, 510, 395);
  c.strokeStyle = `#d85f1c`;
  c.fillStyle = `#f5b003`;
  c.stroke();
  c.fill();
  c.closePath();
}

function hero()
{
  head();
  neck();
  body();
  boots();
  arms();
}

stars();
hero();
planets();