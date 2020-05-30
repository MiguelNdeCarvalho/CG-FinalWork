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

function body()
{
  c.beginPath();
  c.moveTo(750,350
    ); //752,358
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