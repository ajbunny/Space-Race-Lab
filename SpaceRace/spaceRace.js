// var canvas = document.getElementById('gameCanvas');
// var c = canvas.getContext("2d");

// let rightShip;
// let leftShip;

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'white';
//     c.stroke();
// }
var circle = new circle(200, 200) 
function circle() {
    this.x = x;
    
    this.draw = function() { 
        c.beginPath(); //circle function
        c.arc(x, 200, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "white";
        c.stroke();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {// this statements makes the circle move back and forth on the x axis
             this.dx = -this.dx;

    }
}




var x = 200;
var dx = 5;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
          circle.draw();
      c.beginPath(); //circle function
      c.arc(x, 200, 30, 0, Math.PI * 2, false);
      c.strokeStyle = "white";
      c.stroke();
   if(x + radius> innerWidth || x - radius < 0) {
    dx = -dx;
   }
      x += dx;
  }
  animate();


 // this animate function creates the movement on the canvas page
//     for (var i = 0; i < 5; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'white';
//     c.stroke();
// }



  

// console.log(canvas);

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300, 100);
// c.lineTo(500, 750)
// c.stroke();

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle ='Purple';
// c.stroke();


 //for(var i = 0; i <circleArr.length; i++) {
    //   circleArr[i].update();
    // }
// function circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;

//   this.draw = function () {
//     c.beginPath(); //circle function
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = "white";
//     c.stroke();
//   };

  // var x = Math.random() * innerWidth;// will put circle on a random x value
  // var y = Math.random() * innerHeight; // will put circle on a random y value
  // var dx = (Math.random() - 0.5) * 8; // dx is the standard var name for the x velocity
  // var dy = (Math.random() - 0.5) * 8; // dx is the standard var name for the x velocity
  // var radius = 30;

//   this.update = function () {
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {// this statements makes the circle move back and forth on the x radius
//       this.dx = -this.dx;
//     }

//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {// this statements makes the circle move back and forth on the y radius
//       this.dy = -this.dy;
//     }

//     this.x += this.dx; // --> velocity is the rate at which something moves ina certain direction
//     this.y += this.dy;

//     this.draw();
//   };
// }

// var circleArr = [];
// var circle = new circle(200, 200, 3, 3, 30);

// for (var i = 0; i < 100; i++) {
//    var radius = 30; 
//   var x = Math.random() * innerWidth; // will put circle on a random x value
//   var y = Math.random() * innerHeight; // will put circle on a random y value
// //   var dx = (Math.random() - 0.5) * 8; // dx is the standard var name for the x velocity
// //   var dy = (Math.random() - 0.5) * 8; // dx is the standard var name for the x velocity
  
//   circleArr.push(new circle(x, y, dx, dy, radius));
// }

//all variables above are linked to the functions below
