var inpt = document.getElementById("inputBox");
var lst = document.getElementById("listJs");

function addElm() {
  if (inpt.value === '') {
    alert("Type something!!");
  } else {
    var li = document.createElement("li");
    li.textContent = inpt.value;
    lst.appendChild(li);
    var span = document.createElement("span");
    span.textContent = "X";
    li.appendChild(span);
  }
  inpt.value = '';
}

lst.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);
