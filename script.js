function generateMultiplicationTable() {
    var num = document.getElementById('txtn').value;
    var tab = document.getElementById('selmult');

    if (num.length == 0) {
        alert('Please insert a number.');
    } else {
        var n = Number(num);
        var c = 1;
        tab.innerHTML = '';

        while (c <= 10) {
            var option = document.createElement('option');
            option.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(option);
            c++;
        }
    }
}

function generateDivisionTable() {
    var dividend = document.getElementById('txtd').value;
    var tab = document.getElementById('selmult');

    if (dividend.length == 0) {
        alert('Please insert a number.');
    } else {
        var n = Number(dividend);
        var c = 1;
        tab.innerHTML = '';

        while (c <= 10) {
            var option = document.createElement('option');
            if (n % c === 0) {
                option.text = `${n} ÷ ${c} = ${n / c}`;
            } else {
                option.text = `${n} ÷ ${c} = ${(n / c).toFixed(2)}`; // Show division result up to 2 decimal places
            }
            tab.appendChild(option);
            c++;
        }
    }
}

