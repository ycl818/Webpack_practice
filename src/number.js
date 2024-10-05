function number() {
  var oDiv = document.createElement("div");
  oDiv.innerHTML = 0;
  document.body.appendChild(oDiv);

  oDiv.onclick = function () {
    this.innerHTML = parseInt(this.innerHTML) + 1;
  };
}

export default number;
