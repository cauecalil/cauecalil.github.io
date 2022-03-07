function noselect() {
    return false;
}

document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;

document.onkeydown = function (e) {
    return false;
};

window.addEventListener("keydown", function (e) {
    if ([114, 123].includes(e.keyCode) || (e.ctrlKey && [70, 74, 17, 16, 83, 85, 123, 73].includes(e.keyCode))) {
        e.preventDefault();
    }
})