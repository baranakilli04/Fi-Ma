let isMoved

function moveLastLi() {
    const lastLi = document.querySelector("#navbar li:last-child");
    const ul = document.querySelector("#navbar");
    ul.insertBefore(lastLi, ul.firstChild);
  }
  
function resetNavbar() {
    const firstLi = document.querySelector("#navbar li:first-child");
    const ul = document.querySelector("#navbar");
    ul.insertBefore(firstLi, ul.lastChild.nextSibling);
}
 
window.addEventListener("resize", function() {
    if (window.innerWidth < 800 && !isMoved) {
        moveLastLi();
        isMoved = true    
    }
    if(window.innerWidth >= 800 && isMoved) {
        resetNavbar();
        isMoved = false
    }
});

window.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 800) {
      moveLastLi();
      isMoved = true
    }
  });
  