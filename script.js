// Events for change Menu-mobile class. 
document.querySelector('.icon-bars').addEventListener('click', (e) => {
    document.querySelector('.menu-mobile').classList.toggle("showmenu");
});
document.querySelector('.banner').addEventListener('click', (e) => {
    document.querySelector('.menu-mobile').classList.remove("showmenu");
});
// Event for click an creation of session Creations
document.querySelectorAll('.creation').forEach((element) => {
    element.addEventListener('click', (e) => {
        document.location.reload(true);
    });
}); 
// Event for button See all of session Creations
document.querySelector('.seeall').addEventListener('click', (e) => {
    document.location.reload(true);
});