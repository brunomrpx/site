var Terminal = (function() {
    // public API
    var PUBLIC = {}
    var DOMTerminal;
    var isWriting = false;
    var writingQueue = [];

    PUBLIC.init = function(options) {
        DOMTerminal = options.DOMTerminal || null;
    }

    insertLineBreak = function() {
        DOMTerminal.innerHTML += "<br>"
    }

    insertBeginShell = function() {
        DOMTerminal.innerHTML += "[bruno@brunomrpx:~/site] <mark>$</mark> > ";
    }

    PUBLIC.write = function(text) {
        if (isWriting) {
            writingQueue.push(text);
            return;
        }

        insertBeginShell();
        isWriting = true;
        var wordPosition = 0;
        writingText = setInterval(function() {
            var wroteLastWord = text.length == wordPosition;
            if (wroteLastWord) {
                isWriting = false;
                clearInterval(writingText);
                insertLineBreak();

                var hasTextToWrite = writingQueue.length > 0;
                if (hasTextToWrite) {
                    var nextText = writingQueue[0];
                    // Remove first elemnt of writingQueue
                    writingQueue.shift()
                    PUBLIC.write(nextText);
                }

                return;
            }

            DOMTerminal.innerHTML += text[wordPosition];
            wordPosition++;
        }, 50);
    }

    return PUBLIC;

})();

var DOMTerminal = document.querySelector('#terminal');

Terminal.init({
    DOMTerminal: DOMTerminal
});

Terminal.write('Seja bem vindo(a).');
Terminal.write('');
Terminal.write('Meu nome é Bruno, tenho 20 anos e Trabalho com tecnologias WEB desde 2014.');
Terminal.write('');
Terminal.write('');
Terminal.write('Este site ainda está em construção!');
Terminal.write('');
Terminal.write('');
Terminal.write('');
Terminal.write('Contato:');
Terminal.write('');
Terminal.write('Github: github.com/brunomrpx');
Terminal.write('Email: brunomrpx@gmail.com');
Terminal.write('');
Terminal.write('');

