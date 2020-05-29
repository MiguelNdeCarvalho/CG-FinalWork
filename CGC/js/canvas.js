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

function arm()
{
  c.beginPath();

}

function body()
{
  c.beginPath();
  c.moveTo(750,348); //752,358
  c.lineTo(750,388);
  /* c.lineTo(766,388); */ //
  c.moveTo(750,409);
  /* c.lineTo() */
  c.lineTo(750,451); //752,441
  c.lineTo(630,451);
  c.lineTo(630,410);
  c.lineTo(530,410);
  c.line
  c.strokeStyle = `#000000`;
  c.fillStyle = `#000000`;
  c.stroke();
  //c.fill();
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

function arm()
{
  c.beginPath();
  c.moveTo();
}

function hero()
{
  head();
  neck();
  body();
}

stars();
hero();