let upper = document.querySelector(".upper");
let down = document.querySelector(".down");

function display(num) {
  down.value += num;
}

function handelDelete() {
  down.value = down.value.slice(0, -1);
}

function handelClear() {
    down.value = '';
}

function calc() {
    down.value = eval(down.value)
}