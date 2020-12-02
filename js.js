// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var exit = document.getElementById("exit");

// When the user clicks the button, open the modal
btn.onclick = function () {
    if (valid(document.getElementById("x")) && valid((document.getElementById("y")))){
        modal.style.display = "block";
        tableCreate();
    }
   else {
        return false
    }
}

// When the user clicks on <span> (x), close the modal
exit.onclick = function () {
    document.getElementById("content").innerHTML = "";
    modal.style.display = "none";
}
function valid (number){
    if (/^\D*$/.test(number.value)) {
        document.getElementById(number.id).style.borderColor = "red";
        alert("Enterd invalid ipnut");
        return false
    }
    else {
        if (parseInt(number.value) < 1 || parseInt(number.value) > 9) {
            document.getElementById(number.id).style.borderColor = "red";
            alert("Enterd invalid ipnut");

            return false
        } else {
            document.getElementById(number.id).style.borderColor = "#fff";

            return true
        }
    }
}

document.getElementById("x").addEventListener("blur",function (){
    valid(this);
})
document.getElementById("y").addEventListener("blur",function (){
    valid(this);
})

function tableCreate() {



    var myTableDiv = document.getElementById("content");

    var table = document.createElement('TABLE');
    table.border = '1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    table.style.marginLeft = "5%";
    table.style.marginRight = "5%";
    table.style.marginTop = "15px";
    table.style.width = '90%';
    table.style.height = "80px";
    table.style.color = "#fff";
    table.style.textAlign = "center";
    table.style.fontSize = "large";
    table.style.borderColor = "#fff"
    table.style.backgroundColor = "#0d141e";
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    for (var i = 0; i < y + 1; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < x + 1; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            if (j === 0 && i === 0) {
                td.appendChild(document.createTextNode(""));
                tr.appendChild(td);
            } else if (i === 0 && j !== 0) {
                td.appendChild(document.createTextNode("X = " + j));
                tr.appendChild(td);
            } else if (j === 0 && i !== 0) {
                td.appendChild(document.createTextNode("Y = " + i));
                tr.appendChild(td);
            } else {
                td.appendChild(document.createTextNode(i * j));
                tr.appendChild(td);
            }

        }
    }
    myTableDiv.appendChild(table);
}
