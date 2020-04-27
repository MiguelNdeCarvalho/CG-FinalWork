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


function head(x,y)
{   
    //Draw Head Shape
    c.beginPath();
    c.ellipse(130, 90, 40, 45, 0, 0, 2 * Math.PI);
    c.strokeStyle = `#fac119`;
    c.fillStyle = `#fac119`;
    c.fill();
    c.stroke();

    //Draw 1st Eye

    c.beginPath();
    c.arc(115,80,3, 0, Math.PI * 2, false);
    c.strokeStyle = `black`;
    c.fillStyle = `black`; //Fill the arc
    c.fill();
    c.stroke();

    //Draw 1st eyebrow
    c.beginPath();
    c.ellipse(115,70 , 8, 3, 0, 0, Math.PI, true);
    c.strokeStyle = `brown`;
    c.fillStyle = `brown`; //Fill the arc
    c.stroke();
    c.fill()

    //Draw 2nd Eye

    c.beginPath();
    c.arc(145,80,3, 0, Math.PI * 2, false);
    c.strokeStyle = `black`;
    c.fillStyle = `black`; //Fill the arc
    c.fill();
    c.stroke();

    //Draw 2nd eyebrow
    c.beginPath();
    c.ellipse(145,70 , 8, 3, 0, 0, Math.PI, true);
    c.strokeStyle = `brown`;
    c.fillStyle = `brown`; //Fill the arc
    c.stroke();
    c.fill()

    // Draw Nose

    c.beginPath();
    c.ellipse(130,95 , 5, 4, 0, Math.PI, 2 * Math.PI, true);
    c.strokeStyle = `#B6AC36`;
    c.stroke();

    //Draw Mouth

    c.beginPath();
    c.moveTo(120, 110);
    c.quadraticCurveTo(130, 125, 140, 110);
    c.strokeStyle = `black`;
    c.fillStyle = `brown`;
    c.stroke();
    c.fill();

    //Draw left Ear
    c.beginPath();
    c.moveTo(20, 20);
    
    c.fill();

    //Draw Hair
    /* c.beginPath();
    c.moveTo(105, 65);
    c.lineTo(150, 60);
    c.lineTo(170,85)
    c.strokeStyle='brown';
    c.stroke() */

}

//stars();
head();