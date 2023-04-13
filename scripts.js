function convertTemp(degrees) {
  var x;
  if (degrees = 'C') {
    x = (document.getElementByClass("celsius").value * 9) / 5 + 32;
    document.getElementByClass("farenheit").value = Math.round(x);
  }
  
  if (degrees = 'F') {
    x = ((document.getElementByClass("farenheit").value - 32) * 5) / 9; 
    document.getElementByClass("celsius").value = Math.round(x);
  }
}
