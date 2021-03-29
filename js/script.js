let modal = document.getElementById('myModal');
let playbtn = document.getElementById('playbtn');
let span = document.getElementsByClassName('close');
let show = document.getElementById('show');
let menu = document.getElementById('menu');

let sel1 = document.getElementById('select1');
let sel2 = document.getElementById('select2');
let sel3 = document.getElementById('select3');
let sel4 = document.getElementById('select4');
let sel5 = document.getElementById('select5');

let com1 = document.getElementById('comment1');
let com2 = document.getElementById('comment2');
let com3 = document.getElementById('comment3');
let com4 = document.getElementById('comment4');
let com5 = document.getElementById('comment5');

playbtn.onclick = function() {
    modal.style.display = "flex";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  sel1.onclick = function() {
  com1.style.display = "flex";
  com2.style.display = "none";
  com3.style.display = "none";
  com4.style.display = "none";
  com5.style.display = "none";

  sel1.style.width = "70px";
  sel1.style.height = "70px";
  sel2.style.width = "45px";
  sel2.style.height = "45px";
  sel3.style.width = "45px";
  sel3.style.height = "45px";
  sel4.style.width = "45px";
  sel4.style.height = "45px";
  sel5.style.width = "45px";
  sel5.style.height = "45px";

}
sel2.onclick = function() {
  com1.style.display = "none";
  com2.style.display = "flex";
  com3.style.display = "none";
  com4.style.display = "none";
  com5.style.display = "none";

  sel2.style.width = "70px";
  sel2.style.height = "70px";
  sel1.style.width = "45px";
  sel1.style.height = "45px";
  sel3.style.width = "45px";
  sel3.style.height = "45px";
  sel4.style.width = "45px";
  sel4.style.height = "45px";
  sel5.style.width = "45px";
  sel5.style.height = "45px";
}
sel3.onclick = function() {
  com1.style.display = "none";
  com2.style.display = "none";
  com3.style.display = "flex";
  com4.style.display = "none";
  com5.style.display = "none";

  sel3.style.width = "70px";
  sel3.style.height = "70px";
  sel2.style.width = "45px";
  sel2.style.height = "45px";
  sel1.style.width = "45px";
  sel1.style.height = "45px";
  sel4.style.width = "45px";
  sel4.style.height = "45px";
  sel5.style.width = "45px";
  sel5.style.height = "45px";
}
sel4.onclick = function() {
  com1.style.display = "none";
  com2.style.display = "none";
  com3.style.display = "none";
  com4.style.display = "flex";
  com5.style.display = "none";

  sel4.style.width = "70px";
  sel4.style.height = "70px";
  sel2.style.width = "45px";
  sel2.style.height = "45px";
  sel3.style.width = "45px";
  sel3.style.height = "45px";
  sel1.style.width = "45px";
  sel1.style.height = "45px";
  sel5.style.width = "45px";
  sel5.style.height = "45px";
}
sel5.onclick = function() {
  com1.style.display = "none";
  com2.style.display = "none";
  com3.style.display = "none";
  com4.style.display = "none";
  com5.style.display = "flex";

  sel5.style.width = "70px";
  sel5.style.height = "70px";
  sel2.style.width = "45px";
  sel2.style.height = "45px";
  sel3.style.width = "45px";
  sel3.style.height = "45px";
  sel4.style.width = "45px";
  sel4.style.height = "45px";
  sel1.style.width = "45px";
  sel1.style.height = "45px";
}

show.onclick = function() {
  menu.classList.toggle('navigation-menu-Show');
}