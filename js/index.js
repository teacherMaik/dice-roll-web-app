document.getElementById("btn-pips-1").addEventListener("click", function() {

  let pips = document.querySelectorAll("#player-1 #pip");

  let pip = 0;
  if (pips[pip].classList == "dot") {

    while (pip < pips.length) {

      pips[pip].classList.add("rombus");
      pips[pip].classList.remove("dot");
      pip++;
    }
  } else if (pips[pip].classList == "rombus") {

    while (pip < pips.length) {

      pips[pip].classList.add("dot");
      pips[pip].classList.remove("rombus");
      pip++;
    }
  }
});

document.getElementById("btn-pips-2").addEventListener("click", function() {

  let pips = document.querySelectorAll("#player-2 #pip");

  let pip = 0;

  if (pips[pip].classList == "dot") {

    while (pip < pips.length) {

      pips[pip].classList.add("rombus");
      pips[pip].classList.remove("dot");
      pip++;
    }
  } else if (pips[pip].classList == "rombus") {

    while (pip < pips.length) {

      pips[pip].classList.add("dot");
      pips[pip].classList.remove("rombus");
      pip++;
    }
  }
});