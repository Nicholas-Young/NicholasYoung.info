var current_page;
var fileName = location.href.split("/").slice(-1);

if(fileName == "skills.html") {
    current_page = 'skills';
}
else if(fileName == "projects.html") {
    current_page = 'projects';
}
else if(fileName == "hobbies.html") {
    current_page = 'hobbies';
}
else if(fileName == "resume.html") {
    current_page = 'resume';
}
else if(fileName == "valve.html") {
    current_page = 'valve';
}
else {
    current_page = 'home';
}

if (is_mobile()) {
    setTimeout(snap_update_current_position, 250);
}
else {
    snap_update_current_position();
}

document.getElementsByClassName("home")[0].addEventListener("mouseover", function() {update_current_position_to_class("home")});
document.getElementsByClassName("skills")[0].addEventListener("mouseover", function() {update_current_position_to_class("skills")});
document.getElementsByClassName("projects")[0].addEventListener("mouseover", function() {update_current_position_to_class("projects")});
document.getElementsByClassName("hobbies")[0].addEventListener("mouseover", function() {update_current_position_to_class("hobbies")});
document.getElementsByClassName("resume")[0].addEventListener("mouseover", function() {update_current_position_to_class("resume")});
document.getElementsByClassName("valve")[0].addEventListener("mouseover", function() {update_current_position_to_class("valve")});

document.getElementsByClassName("home")[0].addEventListener("mouseout", update_current_position);
document.getElementsByClassName("skills")[0].addEventListener("mouseout", update_current_position);
document.getElementsByClassName("projects")[0].addEventListener("mouseout", update_current_position);
document.getElementsByClassName("hobbies")[0].addEventListener("mouseout", update_current_position);
document.getElementsByClassName("resume")[0].addEventListener("mouseout", update_current_position);
document.getElementsByClassName("valve")[0].addEventListener("mouseout", update_current_position);

window.onresize = snap_update_current_position;

function disable_transitions() {
    document.body.classList.add("notransition");
}

function enable_transitions() {
    document.body.classList.remove("notransition");
}

function update_current_position_to_class(classname) {
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

function update_current_position() {
    update_current_position_to_class(current_page);
}

function snap_update_current_position() {
    disable_transitions();
    update_current_position_to_class(current_page);
    document.body.offsetHeight;
    enable_transitions();
}