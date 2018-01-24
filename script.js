function loadDoc(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
  document.getElementById("change").innerHTML = xhttp.responseText;
}
function changeImage() {

  if (document.getElementById("imgClickAndChange").src == "einstein.jpg") {
    document.getElementById("imgClickAndChange").src = "einstein2.jpg";
  }
  else {
    document.getElementById("imgClickAndChange").src = "einstein.jpg";
  }
}