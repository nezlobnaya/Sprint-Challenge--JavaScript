// 1. Copy and paste your prototype in here and refactor into class syntax.
    // Base class
    class CuboidMakerClass {
    constructor(attrs) {
      this.length = attrs.length;
      this.width = attrs.width;
      this.height = attrs.height
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
  }

   
  const cuboid = new CuboidMakerClass({
    length: 4, 
    width: 5, 
    height: 5
  })

   // sub class
   class CubeMaker extends CuboidMakerClass {
    constructor (attrs) {
    super(attrs);
    }

    volumeCube() {
    return Math.pow(this.width,3); //formula for volume for cubes 
    }    

    surfaceAreaCube() {
    return 6*(Math.pow(this.width,2));//formula for surface area for cubes 
    }
  }

    const cube = new CubeMaker ({
    width: 3
    });



  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
//  Test your work by logging out your volume and surface area.

    console.log(cube.volumeCube()); //125
    console.log(cube.surfaceAreaCube()) //150
