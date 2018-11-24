// Create an object
const circleObj = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw with function");
  }
};
//call function draw in object
circleObj.draw();

//Factory Function
function CreateCirlce(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw with factory function");
    }
  };
}
const circleFacFunc = new CreateCirlce(1);
circleFacFunc.draw();

// Constructor Function
function Circle(radius) {
  // console.log("this", this);
  this.radius = radius;
  this.draw = function() {
    console.log("draw with constructor");
  };
}
const cirFromConst = new Circle(1);
cirFromConst.draw();
