function goToProblems() {
    document
        .getElementById("problems")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function showDemo() {
    alert("Problems page will be connected here.");
}


function showAllProblems() {
    alert("Full problems page will be added in the next step.");
}


function joinContest() {
    alert("Contest page will be connected here.");
}


function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function openLogin() {

    document.getElementById("loginModal")
        .style.display = "flex";
}


function openSignup() {

    document.getElementById("loginModal")
        .style.display = "flex";
}


function closeModals() {

    document.getElementById("loginModal")
        .style.display = "none";
}


window.onclick = function(event) {

    const modal =
        document.getElementById("loginModal");

    if (event.target === modal) {
        closeModals();
    }

};