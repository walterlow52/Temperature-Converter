function convertTemp(degrees) {
  var x;
  if (degrees = 'C') {
    x = (document.getElementById("celsius").value * 9) / 5 + 32;
    document.getElementById("farenheit").value = Math.round(x);
  }
  
  if (degrees = 'F') {
    x = ((document.getElementById("farenheit").value - 32) * 5) / 9; 
    document.getElementById("celsius").value = Math.round(x);
  }
}

function convertTemp(degrees) {
  var x;
  if (degrees = 'C') {
    x = (document.getElementById("celsius2").value * 9) / 5 + 32;
    document.getElementById("farenheit2").value = Math.round(x);
  }
  
  if (degrees = 'F') {
    x = ((document.getElementById("farenheit2").value - 32) * 5) / 9; 
    document.getElementById("celsius2").value = Math.round(x);
  }
}
