//Proekt

var matrix = [];

var grassArr = [];
var grassEaterArr = [];
var GishatichArr = [];
var VorsordArr = [];
var BuyserArr = [];

var side = 10;


function setup() {
   for (var y = 0; y < 70; y++) {
      matrix[y] = [];
      for (var x = 0; x < 70; x++) {
         matrix[y][x] = random([0, 1, 2, 3, 4, 5]);
      }
   }

   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');

   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
         if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
         } else if (matrix[y][x] == 2) {
            var ge = new GrassEater(x, y, 2);
            grassEaterArr.push(ge);
         } else if (matrix[y][x] == 3) {
            var gi = new Gishatich(x, y, 3);
            GishatichArr.push(gi);
         } else if (matrix[y][x] == 4) {
            var gv = new Vorsord(x, y, 4);
            VorsordArr.push(gv);
         } else if (matrix[y][x] == 5) {
            var gb = new Buyser(x, y, 5);
            BuyserArr.push(gb);
         }
      }
   }

}


function draw() {

   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

         if (matrix[y][x] == 1) {
            fill("#8cd98b");    //kanach
         }
         else if (matrix[y][x] == 2) {
            fill("#f5f08c")   //dexin
         }
         else if (matrix[y][x] == 0) {
            fill("#d4d4d4");    //moxraguyn
         }
         else if (matrix[y][x] == 3) {
            fill("#f05151");      //karmir
         } else if (matrix[y][x] == 4) {
            fill("#79c7e0");     //kapuyt
         } else if (matrix[y][x] == 5) {
            fill("#dc9be8");     //manushakaguyn
         }

         rect(x * side, y * side, side, side);


      }
   }
   for (var i in grassArr) {
      grassArr[i].mul();
   }

   for (var i in grassEaterArr) {
      grassEaterArr[i].eat();
   }

   for (var i in GishatichArr) {
      GishatichArr[i].eat();
   }

   for (var i in VorsordArr) {
      VorsordArr[i].eat();
   }

   for (var i in BuyserArr) {
     BuyserArr[i].mul();
   }


}
