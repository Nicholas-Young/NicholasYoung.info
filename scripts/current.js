var current_page;
var ready = 0;

window.onresize = snap_update_current_position;

function disable_transitions() {
    document.body.classList.add("notransition");
}

function enable_transitions() {
    document.body.classList.remove("notransition");
}

function set_current_page(page) {
    ready = 1;
    current_page = page;
    update_current_position(page);
}

function update_current_position_to_class(classname) {
    if(ready == 1) {
        var current = document.getElementsByClassName("current")[0];
        var inner = document.getElementsByClassName("inner")[0];

        var boundingrect = document.getElementsByClassName(classname)[0].getBoundingClientRect();

        current.style.width = (boundingrect.width + 30) + "px";
        current.style.height = (boundingrect.height + 12) + "px";
        current.style.left = (boundingrect.left + window.scrollX - 15) + "px";
        current.style.top = (boundingrect.top + window.scrollY - 6) + "px";

        inner.style.width = (boundingrect.width + 24) + "px";
        inner.style.height = (boundingrect.height + 6) + "px";
        inner.style.left = (boundingrect.left + window.scrollX - 12) + "px";
        inner.style.top = (boundingrect.top + window.scrollY - 3) + "px";
    }
}

function update_current_position() {
    update_current_position_to_class(current_page);
}

function snap_update_current_position() {
    disable_transitions();
    update_current_position_to_class(current_page);
    document.body.offsetHeight;
    enable_transitions();
}