function a875x() {
  var img = document.createElement('img');
  img.align= "middle"
  img.src = 'https://genknews.genkcdn.vn/2014/0-7d71d.jpg';
  var center = document.createElement("center");
  center.appendChild(img)
  var mainapp = document.querySelector("#app");
  mainapp.parentNode.replaceChild(center, mainapp)
}
function a876x() {
  var mainapp = document.querySelector("#app");
  mainapp.parentNode.removeChild(mainapp)
}

function a877x() {
  window.open('https://tinyurl.com/hahaloloauto', '_self')
}
