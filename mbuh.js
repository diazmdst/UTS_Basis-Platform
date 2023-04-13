function kirim() {
  var jumPil = document.getElementById("jumPil").value;
  var button1x;
  var pilihan = "";

  for (var i = 1; i <= jumPil; i++) {
    pilihan += "<p>Hobi Ke " + i + "<br><input placeholder = 'Masukkan Hobi' >" + "</p>";
  }
  button1x = "<p>" + '<button type="submit" class="btn btn-primary" onclick="createRadio()">Submit</button>' + "</p>";
  document.getElementById("choose1").innerHTML = pilihan;
  document.getElementById("button1").innerHTML = button1x;
}

function createRadio() {
  var form = document.getElementById("choose1");
  var inputs = form.getElementsByTagName("input");
  var submit;
  var radios = "";

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text") {
      radios += '<input type="radio" name="option" value="' + inputs[i].value + '">' + inputs[i].value + "<br>";
    }
  }
  submit = '<input type="submit" class="btn btn-primary" onclick="doVal()">';
  document.getElementById("submit1").innerHTML = submit;
  list.innerHTML = radios;
}

function doVal() {
  var testName = document.getElementById("Nama");
  var form = document.querySelector("form");
  var result = document.getElementById("result");
  var jumPil = document.getElementById("jumPil").value;
  var form1 = document.getElementById("choose1");
  var inputs = form1.getElementsByTagName("input");
  var radios = "";

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text") {
      radios += inputs[i].value + ", ";
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
      result.textContent = "Halo, nama Saya " + testName.value + ", saya mempunyai sejumlah " + jumPil + " pilihan yaitu " + radios + "dan saya memilih " + selectedOption.value + ".";
    } else {
      result.textContent = "Please select an option.";
    }
  });
}
