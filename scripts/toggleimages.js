function toggle_visible(div_id) {
    var images = document.getElementById("images-" + div_id);
    var button = document.getElementById("button-" + div_id);

    if (images.style.display == "flex") {
        images.style.display = "none";
        button.innerHTML = "Show additional images";
    }
    else {
        images.style.display = "flex";
        button.innerHTML = "Hide additional images";
    }
}