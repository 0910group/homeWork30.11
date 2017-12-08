
var users = [{
	name: "Вася",
	surname: 'Иванов',
	age: 20
}, {
	name: "Петя",
	surname: 'Чапаев',
	age: 25
}, {
	name: "Маша",
	surname: 'Медведева',
	age: 18
}];


function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
    }
}

document.getElementById('submitSort').onclick = function () {
	var i, key;

	getValue = function () {
        var select, value;
        select = document.getElementById("sorting"); // Выбираем  select по id
        value = select.options[select.selectedIndex].value;
        return value;
    };

    users.sort(byField(getValue()));
    document.getElementById('result').innerHTML = '';

	for(i = 0; i < users.length; i++) {

		for (key in users[i]) {
            document.getElementById('result').innerHTML += users[i][key] + ' ';
        }

        document.getElementById('result').innerHTML += '<br />';
	}
};
