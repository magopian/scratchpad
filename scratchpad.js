function click(e) {
  console.log("hello world");
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('close');
  closeButton.addEventListener('click', click);
});

