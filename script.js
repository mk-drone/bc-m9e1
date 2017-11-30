function getTriangleArea(a,h){
    if(a <= 0 || h <= 0)
        return "Nieprawidłowe dane";

    return a*h/2;
}


// console.log(getTriangleArea(10,6));

var areas = [];

for(var i = 0; i<3; i++){
    //jako parametry losuj liczby z zakresu -10 do 10
    var a = Math.floor((Math.random()*2-1)*10);
    var h = Math.floor((Math.random()*2-1)*10);
    // console.log("a: " + a + " h: " + h);
    areas.push(getTriangleArea(a,h));
}

console.dir(areas);