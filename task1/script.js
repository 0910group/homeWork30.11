function makeBuffer() {

    //Set up variables
    var buffer = '';

    document.getElementById('addBuffer').onclick = function() {
        buffer += document.getElementById("bufferVal").value;
        buffer += "<br />";
        document.getElementById("bufferVal").value = '';
    };

    document.getElementById('showBuffer').onclick = function() {

        if (buffer.length === 0) {
            document.getElementById('result').innerHTML = 'Буфер пуст!';
        } else {
            document.getElementById('result').innerHTML = buffer;
        }
    };

    document.getElementById('clearBuffer').onclick = function() {
        buffer = '';
        document.getElementById('result').innerHTML = buffer;
    };
}

var buffer = makeBuffer();