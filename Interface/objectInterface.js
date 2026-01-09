function drawRectangle(shape) {
    var width = shape.width;
    var heigh = shape.height;
}
drawRectangle({
    width: 20,
    height: 30,
    // lenght:40 Error: It is actually a error.Because in the interface there is only 2 properties.So must have to sent two properties and the properties must be equal;
});
function drawSquar(shape) {
    var width = shape.width;
    var height = shape.height;
}
var threeDSquar = {
    width: 20,
    height: 30,
    lenght: 40
};
drawSquar(threeDSquar); // Watch: Here I pass extra properties but it does not gives any error.
