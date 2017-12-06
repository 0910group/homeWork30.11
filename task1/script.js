function makeBuffer() {

//Устанавливаем переменные

    var bufferValue = '',
        buffer;

/*
Arguments - это псевдомассив, объект. Ключи - числовые, их значение и length
Если arguments пустой, возвращаем значения буфера; нет - добавляем к буферу данные через конкатенацию
*/

    buffer = function (argument) {

        if(arguments.length === 0) {
            return bufferValue;
        }

        bufferValue += argument;
    };

    buffer.clear = function () {
        bufferValue = '';
    };

    return buffer;
}