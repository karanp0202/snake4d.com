const main = document.getElementById("main")
const content = document.getElementById("content")
const background_dev = document.getElementById("background_dev")

const smoothNess = 15

let position_y = 0
let scroll_speed = 0

var intervalId = window.setInterval(function(){
    position_y += scroll_speed * 10;
    let factor = 82 / (main.scrollHeight - main.offsetHeight)
    let height = main.scrollHeight - main.offsetHeight
    if (position_y < 0)
        position_y = 0
    if (position_y > height)
        position_y = height

    scroll_speed *= 0.80
    
    let new_height = main.scrollTop + (position_y - main.scrollTop) / smoothNess

    background_dev.style.filter = "blur(" + (Math.abs(new_height - main.scrollTop) / 2) + "px)"

    main.scrollTo(0, new_height)
    content.style.marginTop = "0px"
    content.style.marginBottom = "0px"
    
    background_dev.style.width = (main.scrollTop * factor + 20) + "vw"
}, 17);

background_dev.style.width = "20vw"

main.addEventListener("wheel", event => {
    event.preventDefault()
    const delta = Math.sign(event.deltaY)
    scroll_speed += delta
    // position_y += delta * 80
    // if (position_y > height)
    //     position_y = height
    // if (position_y < 0)
    //     position_y = 0
})
