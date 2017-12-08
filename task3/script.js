var myLib,
    buffer,
    users = [{
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

myLib = (function () {

    return {
        makeBuffer: function () {
            var buffer = '';

            document.getElementById('addBuffer').onclick = function () {
                buffer += document.getElementById("bufferVal").value;
                buffer += "<br />";
                document.getElementById("bufferVal").value = '';
            };

            document.getElementById('showBuffer').onclick = function () {

                if (buffer.length === 0) {
                    document.getElementById('result').innerHTML = 'Буфер пуст!';
                } else {
                    document.getElementById('result').innerHTML = buffer;
                }
            };

            document.getElementById('clearBuffer').onclick = function () {
                buffer = '';
                document.getElementById('result').innerHTML = buffer;
            };
        },

        /*name: function () {
            var select, value;
            select = document.getElementById("sorting"); // Выбираем  select по id
            value = select.options[select.selectedIndex].value; // Значение value для выбранного option
            return value;
        },*/

        byField: function (field) {
            return function (a, b) {
                return a[field] > b[field] ? 1 : -1;
            };
        }
    }
})();

buffer =  myLib.makeBuffer();

console.log(users.sort(myLib.byField('surname')));


