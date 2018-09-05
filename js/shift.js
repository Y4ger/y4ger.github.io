function hello() {
    'use strict';
    var code = document.getElementById("myText").value,
        possible = [[]],
        solution = "",
        i = 0,
        clen = 0,
        plen = 0,
        test = document.getElementById('test'),
        resp = document.getElementById('responses'),
        sol = document.getElementById('solution'),
        resp1 = document.getElementById('resp1'),
        resp2 = document.getElementById('resp2'),
        resp3 = document.getElementById('resp3'),
        shift = 0,
        k = 0,
        count = 1,
        found = false,
        j = 20;
        
    code = code.toLowerCase();
    clen = code.length;
    while (count < 26) {
        //go through each letter in the code
        for (i = 0; i < clen; i += 1) {
            if (code.charCodeAt(i) >= 0 && code.charCodeAt(i) < 97) {
                solution += code.charAt(i);
                
            } else if (code.charCodeAt(i) + count > 122) {
                shift = (code.charCodeAt(i) + count) - 123;
                solution += String.fromCharCode(shift + 97);
                
            } else {
                solution += String.fromCharCode(code.charCodeAt(i) + count);
            }
        }
        possible.push(solution);
        count += 1;
        solution = "";
    }
    
    plen = possible.length;
    for (k = 0; k < plen; k += 1) {
        if (possible[k].includes('the') || possible[k].includes('have') || possible[k].includes('for') || possible[k].includes('and') || possible[k].includes('that') || possible[k].includes('you')) {
            test.innerHTML += '<p>' + possible[k] + '</p>';
            found = true;
        }
    }
    if (!found) {
        test.innerHTML += '<h1>' + "I couldn't find a message" + '</h1>' + '<h1>' + 'Maybe you can' + '</h1>';
        for (k = 0; k < possible.length; k += 1) {
            if (k < 9) {
                resp1.innerHTML += '<p>' + possible[k] + '</p>';
            } else if (k > 8 && k < 18) {
                resp2.innerHTML += '<p>' + possible[k] + '</p>';
            } else {
                resp3.innerHTML += '<p>' + possible[k] + '</p>';
            }
        }
    }
}



function encode() {
    'use strict';
    
    var solution = "",
        code = document.getElementById("myText").value,
        i = 0,
        test = document.getElementById('test'),
        shift = 0,
        k = Math.floor((Math.random() * 25) + 1);

    code = code.toLowerCase();
    //go through each letter in the code
    for (i = 0; i < code.length; i += 1) {
        if (code.charCodeAt(i) >= 0 && code.charCodeAt(i) < 97) {
            solution += code.charAt(i);
        } else if (code.charCodeAt(i) + k > 122) {
            shift = (code.charCodeAt(i) + k) - 123;
            solution += String.fromCharCode(shift + 97);

        } else {
            solution += String.fromCharCode(code.charCodeAt(i) + k);
        }
    }
    test.innerHTML += '<h2>' + "Don't tell a soul" + '</h2>';
    test.innerHTML += '<p>' + solution + '</p>';
}

function enterh(e) {
    'use strict';
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) { //Enter keycode
        hello();
    }
}

function entere(e) {
    'use strict';
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) { //Enter keycode
        encode();
    }
}
