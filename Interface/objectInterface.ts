interface rectangle {
    width: number,
    height: number,
}

function drawRectangle(shape: rectangle) {
    let width = shape.width;
    let heigh = shape.height;
}

drawRectangle({
    width : 20,
    height: 30,
    // lenght:40 Error: It is actually a error.Because in the interface there is only 2 properties.So must have to sent two properties and the properties must be equal;
});  


interface squar {
    width: number,
    height: number
}


function drawSquar(shape: squar) {
    let width =  shape.width;
    let height = shape.height;
}

let threeDSquar = {
    width: 20,
    height: 30,
    lenght: 40
}
drawSquar(threeDSquar)// Watch: Here I pass extra properties but it does not gives any error.


// When passing a direct object literal, TypeScript performs an "excess property check".It expects the object to exactly match the interface, so any extra properties cause an error.
// But when assigning the object to a variable first, TypeScript becomes more relaxed.It only checks whether the required properties exist and allows extra properties,because a variable might be used in multiple contexts.
// In short:
// - Direct object literal = strict, no extra properties allowed.
// - Variable object = relaxed, extra properties allowed.

