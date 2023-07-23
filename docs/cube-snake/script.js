
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (!inIframe()){
    document.body.style.background = "rgb(141, 141, 191)";
}

document.addEventListener("mousemove", (event) => {
    if (inIframe()){
        window.top.change_background_rot(event.clientX, event.clientY);
    }
})