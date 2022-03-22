//Basic clickable button, when clicked gives a Hello! alert

function hello() {
  alert("Hello");
}
window.onload = function() {
  let btn = document.getElementById("myButton");
  btn.onclick = hello;
};
