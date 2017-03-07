$(document).ready(function(){
  var valueNum = document.getElementById("numbers");

  document.getElementById("submitBtn").addEventListener("click", submitFunction);
  document.getElementById("clearBtn").addEventListener("click", clearAll);
  document.getElementById("clearNumBtn").addEventListener("click", clearNum);

  function submitFunction() {
    $("<div id='divideChar' class='childNode'>/</div>").replaceAll("#divideChar");
    $("<div id='multiplyChar' class='childNode'>*</div>").replaceAll("#multiplyChar");

    var elementsArray = [];

    $('#numbers').children().each(
        function(i){
            elementsArray.push(this.innerHTML);
        }
    );

    valueNum.innerHTML = elementsArray.toString().replace(/,/g, '');

    var x = eval(valueNum.innerHTML);
    valueNum.innerHTML = "";

    valueNum.innerHTML = "<div class='childNode'>" + x + "</div>";

    if (x === undefined) {
        valueNum.innerHTML = "";
    }
  }
  function clearAll() {
    valueNum.innerHTML = "";
  }
  function clearNum() {
    var listitems = valueNum;
    listitems.removeChild(listitems.lastChild);
  }

  document.getElementById("zeroNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>0</div>";
  });
  document.getElementById("oneNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>1</div>";
  });
  document.getElementById("twoNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>2</div>";
  });
  document.getElementById("threeNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>3</div>";
  });
  document.getElementById("fourNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>4</div>";
  });
  document.getElementById("fiveNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>5</div>";
  });
  document.getElementById("sixNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>6</div>";
  });
  document.getElementById("sevenNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>7</div>";
  });
  document.getElementById("eightNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>8</div>";
  });
  document.getElementById("nineNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>9</div>";
  });
  document.getElementById("dotNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>.</div>";
  });
  document.getElementById("plusNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>+</div>";
  });
  document.getElementById("minusNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div class='childNode'>-</div>";
  });
  document.getElementById("divideNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div id='divideChar' class='childNode'>&#247;</div>";
  });
  document.getElementById("multiplyNum").addEventListener("click", function (){
    valueNum.innerHTML = valueNum.innerHTML + "<div id='multiplyChar' class='childNode'>&#215;</div>";
  });
});