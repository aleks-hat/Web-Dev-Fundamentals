//JS file for temperature converter, html and css files also in folder

window.onload = function() {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahr");
  //celcius formula
  c.oninput = function() {
      f.value = (c.value * 9/5) + 32;
  };
  //fahrenheit formula
  f.oninput = function() {
      c.value = (f.value - 32) * 5/9;
  }
};
