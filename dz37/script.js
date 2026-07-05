const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

c.beginPath();
c.arc(canvas.width / 2,canvas.height / 2,80,0,Math.PI*2);
c.stroke();
c.closePath();
c.fillStyle="yellow";
c.fill();

c.beginPath();
c.arc(230,140,10,0,Math.PI*2);
c.stroke();
c.fillStyle='black';
c.fill();
c.closePath();

c.beginPath();
c.arc(230,140,5,0,Math.PI*2);
c.stroke();
c.fillStyle='white';
c.fill();
c.closePath();

c.beginPath();
c.arc(290,140,10,0,Math.PI*2);
c.fillStyle='black';
c.fill();
c.stroke();
c.closePath();

c.beginPath();
c.arc(290,140,5,0,Math.PI*2);
c.fillStyle='white';
c.fill();
c.stroke();
c.closePath();

c.beginPath();
c.arc(canvas.width / 2,canvas.height / 2,55,0,Math.PI);
c.stroke();
c.closePath();
c.fillStyle="yellow";
c.fill();


