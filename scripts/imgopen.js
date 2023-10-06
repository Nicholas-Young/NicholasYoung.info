var additional_images = document.getElementsByClassName("additional-image");
var main_images = document.getElementsByClassName("content-image");
addListener(additional_images);
addListener(main_images);

function addListener(image_list) {
    for(var i = 0; i < image_list.length; i++) {
        if(image_list.item(i).tagName == "IMG") {
            image_list.item(i).addEventListener("click", function() {
                window.open(this.getAttribute("src"), "_blank");
            })
        }
    }
}