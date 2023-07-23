let cube_snake = document.getElementById("cube-snake");
let background = document.getElementById("background");

document.addEventListener("mousemove", (event) => {
    background.contentWindow.locX = event.clientX;
    background.contentWindow.locY = event.clientY;
})

change_background_rot = (x, y) => {
    let rect = cube_snake.getBoundingClientRect()
    background.contentWindow.locX = rect.left + x;
    background.contentWindow.locY = rect.top + y;
}