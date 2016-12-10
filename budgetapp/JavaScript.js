
//This function validate a simple user and pass to user the app.
//(user must be budget and pass too)
function validateUserPass() {
    var user = document.getElementById("userHtml").value;
    var pass = document.getElementById("passHtml").value;

    if ((user == "budget") && (pass == "budget")) {
        window.open("form.htm");
    }
    else {
        window.alert("***User and Password incorrect***\nLogin = budget, Password = budget");
    }
}


function addingIncomes() {
    var inc = parseFloat(document.getElementById('salary').value) +
              parseFloat(document.getElementById('rents').value) +
              parseFloat(document.getElementById('interests').value) +
              parseFloat(document.getElementById('others').value);

    localStorage.setItem("salary" + getMonth(), parseFloat(document.getElementById('salary').value));
    localStorage.setItem("rents" + getMonth(), parseFloat(document.getElementById('rents').value));
    localStorage.setItem("interests" + getMonth(), parseFloat(document.getElementById('interests').value));
    localStorage.setItem("others" + getMonth(), parseFloat(document.getElementById('others').value));

    localStorage.setItem("totalIncomes", inc);
    var monthName = "month" + getMonth();
    localStorage.setItem(monthName, getMonth());

    document.getElementById('total_incomes').innerHTML = "Incomes are U$  " + inc;
    return inc;
}

function addingExpenses() {
    var tithing = (addingIncomes() * 10 / 100);
    var exp = //parseFloat(document.getElementById('tithing').value) +
              tithing +
              parseFloat(document.getElementById('housing').value) +
              parseFloat(document.getElementById('pub_bills').value) +
              parseFloat(document.getElementById('health').value) +
              parseFloat(document.getElementById('education').value) +
              parseFloat(document.getElementById('transportation').value) +
              parseFloat(document.getElementById('store').value) +
              parseFloat(document.getElementById('tv_phone_int').value) +
              parseFloat(document.getElementById('taxes').value) +
              parseFloat(document.getElementById('restaurants').value) +
              parseFloat(document.getElementById('shops').value) +
              parseFloat(document.getElementById('gifts').value) +
              parseFloat(document.getElementById('personal_care').value) +
              parseFloat(document.getElementById('services').value) +
              parseFloat(document.getElementById('trips').value);

    localStorage.setItem("tithing" + getMonth(), tithing);
    localStorage.setItem("housing" + getMonth(), parseFloat(document.getElementById('housing').value));
    localStorage.setItem("pub_bills" + getMonth(), parseFloat(document.getElementById('pub_bills').value));
    localStorage.setItem("health" + getMonth(), parseFloat(document.getElementById('health').value));
    localStorage.setItem("education" + getMonth(), parseFloat(document.getElementById('education').value));
    localStorage.setItem("transportation" + getMonth(), parseFloat(document.getElementById('transportation').value));
    localStorage.setItem("store" + getMonth(), parseFloat(document.getElementById('store').value));
    localStorage.setItem("tv_phone_int" + getMonth(), parseFloat(document.getElementById('tv_phone_int').value));
    localStorage.setItem("taxes" + getMonth(), parseFloat(document.getElementById('taxes').value));
    localStorage.setItem("restaurants" + getMonth(), parseFloat(document.getElementById('restaurants').value));
    localStorage.setItem("shops" + getMonth(), parseFloat(document.getElementById('shops').value));
    localStorage.setItem("gifts" + getMonth(), parseFloat(document.getElementById('gifts').value));
    localStorage.setItem("personal_care" + getMonth(), parseFloat(document.getElementById('personal_care').value));
    localStorage.setItem("services" + getMonth(), parseFloat(document.getElementById('services').value));
    localStorage.setItem("trips" + getMonth(), parseFloat(document.getElementById('trips').value));

    localStorage.setItem("totalExpenses", exp);
    document.getElementById('tithing').innerHTML = "U$ " + tithing;
    document.getElementById('total_expenses').innerHTML = "Expenses are U$  " + exp;
    return exp;
}

function balance() {
    var bal = (addingIncomes() - addingExpenses());
    localStorage.setItem("balance", bal);
    document.getElementById('balance').innerHTML = "<center>Your balance is U$  " + bal + " in " + getMonth();
}

function getMonth() {
    var month = document.getElementById("months").value;
    localStorage.setItem("Month", month);
    return month;
}

if (typeof (Storage) !== "undefined") {

    localStorage.setItem("message", "Project App (team 7)");

    document.getElementById("check").innerHTML = localStorage.getItem("message");

    localStorage.removeItem("message");


    function json() {
        var json1L = '{"one":"Choose the month","two":"Enter your Income","three":"Enter your and Expances"}';

        var json2L = '{"e1":"Step one is","e2":"Step two is","e3":"Step three is"}';



        localStorage.setItem('temp', json2L);
        localStorage.setItem('temp2', json1L);

        var t;
        var t2;

        t = localStorage.getItem('temp');
        t2 = localStorage.getItem('temp2');

        var one = JSON.parse(t2);
        var two = JSON.parse(t);



        document.getElementById("one").innerHTML = one.one;
        document.getElementById("two").innerHTML = one.two;
        document.getElementById("three").innerHTML = one.three;

        document.getElementById("1").innerHTML = two.e1;
        document.getElementById("2").innerHTML = two.e2;
        document.getElementById("3").innerHTML = two.e3;


    }


} else {
    document.getElementById("check").innerHTML = "Sorry, your browser does not support Web Storage :(";
}

function compute() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);

    var sum = income - expenses;

    document.getElementById('amount').innerHTML = "Your balance is " + sum + "$";
}

function getJson() {


    var xmlhttp = new XMLHttpRequest();
    var url = "ajax-project.json";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json1 = JSON.parse(this.responseText);
            parsJson(json1);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}
function parsJson(json1) {

    if (typeof (Storage) !== "undefined") {

        localStorage.setItem('test', JSON.stringify(json1));

        var x;
        x = localStorage.getItem('test');



        var y = JSON.parse(x);
        document.getElementById("one2").innerHTML = y.one;
        document.getElementById("two2").innerHTML = y.two;
        document.getElementById("three2").innerHTML = y.three;



    } else {
        document.getElementById("check").innerHTML = "Sorry, your browser does not support Web Storage :(";
    }
}


