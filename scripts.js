function toggle() {
    const hide = document.getElementById("demoDiv");
    if (hide.style.visibility === "hidden") {
        hide.style.visibility = "visible"
    } else {
        hide.style.visibility = "hidden"
    }
}