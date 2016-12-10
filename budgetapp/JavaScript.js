function addingIncomes() {
    var inc = parseFloat(document.getElementById('salary').value) +
              parseFloat(document.getElementById('rents').value) +
              parseFloat(document.getElementById('interests').value) +
              parseFloat(document.getElementById('others').value);
    localStorage.setItem("totalIncomes", inc);
    var monthName = "month" + getMonth();
    localStorage.setItem(monthName, getMonth());

    document.getElementById('total_incomes').innerHTML = "Your income is $  " + inc;
    return inc;
}

function addingExpenses() {
    var exp = parseFloat(document.getElementById('tithing').value) +
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
    localStorage.setItem("totalExpenses", exp);
    document.getElementById('total_expenses').innerHTML = "Your expenses are $  " + exp;
    return exp;
}

function balance() {
    var bal = (addingIncomes() - addingExpenses());
    localStorage.setItem("balance", bal);
    document.getElementById('balance').innerHTML = "<center>Your balance is $  " + bal + " in " + getMonth();
}

function getMonth() {
    var month = document.getElementById("months").value;
    localStorage.setItem("Month", month);
    return month;
}
